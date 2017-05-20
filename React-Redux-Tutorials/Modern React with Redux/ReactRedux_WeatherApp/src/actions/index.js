//For similar feature like jQuery Ajax
import axios from 'axios';
const API_KEY = 'a1a6565c7db3cbfbb8c9d06ffa939790';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

//fetchWeather is a action creator.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //request will return a promise
  ///The redux-promise middleware allows the reducer receiving the action to become a response rather than a promise
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
