export const extractedSampleData = {
  temperature: 28.41,
  cloudCover: 90,
  visibility: 4500,
  windDegrees: 70,
  rainInLastHour: 1.52,
};

/*
Sample API response from the OneCall Api
Obtained by calling https://api.openweathermap.org/data/2.5/onecall?lat=52.4862&lon=-1.8904&appid=MY_API_KEY

(The lat and long are for Birmingham)

If we make a request at Wed Jul 08 2020 17:03:41 GMT+0100
We get hourly forcast from Wed Jul 08 2020 17:00:41 GMT+0100 to Fri Jul 10 2020 16:00:00 GMT+0100
*/
export const sample = {
  lat: 52.49,
  lon: -1.89,
  timezone: 'Europe/London',
  timezone_offset: 3600,
  current: {
    dt: 1594224221, // Time of request in millis
    sunrise: 1594180521,
    sunset: 1594240176,
    temp: 28.41,
    feels_like: 288.25,
    pressure: 1015,
    humidity: 93,
    dew_point: 287.29,
    uvi: 7.3,
    clouds: 90, // cloudiness %
    visibility: 4500, // visibilty (metres)
    wind_speed: 2.1, // wind speed (m/s) units can be changed
    wind_deg: 70,
    weather: [
      {
        id: 701,
        main: 'Mist',
        description: 'mist',
        icon: '50d',
      },
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10d',
      },
      {
        id: 310,
        main: 'Drizzle',
        description: 'light intensity drizzle rain',
        icon: '09d',
      },
    ],
    rain: {
      '1h': 1.52, // rainfall in last hour in mm
    },
  },
  hourly: [
    {
      dt: 1594224000,
      temp: 28.41,
      feels_like: 288.39,
      pressure: 1015,
      humidity: 93,
      dew_point: 287.29,
      clouds: 90,
      wind_speed: 1.9,
      wind_deg: 132,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.51,
      },
    },
    {
      dt: 1594227600,
      temp: 288.68,
      feels_like: 288.41,
      pressure: 1015,
      humidity: 90,
      dew_point: 287.05,
      clouds: 94,
      wind_speed: 2.14,
      wind_deg: 137,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.22,
      },
    },
    {
      dt: 1594231200,
      temp: 288.57,
      feels_like: 288.54,
      pressure: 1014,
      humidity: 89,
      dew_point: 286.77,
      clouds: 96,
      wind_speed: 1.67,
      wind_deg: 147,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.15,
      },
    },
    {
      dt: 1594234800,
      temp: 288.33,
      feels_like: 288.43,
      pressure: 1014,
      humidity: 91,
      dew_point: 286.87,
      clouds: 99,
      wind_speed: 1.53,
      wind_deg: 166,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.65,
      },
    },
    {
      dt: 1594238400,
      temp: 288.21,
      feels_like: 288.16,
      pressure: 1013,
      humidity: 93,
      dew_point: 287.09,
      clouds: 100,
      wind_speed: 1.84,
      wind_deg: 178,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.76,
      },
    },
    {
      dt: 1594242000,
      temp: 288.36,
      feels_like: 287.81,
      pressure: 1013,
      humidity: 94,
      dew_point: 287.49,
      clouds: 100,
      wind_speed: 2.72,
      wind_deg: 199,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      rain: {
        '1h': 0.56,
      },
    },
    {
      dt: 1594245600,
      temp: 288.49,
      feels_like: 287.17,
      pressure: 1013,
      humidity: 93,
      dew_point: 287.48,
      clouds: 100,
      wind_speed: 3.8,
      wind_deg: 219,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      rain: {
        '1h': 0.55,
      },
    },
    {
      dt: 1594249200,
      temp: 288.55,
      feels_like: 286.9,
      pressure: 1012,
      humidity: 91,
      dew_point: 287.14,
      clouds: 100,
      wind_speed: 4.14,
      wind_deg: 225,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594252800,
      temp: 288.46,
      feels_like: 286.21,
      pressure: 1012,
      humidity: 89,
      dew_point: 286.66,
      clouds: 100,
      wind_speed: 4.78,
      wind_deg: 214,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594256400,
      temp: 288.17,
      feels_like: 285.27,
      pressure: 1012,
      humidity: 89,
      dew_point: 286.46,
      clouds: 100,
      wind_speed: 5.58,
      wind_deg: 205,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      rain: {
        '1h': 0.28,
      },
    },
    {
      dt: 1594260000,
      temp: 287.75,
      feels_like: 284.57,
      pressure: 1011,
      humidity: 91,
      dew_point: 286.39,
      clouds: 100,
      wind_speed: 5.95,
      wind_deg: 213,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      rain: {
        '1h': 1.11,
      },
    },
    {
      dt: 1594263600,
      temp: 287.92,
      feels_like: 284.64,
      pressure: 1010,
      humidity: 91,
      dew_point: 286.58,
      clouds: 100,
      wind_speed: 6.17,
      wind_deg: 212,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      rain: {
        '1h': 0.12,
      },
    },
    {
      dt: 1594267200,
      temp: 288.34,
      feels_like: 284.78,
      pressure: 1009,
      humidity: 91,
      dew_point: 286.98,
      clouds: 100,
      wind_speed: 6.76,
      wind_deg: 224,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594270800,
      temp: 288.58,
      feels_like: 285.58,
      pressure: 1009,
      humidity: 91,
      dew_point: 287.15,
      clouds: 100,
      wind_speed: 6.08,
      wind_deg: 233,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594274400,
      temp: 288.66,
      feels_like: 286.24,
      pressure: 1009,
      humidity: 91,
      dew_point: 287.2,
      clouds: 100,
      wind_speed: 5.29,
      wind_deg: 236,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594278000,
      temp: 288.8,
      feels_like: 286.6,
      pressure: 1010,
      humidity: 90,
      dew_point: 287.22,
      clouds: 100,
      wind_speed: 4.95,
      wind_deg: 239,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594281600,
      temp: 289.03,
      feels_like: 287.21,
      pressure: 1010,
      humidity: 89,
      dew_point: 287.29,
      clouds: 100,
      wind_speed: 4.44,
      wind_deg: 247,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594285200,
      temp: 290.5,
      feels_like: 288.8,
      pressure: 1010,
      humidity: 82,
      dew_point: 287.44,
      clouds: 97,
      wind_speed: 4.35,
      wind_deg: 259,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594288800,
      temp: 290.95,
      feels_like: 289.9,
      pressure: 1011,
      humidity: 80,
      dew_point: 287.61,
      clouds: 98,
      wind_speed: 3.46,
      wind_deg: 274,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594292400,
      temp: 290.83,
      feels_like: 290.46,
      pressure: 1011,
      humidity: 80,
      dew_point: 287.45,
      clouds: 98,
      wind_speed: 2.43,
      wind_deg: 319,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.29,
      },
    },
    {
      dt: 1594296000,
      temp: 289.24,
      feels_like: 288.24,
      pressure: 1011,
      humidity: 83,
      dew_point: 286.44,
      clouds: 99,
      wind_speed: 2.86,
      wind_deg: 19,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.29,
      },
    },
    {
      dt: 1594299600,
      temp: 288.12,
      feels_like: 286.49,
      pressure: 1011,
      humidity: 85,
      dew_point: 285.74,
      clouds: 100,
      wind_speed: 3.42,
      wind_deg: 30,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594303200,
      temp: 287.68,
      feels_like: 285.74,
      pressure: 1012,
      humidity: 85,
      dew_point: 285.25,
      clouds: 100,
      wind_speed: 3.68,
      wind_deg: 33,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594306800,
      temp: 287.25,
      feels_like: 285.12,
      pressure: 1012,
      humidity: 84,
      dew_point: 284.75,
      clouds: 100,
      wind_speed: 3.69,
      wind_deg: 41,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594310400,
      temp: 286.91,
      feels_like: 285.05,
      pressure: 1012,
      humidity: 85,
      dew_point: 284.45,
      clouds: 100,
      wind_speed: 3.23,
      wind_deg: 44,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594314000,
      temp: 286.81,
      feels_like: 284.8,
      pressure: 1011,
      humidity: 85,
      dew_point: 284.46,
      clouds: 100,
      wind_speed: 3.41,
      wind_deg: 33,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594317600,
      temp: 286.67,
      feels_like: 284.57,
      pressure: 1012,
      humidity: 85,
      dew_point: 284.29,
      clouds: 100,
      wind_speed: 3.48,
      wind_deg: 31,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594321200,
      temp: 286.36,
      feels_like: 284.2,
      pressure: 1012,
      humidity: 84,
      dew_point: 283.88,
      clouds: 100,
      wind_speed: 3.37,
      wind_deg: 40,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594324800,
      temp: 286,
      feels_like: 284.07,
      pressure: 1013,
      humidity: 86,
      dew_point: 283.72,
      clouds: 100,
      wind_speed: 3.04,
      wind_deg: 25,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594328400,
      temp: 285.66,
      feels_like: 283.8,
      pressure: 1013,
      humidity: 86,
      dew_point: 283.42,
      clouds: 100,
      wind_speed: 2.81,
      wind_deg: 19,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594332000,
      temp: 285.32,
      feels_like: 283.57,
      pressure: 1013,
      humidity: 86,
      dew_point: 283.17,
      clouds: 100,
      wind_speed: 2.52,
      wind_deg: 10,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594335600,
      temp: 285.16,
      feels_like: 283.43,
      pressure: 1014,
      humidity: 86,
      dew_point: 282.92,
      clouds: 98,
      wind_speed: 2.43,
      wind_deg: 3,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594339200,
      temp: 285.19,
      feels_like: 283.8,
      pressure: 1014,
      humidity: 85,
      dew_point: 282.78,
      clouds: 98,
      wind_speed: 1.89,
      wind_deg: 351,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594342800,
      temp: 285.23,
      feels_like: 283.63,
      pressure: 1014,
      humidity: 84,
      dew_point: 282.73,
      clouds: 100,
      wind_speed: 2.14,
      wind_deg: 325,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594346400,
      temp: 285.06,
      feels_like: 282.24,
      pressure: 1014,
      humidity: 84,
      dew_point: 282.61,
      clouds: 100,
      wind_speed: 3.83,
      wind_deg: 320,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594350000,
      temp: 284.62,
      feels_like: 281.61,
      pressure: 1014,
      humidity: 85,
      dew_point: 282.21,
      clouds: 100,
      wind_speed: 4.01,
      wind_deg: 315,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1594353600,
      temp: 284.48,
      feels_like: 280.86,
      pressure: 1014,
      humidity: 80,
      dew_point: 281.18,
      clouds: 100,
      wind_speed: 4.51,
      wind_deg: 313,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594357200,
      temp: 283.31,
      feels_like: 279.25,
      pressure: 1015,
      humidity: 78,
      dew_point: 279.73,
      clouds: 82,
      wind_speed: 4.64,
      wind_deg: 309,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594360800,
      temp: 283.83,
      feels_like: 279.37,
      pressure: 1015,
      humidity: 76,
      dew_point: 279.91,
      clouds: 69,
      wind_speed: 5.25,
      wind_deg: 308,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1594364400,
      temp: 285.01,
      feels_like: 280.13,
      pressure: 1016,
      humidity: 72,
      dew_point: 280.32,
      clouds: 0,
      wind_speed: 5.97,
      wind_deg: 307,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1594368000,
      temp: 286.07,
      feels_like: 280.92,
      pressure: 1016,
      humidity: 67,
      dew_point: 280.16,
      clouds: 0,
      wind_speed: 6.34,
      wind_deg: 305,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1594371600,
      temp: 287.13,
      feels_like: 281.9,
      pressure: 1016,
      humidity: 62,
      dew_point: 280.03,
      clouds: 0,
      wind_speed: 6.42,
      wind_deg: 300,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1594375200,
      temp: 288.13,
      feels_like: 282.86,
      pressure: 1017,
      humidity: 60,
      dew_point: 280.45,
      clouds: 1,
      wind_speed: 6.62,
      wind_deg: 303,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.12,
      },
    },
    {
      dt: 1594378800,
      temp: 288.83,
      feels_like: 283.48,
      pressure: 1017,
      humidity: 60,
      dew_point: 281.25,
      clouds: 12,
      wind_speed: 6.95,
      wind_deg: 309,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.12,
      },
    },
    {
      dt: 1594382400,
      temp: 289.2,
      feels_like: 283.33,
      pressure: 1017,
      humidity: 61,
      dew_point: 281.81,
      clouds: 16,
      wind_speed: 7.91,
      wind_deg: 313,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.22,
      },
    },
    {
      dt: 1594386000,
      temp: 289.43,
      feels_like: 283.89,
      pressure: 1017,
      humidity: 59,
      dew_point: 281.46,
      clouds: 36,
      wind_speed: 7.33,
      wind_deg: 317,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.12,
      },
    },
    {
      dt: 1594389600,
      temp: 290.3,
      feels_like: 284.72,
      pressure: 1017,
      humidity: 54,
      dew_point: 280.93,
      clouds: 18,
      wind_speed: 7.22,
      wind_deg: 314,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
    },
    {
      dt: 1594393200,
      temp: 290.17,
      feels_like: 284.42,
      pressure: 1018,
      humidity: 52,
      dew_point: 280.33,
      clouds: 12,
      wind_speed: 7.25,
      wind_deg: 317,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
    },
  ],
  daily: [
    {
      dt: 1594209600,
      sunrise: 1594180521,
      sunset: 1594240176,
      temp: {
        day: 28.41,
        min: 288.37,
        max: 288.51,
        night: 288.46,
        eve: 288.51,
        morn: 28.41,
      },
      feels_like: {
        day: 288.82,
        night: 286.21,
        eve: 288.51,
        morn: 288.82,
      },
      pressure: 1015,
      humidity: 93,
      dew_point: 287.29,
      wind_speed: 1.28,
      wind_deg: 115,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 90,
      rain: 4.33,
      uvi: 7.3,
    },
    {
      dt: 1594296000,
      sunrise: 1594266983,
      sunset: 1594326532,
      temp: {
        day: 289.24,
        min: 285.19,
        max: 290.5,
        night: 285.19,
        eve: 286.67,
        morn: 288.66,
      },
      feels_like: {
        day: 288.24,
        night: 283.8,
        eve: 284.57,
        morn: 286.24,
      },
      pressure: 1011,
      humidity: 83,
      dew_point: 286.44,
      wind_speed: 2.86,
      wind_deg: 19,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 99,
      rain: 0.83,
      uvi: 6.57,
    },
    {
      dt: 1594382400,
      sunrise: 1594353447,
      sunset: 1594412884,
      temp: {
        day: 289.2,
        min: 283.58,
        max: 290.17,
        night: 283.58,
        eve: 288.45,
        morn: 283.83,
      },
      feels_like: {
        day: 283.33,
        night: 279.5,
        eve: 283.38,
        morn: 279.37,
      },
      pressure: 1017,
      humidity: 61,
      dew_point: 281.81,
      wind_speed: 7.91,
      wind_deg: 313,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 16,
      rain: 0.59,
      uvi: 5.83,
    },
    {
      dt: 1594468800,
      sunrise: 1594439914,
      sunset: 1594499234,
      temp: {
        day: 291.18,
        min: 283.88,
        max: 291.59,
        night: 285.12,
        eve: 290.81,
        morn: 283.88,
      },
      feels_like: {
        day: 287.66,
        night: 283.16,
        eve: 288.69,
        morn: 280.51,
      },
      pressure: 1026,
      humidity: 51,
      dew_point: 281.18,
      wind_speed: 4.27,
      wind_deg: 313,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 13,
      rain: 0.23,
      uvi: 6.54,
    },
    {
      dt: 1594555200,
      sunrise: 1594526382,
      sunset: 1594585580,
      temp: {
        day: 293.27,
        min: 285.24,
        max: 293.9,
        night: 286.49,
        eve: 292.71,
        morn: 285.24,
      },
      feels_like: {
        day: 290.28,
        night: 284.38,
        eve: 290.32,
        morn: 284.03,
      },
      pressure: 1027,
      humidity: 39,
      dew_point: 279.25,
      wind_speed: 2.87,
      wind_deg: 230,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: 66,
      uvi: 6.9,
    },
    {
      dt: 1594641600,
      sunrise: 1594612852,
      sunset: 1594671924,
      temp: {
        day: 288.09,
        min: 285.85,
        max: 291.59,
        night: 285.85,
        eve: 291.59,
        morn: 286.4,
      },
      feels_like: {
        day: 285.39,
        night: 284.56,
        eve: 288.96,
        morn: 283.51,
      },
      pressure: 1021,
      humidity: 71,
      dew_point: 282.97,
      wind_speed: 3.82,
      wind_deg: 228,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      rain: 1.04,
      uvi: 6.73,
    },
    {
      dt: 1594728000,
      sunrise: 1594699325,
      sunset: 1594758265,
      temp: {
        day: 286.58,
        min: 285.47,
        max: 289.88,
        night: 285.47,
        eve: 289.33,
        morn: 285.53,
      },
      feels_like: {
        day: 283.11,
        night: 282.21,
        eve: 285.95,
        morn: 283.38,
      },
      pressure: 1018,
      humidity: 73,
      dew_point: 281.98,
      wind_speed: 4.53,
      wind_deg: 259,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 100,
      uvi: 6.11,
    },
    {
      dt: 1594814400,
      sunrise: 1594785799,
      sunset: 1594844603,
      temp: {
        day: 292.79,
        min: 285.08,
        max: 292.79,
        night: 285.08,
        eve: 290.77,
        morn: 287.52,
      },
      feels_like: {
        day: 289.14,
        night: 282.24,
        eve: 287.14,
        morn: 284.59,
      },
      pressure: 1013,
      humidity: 59,
      dew_point: 284.65,
      wind_speed: 5.84,
      wind_deg: 263,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: 50,
      uvi: 6.85,
    },
  ],
};
