import { useState } from "react"

function SearchBar({ setWeather, setError }) {
  const [input, setInput] = useState("")

  const handleSearch = async () => {
    if (!input) return

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      )
      const data = await res.json()

      if (data.cod !== 200) {
        setError("Try Again")
        setWeather(null)
        return
      }

      setWeather(data)
      setError("")
    } 
    catch (err) {
      setError("Failed Connection")
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter A City Name ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar