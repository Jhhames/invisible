import axios from "axios";
/**
 *  Weather API calls abstraction
 *  get request and error handling
 */
const $http = axios.create({
  baseURL: `http://api.weatherstack.com`
});

$http.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params["access_key"] = "08984e789e0c518dc55c57de048d3016";
  return config;
});

const API = {
  async getWeatherAndTime(location) {
    return await $http
      .get("/current", {
        params: { query: location }
      })
      .then(this.handleResponse)
      .catch(error => {
        throw new Error(error);
      });
  },

  handleResponse(result) {
    return result.data.hasOwnProperty("current")
      ? result
      : Promise.reject(result.data.error.info);
  }
};

export default API;
