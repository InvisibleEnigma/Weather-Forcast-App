function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
 searchFormElement.addEventListener("submit", searchCity);
