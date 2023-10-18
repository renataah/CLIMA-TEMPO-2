//VARIÁVEIS E SELEÇÃO DE ELEMENTOS

const apiKey = "b8eeee9a5f0b33d0509cfb412c9382b7";

const cityInput = document.querySelector("#city-input"); // Campo onde o usuário digita o nome da cidade
const searchBtn = document.querySelector("#search-button"); // Botão para busca da cidade
const cityElement = document.querySelector("#city"); // Nome da cidade
const tempElement = document.querySelector("#temperature span"); // Descrição sobre a temperatura
const descElement = document.querySelector("#description"); // Descrição dos elementos
const weatherIconElement = document.querySelector("#weather-icon"); // Descrição do ícone
const countryElement = document.querySelector("#country"); // Descrição do ícone
const umidityElement = document.querySelector("#umidity span"); // Descrição da umidade
const windElement = document.querySelector("#wind span"); // Descrição do vento

// Função para consultar os dados na API
const getWeatherData = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

// Função para mostrar os dados do clima
const showWeatherData = async (city) => {
  try {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    countryElement.src = `https://flagcdn.com/${data.sys.country.toLowerCase()}.svg`;
    countryElement.style.height = '16px';
    countryElement.style.width = '16px';
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed} Km/h`;
  } catch (error) {
    console.error("Erro ao obter os dados:", error);
  }
};

// Evento de clique no botão de busca
searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;
  showWeatherData(city);
});







