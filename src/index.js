function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
 
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCurrentCity(city) {
  let apiKey = "4408ef6c23fad2o2b567b019337f885t";
  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");

  searchCurrentCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);
 
searchCurrentCity("Brisbane");
