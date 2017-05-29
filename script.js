var weatherData = {
  city: document.querySelector('#city'),
  weather: document.querySelector('#weather'),
  temperature: document.querySelector('#temperature'),
  temperatureValue: 0,
  units: "°C"
};

function roundTemperature(temp) {
  temp = temp.toFixed(1);
  return temp;
}
