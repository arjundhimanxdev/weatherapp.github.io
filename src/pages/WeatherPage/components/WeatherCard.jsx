import { MdVisibility } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";


const WeatherCard = ({weatherData, icon}) => {

  return (
    <>
     <div className=" mt-6 min-h-screen flex items-center justify-center bg-gradient-to-b from-[#6c4bf4] to-[#5ec9f5] p-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 w-[360px] h-[440px] shadow-lg">
        
        <div className="flex justify-between items-center text-white mb-4">
          <span className="text-2xl flex items-center gap-1">
            📍 {weatherData.name}
          </span>
          <span className="text-xl font-bold">+</span>
        </div>
        <p className="text-xs text-white/70 mb-4">
        {new Date().toLocaleString("en-US", {
         weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true
       })}
       </p>

        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold text-center text-white">{Math.floor(weatherData.main.temp)}°C</h1>
          <p className="text-white/100 text-center text-xl pt-2">{weatherData.weather[0].main}</p>
          <img
            src={icon}
            alt="weather"
            className="w-20 mt-2"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="flex flex-col justify-center items-center bg-white/20 rounded-xl p-2 text-center text-white">
            <MdVisibility className="h-8 w-6" />
            <p className="text-lg font-bold">{(weatherData.visibility / 1000)}km</p>
            <p className="text-xs">Visibility</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/20 rounded-xl p-2 text-center text-white">
            <WiHumidity className="h-10 w-8" />
            <p className="text-lg font-bold">{weatherData.main.humidity}%</p>
            <p className="text-xs">Humidity</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/20 rounded-xl p-2 text-center text-white">
            <FaWind className="h-8 w-6" />
            <p className="text-lg font-bold">{Math.floor(weatherData.wind.speed)}km/h</p>
            <p className="text-xs">Wind</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WeatherCard