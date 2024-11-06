import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Banner from '../components/root/Banner';
import PageTitleSetter from '../utilities/PageTitleSetter';
import { useEffect, useState } from 'react';

export default function Root() {
  const location = useLocation();
  const { id } = useParams();
  const [heading, setHeading] = useState('');

  const pageHeadings = {
    '/': 'Home',
    '/category': 'Home',
    '/statistics': 'Statistics',
    '/contact': 'Contact Us',
    '/dashboard': 'Dashboard',
    '/product': 'Product Details',
  };

  useEffect(() => {
    const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
    const matchedPath = Object.keys(pageHeadings).find(basePath =>
      normalizedPath === basePath || (basePath !== '/' && normalizedPath.startsWith(basePath))
    );

    setHeading(pageHeadings[matchedPath] || 'Gadget Heaven');
  }, [location.pathname, id]);

  return (
    <div>
      <PageTitleSetter title={heading} />
      <div className="lg:p-5">
        {heading === "Home" ? (
          <div className="lg:border-2 lg:p-2 lg:rounded-2xl bg-white">
            <div className="bg-[#9538E2] lg:rounded-2xl lg:p-4">
              <Navbar transBg={true} />
              <Banner title={heading} />
            </div>
          </div>
        ) : (
          <>
            <Navbar transBg={false} />
            <Banner title={heading} />
          </>
        )}
        <div className="main">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
