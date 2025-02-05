import React from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Services from './components/Services';

const page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <AboutUs />
    </div>
  )
}

export default page;