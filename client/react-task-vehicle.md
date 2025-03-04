# Vehicle Details Fetching App

## Goal
Create a React application to fetch vehicle details based on model, brand, and make.

## API Endpoint
`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`

## Requirements
- Use React.js to build the application.
- Fetch vehicle details based on user input for "Make".
- Display the results in a structured table format.
- Implement loading and error handling.
- Provide a user-friendly interface with a search option.
- Optional: Use Tailwind CSS or Material UI for better UI/UX.

## Suggested File Structure
```
/vehicle-details-app
│── src/
│   ├── components/
│   │   ├── VehicleTable.js
│   │   ├── VehicleRow.js
│   ├── services/
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── package.json
├── README.md
```

## Installation
```sh
npx create-react-app vehicle-details-app
cd vehicle-details-app
npm install axios
```

## Fetch Data (`api.js`)
```javascript
import axios from 'axios';

const fetchVehicleDetails = async (make) => {
  try {
    const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`);
    return response.data.Results;
  } catch (error) {
    console.error('Error fetching vehicle details:', error);
    return [];
  }
};

export { fetchVehicleDetails };
```

## Vehicle Table Component (`VehicleTable.js`)
```javascript
import React, { useState } from 'react';
import { fetchVehicleDetails } from '../services/api';

const VehicleTable = () => {
  const [make, setMake] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!make) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchVehicleDetails(make);
      setVehicles(data);
    } catch (err) {
      setError('Failed to fetch vehicle details.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Vehicle Details</h1>
      <input
        type="text"
        placeholder="Enter vehicle make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.Make_Name}</td>
              <td>{vehicle.Model_Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
```

## Main App Component (`App.js`)
```javascript
import React from 'react';
import VehicleTable from './components/VehicleTable';

const App = () => {
  return (
    <div>
      <VehicleTable />
    </div>
  );
};

export default App;
```

## Entry Point (`index.js`)
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
