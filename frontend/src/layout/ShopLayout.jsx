import NaNavigation from '../pages/components/Navigation.jsx'
import UnderNavigation from '../pages/components/UnderNavigation.jsx'
import { Outlet } from 'react-router-dom'
const ShopLayout = () => {
  return (
    <>
     <NaNavigation />
      <UnderNavigation />
      <Outlet />
    </>
  )
}

export default ShopLayout