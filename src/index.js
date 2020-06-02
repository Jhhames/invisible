import API from "./API";

let array = ["New York"];
// , "10005", "Tokyo", "São Paulo", "Pluto", "Lagos"
const app = {
  index() {
    for (let i = 0, length = array.length; i < length; i++) {
      const element = array[i];
      API.getWeatherAndTime(element)
        .then(this.logTimeAndWeather)
        .catch(e => {
          console.log(`%c${element} Error: ${e.message} `, "color:red");
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
