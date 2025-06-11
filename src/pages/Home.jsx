import React from 'react';
import Hero from '../components/Hero'; 
import Features from '../components/Features';
import Services from '../components/ServicesCards';
import Cta from '../components/Cta';
import ServicesBentoGrid from '../components/ServicesBentoGrid';
import TrustedClients from '../components/Clients';
import StatsSection from '../components/StatsSection';
const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
        <Services />
        <Cta />
        <ServicesBentoGrid />
        <TrustedClients />
        <StatsSection />
    </div>
  );
};

export default Home;
