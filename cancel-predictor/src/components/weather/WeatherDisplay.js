import React, { useState } from 'react';
import styled from 'styled-components';
import { WeatherForm } from './WeatherForm';

export const CenteredContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
    flex-direction: column;
`;
export function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);

  /*
    Have a button trigger the api call.
    Fetch from api and process, then spit out the current weather, and the weather in a few hours.
    */

  return (
    <CenteredContent>
      <WeatherForm setWeatherData={setWeatherData} />
      <div>
        {JSON.stringify(weatherData)}
      </div>
    </CenteredContent>
  );
}
