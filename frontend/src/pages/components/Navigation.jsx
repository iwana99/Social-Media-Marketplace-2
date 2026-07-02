import { useAuth, SignInButton , SignOutButton} from '@clerk/react'
import {NavLink} from 'react-router-dom'

import { TiShoppingCart } from "react-icons/ti";
import { FaSignInAlt } from "react-icons/fa";

import { FaSignOutAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

const Navigation = () => {
  const {isSignedIn} = useAuth();
  const navigationButton=
    "text-xl font-semibold hover:underline text-white flex flex-col items-center ";
  
  return (
    <nav>
    <div className="flex items-center justify-between bg-blue-500 p-4">
      <div>
      <h1 className="text-white text-2xl tracking-wide">Social Media Marketplace</h1>
      </div>

      <div className="flex gap-8">
        {isSignedIn ? (
        <NavLink to="/dashboard" className={navigationButton}><RxDashboard />Dashboard</NavLink>
        ): null}
               <NavLink to="/" className={navigationButton}> <FaHome />Home</NavLink>
       <NavLink to="/cart" className={navigationButton}> <TiShoppingCart />Cart</NavLink>
      {isSignedIn ? (
        <SignOutButton >
          <button className= {navigationButton}><FaSignOutAlt />Sign Out</button>
          </SignOutButton>
       
      ) : (
        <SignInButton >
          <button className= {navigationButton}> <FaSignInAlt />Sign In</button>
          </SignInButton>
      )}


      </div>
      </div>  
   
      
     
    </nav>
  )
}

export default Navigation