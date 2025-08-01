import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>🌍 DashZone</h1>
      <SearchBar />
      <WeatherWidget />
    </div>
  );
}

export default App;
