import API from "./API";

let locationArray = ["New York"];
// , "10005", "Tokyo", "São Paulo", "Pluto", "Lagos"
const app = {
  index() {
    for (let i = 0, length = locationArray.length; i < length; i++) {
      const location = locationArray[i];
      API.getWeatherAndTime(location)
        .then(this.logTimeAndWeather)
        .catch(e => {
          console.log(`%c${location} Error: ${e.message} `, "color:red");
        });
    }
  },

  logTimeAndWeather(weather) {
    const { temperature, weather_descriptions } = weather.data.current;
    const { name, localtime } = weather.data.location;
    console.log(
      `%cLocation: ${name}; Current Time: ${localtime}; Weather: ${weather_descriptions.toString()}; Temperature: ${temperature} degrees C`,
      "color:green"
    );
  }
};

app.index();
