import api from "./api";

/**
 * Weather Abstraction
 * This communicates with the APIs and logs results on the console
 */

const weather = {
  getWeatherAndTime(locationArray) {
    locationArray.forEach(location => this.singleLocationCall(location));
  },

  singleLocationCall(location) {
    api
      .getWeatherAndTime(location)
      .then(this.logWeatherAndTime)
      .catch(e => {
        console.log(`%c${location} Error: ${e.message} `, "color:red");
      });
  },

  logWeatherAndTime(response) {
    const { temperature, weather_descriptions } = response.data.current;
    const { name, localtime } = response.data.location;
    console.log(
      `%cLocation: ${name}; Current Time: ${localtime}; Weather: ${weather_descriptions.toString()}; Temperature: ${temperature} degrees C`,
      "color:green"
    );
  }
};

export default weather;
