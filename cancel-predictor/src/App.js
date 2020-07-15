import React from 'react';
import { Topbar } from './components/topbar/Topbar';
import { WeatherContent } from './components/weather/WeatherContent';

function App() {
  return (
    <div className="App">
      <Topbar />
      <WeatherContent />
    </div>
  );
}

export default App;
