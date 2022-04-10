import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import App from '../../App';

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Header />
            <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout