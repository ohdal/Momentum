const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:nth-child(2)");
const temp = document.querySelector("#weather span:last-child");

const API_KEY = "d6ea109ea7537ccacc006577d282981f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      temp.innerText = data.main.temp;
      weather.innerText = data.weather[0].description;

      temp.classList.remove(HIDDEN_CLASSNAME);
    });
}

function onGeoError() {
  city.innerText = "";
  temp.innerText = "";
  temp.classList.add(HIDDEN_CLASSNAME);
  weather.innerText = "Can't find you. No weather for you.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
weather.innerText = "Loading..."
