import React from 'react';
import Hero from '../components/Hero'; 
import Features from '../components/Features';
import Services from '../components/ServicesCards';
import Cta from '../components/Cta';
import ServicesBentoGrid from '../components/ServicesBentoGrid';
import ClientStatsSection from '../components/Clients';
const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
        <Services />
        <Cta />
        <ServicesBentoGrid />
        <ClientStatsSection />
       
    </div>
  );
};

export default Home;
