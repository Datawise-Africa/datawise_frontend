 import  { useEffect } from 'react';
 import { Outlet, useLocation } from "react-router-dom";

const BaseWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Outlet />
    </>
  )
}

export default BaseWrapper