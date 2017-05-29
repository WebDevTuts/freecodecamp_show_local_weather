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

function switchUnits() {
  if (weatherData.units == "°C") {
    weatherData.temperatureValue = roundTemperature(weatherData.temperatureValue * 9/5 + 32);
    weatherData.units = "°F";
  } else {
    weatherData.temperatureValue = roundTemperature((weatherData.temperatureValue - 32) * 5/9);
    weatherData.units = "°C";
  }

  weatherData.temperature.innerHTML = weatherData.temperatureValue + weatherData.units;
}
