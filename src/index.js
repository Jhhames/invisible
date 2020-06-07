import weather from "./weather";
import { fromEvent } from "rxjs";

let locationArray = ["New York"];
// , "10005", "Tokyo", "São Paulo", "Pluto", "Lagos"
const addInputButton = document.getElementById("addInput");
const submitInputButton = document.getElementById("submitInput");
const dataInput = document.getElementById("input");

fromEvent(addInputButton, "click").subscribe(() => {
  if (dataInput.value) locationArray.push(dataInput.value);
  console.log(locationArray);
  dataInput.value = "";
});
// addInputButton.addEventListener("click", event => {
//   if (dataInput.value) locationArray.push(dataInput.value);
//   console.log(locationArray);
//   dataInput.value = "";
// });

const app = {};

submitInputButton.addEventListener("click", () => {
  weather.getWeatherAndTime(locationArray);
});

// app.index();
