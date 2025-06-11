import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';

import Developers from '../pages/resources/Developers';
import Community from '../pages/resources/Community';
import PrivacyPolicy from '../pages/resources/PrivacyPolicy';
import TermsAndConditions from '../pages/resources/TermsAndConditions';

import ITIndustry from '../pages/industry/ITIndustry';
import Healthcare from '../pages/industry/Healthcare';
import Manufacturing from '../pages/industry/Manufacturing';
import ECommerce from '../pages/industry/ECommerce';
import RealEstate from '../pages/industry/RealEstate';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutus" element={<AboutUs />} />

      {/* Resources */}
      <Route path="/resources/developers" element={<Developers />} />
      <Route path="/resources/community" element={<Community />} />
      <Route path="/resources/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/resources/termsandconditions" element={<TermsAndConditions />} />

      {/* Industry */}
      <Route path="/industry/itindustry" element={<ITIndustry />} />
      <Route path="/industry/healthcare" element={<Healthcare />} />
      <Route path="/industry/manufacturing" element={<Manufacturing />} />
      <Route path="/industry/ecommerce" element={<ECommerce />} />
      <Route path="/industry/realestate" element={<RealEstate />} />
    </Routes>
  );
};

export default AppRoutes;
