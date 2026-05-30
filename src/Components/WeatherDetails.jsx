function WeatherDetails({ weather }) {
  return (
    <div className="weather-details">
      <div className="detail">
        <p>Humidity</p>
        <h3>{weather.main.humidity}%</h3>
      </div>
      <div className="detail">
        <p>Wind Speed </p>
        <h3>{weather.wind.speed} km/h</h3>
      </div>
      <div className="detail">
        <p>Main Feels Like</p>
        <h3>{Math.round(weather.main.feels_like)}°C</h3>
      </div>
    </div>
  )
}

export default WeatherDetails