import axios from "axios";
/**
 *  Weather API calls abstraction
 *  get requestion and error handling
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
  async getWeatherAndTime(parameter) {
    return new Promise(async (resolve, reject) => {
      await $http
        .get("/current", {
          params: {
            query: parameter
          }
        })
        .then(result => {
          console.log(this);
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default API;
