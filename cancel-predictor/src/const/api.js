import { key as API_KEY } from '../secret/api_key'; // is git ignored

export const api = {
  weatherOneCall: () => `https://api.openweathermap.org/data/2.5/onecall?lat=52.4862&lon=-1.8904&appid=${API_KEY}`,
};
