const url = "http://api.openweathermap.org/data/2.5/weather?q=";

const key = "&APPID=13fa6e5cb3df05f40d29fe0d55e31e74"; /*THIS API KEY IS A PLACEHOLDER IT DOES NOT WORK*/

const imperial = document.getElementById("Far");
const standard = document.getElementById("Kel");
const metric = document.getElementById("Cel");
const loc = document.getElementById("location");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");

class Weather {
  constructor(city) {
    this.city = city;
    this.tempURL = "";
  }

  urlHandler(unit) {
    this.tempURL = `${url}${document.getElementById("inputBox").value}${key}`;
    switch (unit) {
      case "metric":
        this.tempURL = this.tempURL + "&units=metric";
        break;
      case "imperial":
        this.tempURL = this.tempURL + "&units=imperial";
        break;
      case "standard":
        this.tempURL = this.tempURL + "&units=standard";
        break;
      default:
        console.log("no unit selected");
    }
  }

  getData() {
    let dataURL = this.tempURL;
    async function getWeather() {
      const response = await fetch(dataURL);
      console.log(response);
      const data = await response.json();
      loc.innerText = data.name;
      weather.innerText = data.weather[0].description;
      temperature.innerText = data.main.temp;
    }
    getWeather();
  }
}

metric.addEventListener("click", (button) => {
  const current = new Weather(document.getElementById("inputBox").value);
  current.urlHandler("metric");
  current.getData();
});
imperial.addEventListener("click", (button) => {
  const current = new Weather(document.getElementById("inputBox").value);
  current.urlHandler("imperial");
  current.getData();
});
standard.addEventListener("click", (button) => {
  const current = new Weather(document.getElementById("inputBox").value);
  current.urlHandler("standard");
  current.getData();
});
