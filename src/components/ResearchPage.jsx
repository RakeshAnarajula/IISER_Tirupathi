import React, { useEffect } from 'react';
import { researchPagesData } from '../data/researchPagesData';
import { ResearchTopBar } from './research/ResearchTopBar';
import { ResearchSidebar } from './research/ResearchSidebar';
import { BiologyPage } from './research/BiologyPage';
import { ChemistryPage } from './research/ChemistryPage';
import { EarthSciencesPage } from './research/EarthSciencesPage';
import { MathematicsPage } from './research/MathematicsPage';
import { PhysicsPage } from './research/PhysicsPage';
import { HumanitiesPage } from './research/HumanitiesPage';
import { FacilitiesPage } from './research/FacilitiesPage';
import { HighlightsPage } from './research/HighlightsPage';
import { PublicationsPage } from './research/PublicationsPage';
import { SeminarsPage } from './research/SeminarsPage';
import './ResearchPage.css';

export function ResearchPage({ pageKey, onNavigate, onBack }) {
  const currentKey = researchPagesData[pageKey] ? pageKey : 'biology';
  const pageData = researchPagesData[currentKey];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentKey]);

  const renderPageComponent = () => {
    switch (currentKey) {
      case 'biology':
        return <BiologyPage data={pageData} onNavigate={onNavigate} />;
      case 'chemistry':
        return <ChemistryPage data={pageData} onNavigate={onNavigate} />;
      case 'earth-climate-sciences':
        return <EarthSciencesPage data={pageData} onNavigate={onNavigate} />;
      case 'mathematics':
        return <MathematicsPage data={pageData} onNavigate={onNavigate} />;
      case 'physics':
        return <PhysicsPage data={pageData} onNavigate={onNavigate} />;
      case 'humanities-social-sciences':
        return <HumanitiesPage data={pageData} onNavigate={onNavigate} />;
      case 'research-facilities':
        return <FacilitiesPage data={pageData} onNavigate={onNavigate} />;
      case 'research-highlights':
        return <HighlightsPage data={pageData} onNavigate={onNavigate} />;
      case 'publications':
        return <PublicationsPage data={pageData} onNavigate={onNavigate} />;
      case 'seminar-colloquium':
        return <SeminarsPage data={pageData} onNavigate={onNavigate} />;
      default:
        return <BiologyPage data={pageData} onNavigate={onNavigate} />;
    }
  };

  return (
    <div className="research-page-wrapper">
      {/* 1. Header & Hero */}
      <ResearchTopBar data={pageData} onBack={onBack} />

      {/* 2. Main Content Grid */}
      <div className="site-container-wide research-body-container" style={{ padding: '40px 0 60px' }}>
        <div className="research-body-grid">
          {/* Left Sidebar Navigation */}
          <ResearchSidebar 
            activeKey={currentKey} 
            onNavigate={onNavigate}
            accentColor={pageData.accentColor} 
          />

          {/* Right Main Editorial Content */}
          <main className="research-main-content">
            {renderPageComponent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default ResearchPage;
