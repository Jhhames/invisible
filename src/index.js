import weather from "./weather"

const app = {
  init() {
    this.updateListInput()

    const addInputButton = document.getElementById("addInput")
    const clearInput = document.getElementById("clearInput")
    const submitInputButton = document.getElementById("submitInput")
    const dataInput = document.getElementById("input")

    addInputButton.addEventListener("click", () => {
      if (dataInput.value) this.locationArray.push(dataInput.value)
      dataInput.value = ""
      this.updateListInput()
    })

    clearInput.addEventListener("click", () => {
      this.locationArray.length = 0
      this.updateListInput()
    })

    submitInputButton.addEventListener("click", () => {
      console.log("fetching location data...")
      weather.getWeatherAndTime(this.locationArray)
    })
  },
  locationArray: ["New York", "10005", "Tokyo", "São Paulo", "Pluto", "Lagos"],
  updateListInput() {
    const listInputs = document.getElementById("listInputs")
    listInputs.innerHTML = `{ ${this.locationArray.toString()} }`
  }
}

app.init()
