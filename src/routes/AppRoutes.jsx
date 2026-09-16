import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { BiologyPage } from '../pages/BiologyPage';
import { ChemistryPage } from '../pages/ChemistryPage';
import { EarthSciencesPage } from '../pages/EarthSciencesPage';
import { MathematicsPage } from '../pages/MathematicsPage';
import { PhysicsPage } from '../pages/PhysicsPage';
import { HumanitiesPage } from '../pages/HumanitiesPage';
import { FacilitiesPage } from '../pages/FacilitiesPage';
import { HighlightsPage } from '../pages/HighlightsPage';
import { PublicationsPage } from '../pages/PublicationsPage';
import { SeminarsPage } from '../pages/SeminarsPage';
import { InstitutionalPage } from '../pages/InstitutionalPage';
import { EventsPage } from '../pages/EventsPage';

function HomeRoute(props) {
  return <HomePage {...props} />;
}

export function AppRoutes({ onOpenAdmissions, onOpenCampusTour, onSelectPage }) {
  const homeProps = {
    onOpenAdmissions,
    onOpenCampusTour,
    onSelectPage,
  };

  return (
    <Routes>
      <Route path="/" element={<HomeRoute {...homeProps} />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/all-events" element={<EventsPage />} />
      <Route path="/biology" element={<BiologyPage />} />
      <Route path="/chemistry" element={<ChemistryPage />} />
      <Route path="/earth-climate-sciences" element={<EarthSciencesPage />} />
      <Route path="/earth-sciences" element={<EarthSciencesPage />} />
      <Route path="/mathematics" element={<MathematicsPage />} />
      <Route path="/physics" element={<PhysicsPage />} />
      <Route path="/humanities-social-sciences" element={<HumanitiesPage />} />
      <Route path="/humanities" element={<HumanitiesPage />} />
      <Route path="/research-facilities" element={<FacilitiesPage />} />
      <Route path="/research-highlights" element={<HighlightsPage />} />
      <Route path="/publications" element={<PublicationsPage />} />
      <Route path="/seminar-colloquium" element={<SeminarsPage />} />
      <Route path="/seminars" element={<SeminarsPage />} />
      <Route path="/page/:slug" element={<InstitutionalPage />} />
      <Route path="/:slug" element={<InstitutionalPage />} />
      <Route path="*" element={<HomeRoute {...homeProps} />} />
    </Routes>
  );
}

export default AppRoutes;
