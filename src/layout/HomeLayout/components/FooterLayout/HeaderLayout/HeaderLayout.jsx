import image from '../../../../../assets/react.svg';
import { NavLink } from 'react-router';

const HeaderLayout = () => {
  return (
    <>
    <div className='p-5 bg-gradient-to-b from-[#6c4bf4] to-[#5ec9f5] rounded-md '>
            <nav className='flex justify-between items-center'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='flex gap-6'>
                    <NavLink to="/" className="font-semibold text-white">Home</NavLink>
                    <NavLink to="/weather" className="font-semibold text-white">Weather</NavLink>
                </div>
            </nav>
    </div>
    
    </>
  )
}

export default HeaderLayout;