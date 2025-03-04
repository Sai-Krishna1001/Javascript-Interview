# Task: Create a React Application to Display Country Information

## Goal
Develop a React application that fetches and displays a table with the following details about countries:
- **Name**
- **Capital(s)** (if multiple, display all)
- **Language(s)** (display up to 3, formatted as `key(value)`)

## Data Source
- **API Endpoint**: [`https://restcountries.com/v3.1/all?fields=name,capital,languages,flag,population`](https://restcountries.com/v3.1/all?fields=name,capital,languages,flag,population)
- **JSON Formatter**: [`http://jsonblob.com/1344684125495418880`](http://jsonblob.com/1344684125495418880)

## Requirements
- Use **React.js** to build the application.
- Fetch data from the provided API and display it in a tabular format.
- Ensure proper formatting:
  - Display **all capitals** if multiple exist.
  - Show up to **three languages** in `key(value)` format.
- Implement **basic styling** for a clean UI.
- Handle **loading states** and **error handling** for API requests.
- Optimize performance with memoization techniques where necessary.

## Additional Considerations
- Optionally use a **UI library (e.g., MUI, Tailwind CSS)** for styling.
- Implement **pagination or search functionality** if dealing with large datasets.
- Use **React hooks (`useState`, `useEffect`)** effectively.
- Ensure responsiveness for different screen sizes.

---

### Suggested File Structure
```
/react-countries-app
│── src/
│   ├── components/
│   │   ├── Table.js
│   │   ├── TableRow.js
│   ├── services/
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│── package.json
│── README.md
```

---

## Code Implementation

### 1. Install Dependencies
```sh
npx create-react-app react-countries-app --template cra-template-pwa
cd react-countries-app
npm install axios
```

### 2. Fetch Data (api.js)
```javascript
import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,languages,flag,population';

export const fetchCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};
```

### 3. Table Component (Table.js)
```javascript
import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../services/api';
import TableRow from './TableRow';
import './styles.css';

const Table = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries()
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Capital(s)</th>
          <th>Languages</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <TableRow key={index} country={country} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
```

### 4. Table Row Component (TableRow.js)
```javascript
import React from 'react';

const TableRow = ({ country }) => {
  const { name, capital, languages } = country;
  const formattedLanguages = languages ? Object.entries(languages).slice(0, 3).map(([key, value]) => `${key}(${value})`).join(', ') : 'N/A';

  return (
    <tr>
      <td>{name?.common || 'N/A'}</td>
      <td>{capital ? capital.join(', ') : 'N/A'}</td>
      <td>{formattedLanguages}</td>
    </tr>
  );
};

export default TableRow;
```

### 5. Main App Component (App.js)
```javascript
import React from 'react';
import Table from './components/Table';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Country Information</h1>
      <Table />
    </div>
  );
};

export default App;
```

### 6. Styles (styles.css)
```css
.app-container {
  text-align: center;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 10px;
  text-align: left;
}
```

### 7. Entry Point (index.js)
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

