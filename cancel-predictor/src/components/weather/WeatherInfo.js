import React from 'react';
import {
  faThermometerHalf, faWind, faCloud, faBinoculars, faCloudRain,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const milesPerHourMultiplier = 2.23694; // api response gives wind speed in m/s

/*
Consequently, a wind blowing from the north has a wind direction of 0° (360°);
a wind blowing from the east has a wind direction of 90°; a wind blowing from the south has a wind direction of 180°;
and a wind blowing from the west has a wind direction of 270°.
In general, wind directions are measured in units from 0° to 360°,
*/
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
          <FontAwesomeIcon className="icon" icon={faWind} aria-label="Wind direction" aria-hidden="false" />
          <div>
            {weatherNow.windDegrees}
            &#176;
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
