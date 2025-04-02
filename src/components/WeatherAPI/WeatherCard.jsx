import React from "react";

function WeatherCard({ weatherData }) {
  if (!weatherData || Object.keys(weatherData).length === 0) {
    return (
      <div className="w-96 h-96 flex flex-col justify-center items-center p-4 border mt-3 rounded-lg shadow-md bg-gray-100">
        <h4 className="text-center text-2xl font-semibold text-gray-600">
          No Data Available
        </h4>
      </div>
    );
  }

  const { name, main, coord, weather, wind } = weatherData;
  const iconCode = weather[0].icon; // Get weather icon
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="w-96 h-auto flex flex-col items-center p-5 border mt-3 rounded-lg shadow-lg bg-white text-gray-800">
      <h3 className="text-3xl font-bold text-blue-600">{name}</h3>

      <div className="flex flex-col items-center my-2">
        <img src={iconUrl} alt={weather[0].description} className="w-24 h-24" />
        <h4 className="text-5xl font-semibold">{main.temp}°C</h4>
        <p className="text-lg capitalize text-gray-500">{weather[0].description}</p>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <p>
          <span className="font-semibold">Longitude:</span> {coord.lon}
        </p>
        <p>
          <span className="font-semibold">Latitude:</span> {coord.lat}
        </p>
        <p>
          <span className="font-semibold">Humidity:</span> {main.humidity}%
        </p>
        <p>
          <span className="font-semibold">Wind Speed:</span> {wind.speed} m/s
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
