import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
// import DashboardHeader from './DashboardHeader';

const Layout = () => {
  //const path = useLocation();
  
  return (
    <>
    <Header />
    {/*path.pathname.startsWith('/host') ? <DashboardHeader /> : null*/}
    <Outlet />
    </>
  )
}

export default Layout