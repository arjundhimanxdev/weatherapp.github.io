import { Outlet } from "react-router"
import { FooterLayout } from "./components/FooterLayout/FooterLayout"
import { HeaderLayout } from "./components/FooterLayout/HeaderLayout"


const HomeLayout = () => {
  return (
    
    <div className="bg-gradient-to-b from-[#6c4bf4] to-[#5ec9f5]">
    <HeaderLayout/>
    <Outlet/>
    <FooterLayout/>
    </div>
  )
}

export default HomeLayout