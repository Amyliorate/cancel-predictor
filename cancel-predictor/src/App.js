import React from 'react';
import { Topbar } from './components/topbar/Topbar';
import { WeatherDisplay } from './components/weather/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <Topbar />
      <WeatherDisplay />
    </div>
  );
}

export default App;
