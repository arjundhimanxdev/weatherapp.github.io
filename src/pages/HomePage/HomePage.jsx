import { NavLink } from "react-router";


const HomePage = () => {
  return (
    <>
    <div className="flex rounded-xl items-center justify-center min-h-screen bg-gradient-to-b from-[#6c4bf4] to-[#5ec9f5]">
      <div className="gap-5 relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center w-96 h-100 shadow-lg">
        
        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png"
          alt="weather"
          className="w-30 h-30"
        />

        <h2 className="text-white text-3xl font-bold">Weather</h2>
        <p className="text-white/80 text-lg mb-6">Forecasts</p>

        <NavLink to="/weather"  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-9 py-2 rounded-full shadow-md hover:scale-105 transition">
          Get Start
        </NavLink>
      </div>
    </div>
    
    </>
  )
}

export default HomePage;