import { useEffect, useState } from "react";
import { WeatherCard } from "./components";

const API_KEY = "3b07e958738001744f6761a5132c4d5b";
const DEFAULT_CITY = "dehradun";
const cities = ["hyderabad", "dehradun", "mumbai", "chennai", "delhi", "saharanpur", "yamunanagar"];

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState(DEFAULT_CITY);
  const [icon, setIcon] = useState("");

  const allIcons = {
    "01d": "https://cdn-icons-png.flaticon.com/128/4814/4814268.png",
    "01n": "https://cdn-icons-png.flaticon.com/128/8030/8030068.png",
    "02d": "https://cdn-icons-png.flaticon.com/128/3222/3222808.png",
    "02n": "https://cdn-icons-png.flaticon.com/128/1163/1163625.png",
    "03d": "https://cdn-icons-png.flaticon.com/128/5904/5904053.png",
    "03n": "https://cdn-icons-png.flaticon.com/128/4834/4834497.png",
    "04d": "https://cdn-icons-png.flaticon.com/128/9342/9342323.png",
    "04n": "https://cdn-icons-png.flaticon.com/128/10369/10369442.png",
    "09d": "https://cdn-icons-png.flaticon.com/128/5545/5545843.png",
    "09n": "https://cdn-icons-png.flaticon.com/128/5903/5903792.png",
    "10d": "https://cdn-icons-png.flaticon.com/128/2864/2864448.png",
    "10n": "https://cdn-icons-png.flaticon.com/128/2337/2337416.png",
    "13d": "https://cdn-icons-png.flaticon.com/128/6566/6566218.png",
    "13n": "https://cdn-icons-png.flaticon.com/128/4006/4006054.png",
  };

  const cityClickHandler = (city) => {
    setCurrentCity(city);
  };

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
        const weatherIcon = allIcons[data.weather[0].icon] || allIcons["01d"];
        setIcon(weatherIcon);
      } else {
        setWeather(null);
      }
    } catch (error) {
      console.error(`Error fetching weather data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [currentCity]);

  return (
    <div>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => cityClickHandler(city)}
            className="text-white cursor-pointer border-white rounded-xl py-1 px-2 border-2 hover:text-indigo-600 hover:bg-white hover:font-semibold"
          >
            {city}
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-4 ">
        <input
          type="text"
          value={currentCity}
          className="rounded-xl bg-violet-200 border-none outline-none w-[20rem] px-1 py-2"
          onChange={(e) => setCurrentCity(e.target.value)}
        />
      </div>

      <div className="text-center mt-4">
        {loading && <div className="text-gray-700">Loading...</div>}
        {weather && <WeatherCard weatherData={weather} icon={icon} />}
      </div>
    </div>
  );
};

export default WeatherPage;
