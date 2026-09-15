import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { AboutAndAnnouncementsSection } from '../components/AboutAndAnnouncementsSection';
import { ResearchSection } from '../components/ResearchSection';
import { NewsEventsSection } from '../components/NewsEventsSection';
import { PartnerLogosSection } from '../components/PartnerLogosSection';

export function HomePage({ onOpenAdmissions, onOpenCampusTour, onSelectPage }) {
  useEffect(() => {
    document.title = "IISER Tirupati | Indian Institute of Science Education and Research";
  }, []);

  return (
    <>
      {/* 1. Hero Banner with Motto Dock & Breadcrumb */}
      <Hero 
        onOpenAdmissions={onOpenAdmissions}
        onOpenCampusTour={onOpenCampusTour}
      />

      {/* 2. Section 1: About IISER Tirupati + Announcements */}
      <AboutAndAnnouncementsSection onSelectPage={onSelectPage} />

      {/* 3. Section 2: Research (Journal Spotlight + 4 Quick Cards) */}
      <ResearchSection onSelectPage={onSelectPage} />

      {/* 4. Section 3 & 4: News Grid & Events Grid */}
      <NewsEventsSection />

      {/* 5. Section 5: Institutional Partners & Logos */}
      <PartnerLogosSection />
    </>
  );
}

export default HomePage;
