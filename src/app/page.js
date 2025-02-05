import React from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import PricingPlan from './components/PricingPlan';

const page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <AboutUs />
      <PricingPlan />
    </div>
  )
}

export default page;