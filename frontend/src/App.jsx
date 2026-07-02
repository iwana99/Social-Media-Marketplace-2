import './App.css'
import { Routes, Route } from 'react-router-dom'
import ShopLayout from "./layout/ShopLayout.jsx"
import Home from './pages/Home.jsx'
import Facebook from './pages/Facebook.jsx'
import Instagram from './pages/components/Instagram.jsx'
import X from './pages/X.jsx'
import MainLayout from "./layout/MainLayout.jsx"
import Cart from './pages/Cart.jsx'
import Dashboard from './pages/Dashboard.jsx'
function App() {

  return (
 
     <Routes>
      <Route element={<MainLayout />} >
        <Route path="/" element={<Home />} />
        
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
    
      </Route>
      <Route element={<ShopLayout />} >
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/x" element={<X />} />
       
      </Route>
     </Routes>
    
  )
}

export default App