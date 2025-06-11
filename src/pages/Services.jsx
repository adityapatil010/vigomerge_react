import React from 'react';
import Header from '../components/Services/Header';
import ServicesCard from '../components/ServicesCards';
import Servicegrid from '../components/Services/Servicegrid';
const Services = () => {
    return(
        <div>
            <Header />
            <ServicesCard />
            <Servicegrid />
        </div>
    )
}
export default Services;