import React from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import PricingPlan from './components/PricingPlan';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <AboutUs />
      <PricingPlan />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page;