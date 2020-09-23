import React from 'react';
import {
  faThermometerHalf, faWind, faCloud, faBinoculars, faCloudRain, faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { getWindDirection } from './wind-util.js';

const milesPerHourMultiplier = 2.23694; // api response gives wind speed in m/s

const getWeatherNow = (weatherData) => {
  const { current } = weatherData;

  return {
    temp: current.temp,
    feelsLike: current.feels_like,
    clouds: current.clouds,
    rainInLastHour: (current.rain?.['1h'] || 0), // rain might not always appear?
    visibility: current.visibility,
    windSpeed: (current.wind_speed * milesPerHourMultiplier).toFixed(1),
    windDegrees: current.wind_deg,
    windDirection: getWindDirection(current.wind_deg),
  };
};

const WeatherPane = styled.div`
    display: flex;

    .weatherFeature {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 36px;

        .icon {
            font-size: 48px;
        }
    }
`;

export function WeatherInfo({ weatherData }) {
  const weatherNow = getWeatherNow(weatherData);

  return (
    <div>
      <h2>
        Weather Now
      </h2>
      <WeatherPane>
        <div className="weatherFeature">
          <FontAwesomeIcon className="icon" icon={faThermometerHalf} aria-label="Temperature" aria-hidden="false" />
          <div>
            {weatherNow.temp}
            &#176;C
          </div>
        </div>
        <div className="weatherFeature">
          <FontAwesomeIcon className="icon" icon={faWind} aria-label="Wind speed" aria-hidden="false" />
          <div>
            {weatherNow.windSpeed}
            mph
          </div>
        </div>
        <div className="weatherFeature">
          <FontAwesomeIcon className="icon" icon={faArrowUp} aria-label="Wind direction" aria-hidden="false" rotation={weatherNow.windDirection.rotation} />
          <div>
            {weatherNow.windDirection.abbr}
          </div>
        </div>
        <div className="weatherFeature">
          <FontAwesomeIcon className="icon" icon={faCloudRain} aria-label="Rainfall in last hour" aria-hidden="false" />
          <div>
            {weatherNow.rainInLastHour}
            mm
          </div>
        </div>
        <div className="weatherFeature">
          <FontAwesomeIcon className="icon" icon={faCloud} aria-label="Cloud cover" aria-hidden="false" />
          <div>
            {weatherNow.clouds}
            %
          </div>
        </div>
        <div className="weatherFeature">
          <FontAwesomeIcon className="icon" icon={faBinoculars} aria-label="Visibility" aria-hidden="false" />
          <div>
            {weatherNow.visibility}
            m
          </div>
        </div>
      </WeatherPane>
    </div>
  );
}
