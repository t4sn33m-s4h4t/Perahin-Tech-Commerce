import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../components/root/Banner'
import PageTitleSetter from '../utilities/PageTitleSetter'
import { useEffect, useState } from 'react'

export default function Root() {
  const location = useLocation();
  const [heading, setHeading] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setHeading('Home');
        break;
      case '/statistics':
        setHeading('Statistics');
        break;
      case '/contact':
        setHeading('Contact Us');
        break;
      case '/dashboard':
        setHeading('Dashboard');
        break;
      default:
        setHeading('Gadget Heaven');
    }
  }, [location.pathname]);
  return (
    <div>
      
      <PageTitleSetter />
      <div className='lg:p-5 '>
      {heading==="Home"?
      <div className='lg:border-2 lg:p-2 lg:rounded-2xl bg-white'>
        <div className="bg-[#9538E2] lg:rounded-2xl lg:p-4" >
          <Navbar transBg={true}/>
          <Banner title={heading} />
        </div>
      </div>
      :
      <>
      <Navbar transBg={false}/>
      <Banner title={heading} />
      </>
      }
      <div className="main">
        <Outlet />
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
