import React from 'react'
import Home from '../../Pages/Home/Home'
import Description from '../../Pages/Home/description'
import Testimonials from '../../Pages/Testimonials/Testimonials.jsx';
import Features from '../../Pages/Features/Features.jsx';
import Start from '../../Pages/Start/start.jsx'
import Footer from '../Footer/Footer.jsx';
const HomePage = () => {
  return (
    <>
        <Home/>
        <Description/>
        <Testimonials/>
        <Features/>
        <Start/>
        <Footer/>
    </>
  )
}

export default HomePage
