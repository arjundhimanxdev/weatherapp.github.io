import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { HomeLayout } from './layout'
import { HomePage, WeatherPage} from './pages'


const AppRoutes = () => {
  return (
    <>
    <Suspense 
        fallback={<p className="text-black">Page is Loading</p>}>
            <Routes>
                <Route element={<HomeLayout/>}>
                    <Route path="/" index element={<HomePage/>}/>
                    <Route path="/weather" element={<WeatherPage/>} />
                </Route>
                <Route path='*' element={<Navigate to="/" replace />}/>
            </Routes>
    </Suspense>
    
    </> 
  )
}

export default AppRoutes;