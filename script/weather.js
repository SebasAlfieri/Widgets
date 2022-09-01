const APIKEY = "27204bd43703cfc1ab3feabd40ead51e";
temp = document.querySelector("#temp");
term = document.querySelector("#term");
localidad = document.querySelector("#localidad");
tempMax = document.querySelector("#tempMax");
tempMin = document.querySelector("#tempMin");
termMax = document.querySelector("#termMax");
termMin = document.querySelector("#termMin");
precip = document.querySelector("#precip");
buenosAires = document.querySelector("#buenosAires");
chile = document.querySelector("#chile");
uruguay = document.querySelector("#uruguay");
paraguay = document.querySelector("#paraguay");
bolivia = document.querySelector("#bolivia");
newYork = document.querySelector("#newYork");
pais = "";

function fetchBA() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?" +
    pais +
    "&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum&current_weather=true&timezone=auto"
  )
    .then((resp) => resp.json())
    .then((data) => {
      temp.innerText = `${data.current_weather.temperature}°C`;
      tempMax.innerText = `Max ${data.daily.temperature_2m_max[0]}°C`;
      tempMin.innerText = `Min ${data.daily.temperature_2m_max[0]}°C`;
      term.innerText = `Sens. Termica: ${data.current_weather.windspeed}°C`;
      termMax.innerText = `Termica Max: ${data.daily.apparent_temperature_max[0]}°C`;
      termMin.innerText = `Termica Min: ${data.daily.apparent_temperature_min[0]}°C`;
    });
}

buenosAires.addEventListener("click", () => {
  pais = "latitude=-34.55&longitude=-58.55";
  localidad.innerText = `Buenos Aires`;
  fetchBA();
});

chile.addEventListener("click", () => {
  pais = "latitude=-33.45&longitude=-70.64";
  localidad.innerText = `Chile`;
  fetchBA();
});

uruguay.addEventListener("click", () => {
  pais = "latitude=-34.90&longitude=-56.18";
  localidad.innerText = `Uruguay`;
  fetchBA();
});

paraguay.addEventListener("click", () => {
  pais = "latitude=-23.44&longitude=-58.44";
  localidad.innerText = `Paraguay`;
  fetchBA();
});

bolivia.addEventListener("click", () => {
  pais = "latitude=-16.29&longitude=-63.58";
  localidad.innerText = `Bolivia`;
  fetchBA();
});

newYork.addEventListener("click", () => {
  pais = "latitude=40.71&longitude=-74.00";
  localidad.innerText = `Nueva York`;
  fetchBA();
});
