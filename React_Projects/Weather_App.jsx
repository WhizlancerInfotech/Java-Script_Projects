import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="p-4">
      <input className="border p-2" onChange={(e) => setCity(e.target.value)} />
      <button className="ml-2 p-2 bg-blue-500 text-white" onClick={fetchWeather}>
        Get Weather
      </button>
      {weather && <h2>{weather.weather[0].description}</h2>}
    </div>
  );
}
