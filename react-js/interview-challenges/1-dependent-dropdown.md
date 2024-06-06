```jsx
import React, { useState } from 'react';
import './App.css';

// Sample data for countries and their respective states
const countryData = {
  USA: ['California', 'Texas', 'New York'],
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
  // Add more countries and their respective states here
};

const DependentDropdown = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const countries = Object.keys(countryData);
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySearch = (event) => {
    setSearchTerm(event.target.value);
    setIsOpen(true);
    setSelectedCountry(null);
    setSelectedState(null);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchTerm(country);
    setIsOpen(false);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
  };

  return (
    <div className="dropdown-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleCountrySearch}
        placeholder="Search for a country..."
        className="dropdown-input"
      />
      {isOpen && (
        <ul className="dropdown-menu">
          {filteredCountries.map((country) => (
            <li
              key={country}
              onClick={() => handleCountrySelect(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
      {selectedCountry && (
        <div>
          <p className="selected-option">Selected Country: {selectedCountry}</p>
          <label htmlFor="state">Select State:</label>
          <select
            id="state"
            value={selectedState}
            onChange={(e) => handleStateSelect(e.target.value)}
            className="dropdown-input"
          >
            <option value="">Select a State</option>
            {countryData[selectedCountry].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <p className="selected-option">Selected State: {selectedState}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Dependent Dropdown</h1>
      <DependentDropdown />
    </div>
  );
};

export default App;
```
