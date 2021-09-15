import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? 'https://devapi.qweather.com/v7/weather/3d' : '/weather'

export function get3d(location) {
  return axios.get(
    url,
    {
      params: {
        key: "9834a34bc3f84be6aa09c321cd98fa8a",
        location
      }
    }
  )
}
