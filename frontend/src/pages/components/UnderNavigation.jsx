
import {NavLink} from 'react-router-dom'

const UnderNavigation = () => {
    const navigationButton=
    "text-xl font-semibold  text-blue-500 items-center bg-blue-500/20 px-4 py-2 rounded-md";
  
  return (
    <nav className="flex items-center justify-center">
        <div className="flex items-centerp-4  gap-6 py-4  px-10">
        <NavLink to="/facebook" className={navigationButton}>Facebook</NavLink>
        
       <NavLink to="/instagram" className="text-xl font-semibold  text-blue-500  px-4 py-2 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white rounded-md">
                      Instagram
                                  </NavLink>
        
         <NavLink to="/x" className="text-xl font-semibold  text-blue-500  px-4 py-2 hover:bg-black hover:text-white rounded-md">
                      X
                                  </NavLink>
        </div>
    </nav>
  )
}

export default UnderNavigation