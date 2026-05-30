function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <h1>{Math.round(weather.main.temp)}°C</h1>
      <p>{weather.weather[0].description}</p>
    </div>
  )
}

export default WeatherCard