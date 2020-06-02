import API from "./API";

let array = ["New York", "10005", "Tokyo", "São Paulo", "Pluto", "Lagos"];

const app = {
  index() {
    for (let i = 0, length = array.length; i < length; i++) {
      const element = array[i];
      API.getWeatherAndTime(element)
        .then(this.logTimeAndWeather)
        .catch(e => {
          console.log(`%cElement Error: ${e.message} `, "color:red");
        });
    }
  },

  logTimeAndWeather(weather) {
    // console.log(weather);
    const { temperature } = weather.data.current;
    const { name, localtime } = weather.data.location;
    console.log(
      `%c Location: ${name}, Current Time : ${localtime}, Weather: ${temperature} Degress C`,
      "color:green"
    );
  }
};

app.index();
