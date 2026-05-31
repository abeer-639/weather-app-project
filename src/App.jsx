import { useState } from "react"
import SearchBar from "./Components/SearchBar"
import WeatherCard from "./Components/WeatherCard"
import WeatherDetails from "./Components/WeatherDetails"
import "./App.css"


function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState("")

const getBackground = (weatherCode) => {
  if (!weatherCode) return "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920"
  
  if (weatherCode >= 200 && weatherCode < 300) 
    return "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920" // عاصفة رعدية
  if (weatherCode >= 300 && weatherCode < 600) 
    return "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1920" // مطر
  if (weatherCode >= 600 && weatherCode < 700) 
    return "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920" // ثلج
  if (weatherCode === 800) 
    return "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=1920" // مشمس
  
  return "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920" // غيوم
}
  return (
    <div 
  className="app"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
    url(${getBackground(weather?.weather[0]?.id)})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  }}
>
      <SearchBar setCity={setCity} setWeather={setWeather} setError={setError} />
      {error && <p className="error">{error}</p>}
      {weather && (
        <>
          <WeatherCard weather={weather} />
          <WeatherDetails weather={weather} />
        </>
      )}
    </div>
  )
}

export default App