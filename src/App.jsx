import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AdmissionsModal } from './components/AdmissionsModal';
import { CampusTourModal } from './components/CampusTourModal';
import { ArrowUp } from 'lucide-react';

// Dedicated Pages in src/pages/
import { HomePage } from './pages/HomePage';
import { BiologyPage } from './pages/BiologyPage';
import { ChemistryPage } from './pages/ChemistryPage';
import { EarthSciencesPage } from './pages/EarthSciencesPage';
import { MathematicsPage } from './pages/MathematicsPage';
import { PhysicsPage } from './pages/PhysicsPage';
import { HumanitiesPage } from './pages/HumanitiesPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { HighlightsPage } from './pages/HighlightsPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { SeminarsPage } from './pages/SeminarsPage';
import { InstitutionalPage } from './pages/InstitutionalPage';

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [campusTourOpen, setCampusTourOpen] = useState(false);
  const [currentLang, setLang] = useState('en');
  const [textZoom, setTextZoom] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync zoom with root css
  useEffect(() => {
    document.documentElement.style.setProperty('--text-zoom', textZoom);
  }, [textZoom]);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const researchSlugs = [
    'biology', 'chemistry', 'earth-climate-sciences', 'mathematics',
    'physics', 'humanities-social-sciences', 'research-facilities',
    'research-highlights', 'publications', 'seminar-colloquium'
  ];

  const handleSelectPage = (pageKey) => {
    if (!pageKey) {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (researchSlugs.includes(pageKey)) {
      navigate('/' + pageKey);
    } else {
      navigate('/page/' + pageKey);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="iisert-app-root">
      {/* 1. Header with Multi-Tier Navigation & Language/Zoom tools */}
      <Header 
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAdmissions={() => setAdmissionsOpen(true)}
        currentLang={currentLang}
        setLang={setLang}
        textZoom={textZoom}
        setTextZoom={setTextZoom}
        onSelectPage={handleSelectPage}
        activePage={location.pathname.replace(/^\//, '')}
      />

      <main id="content">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenAdmissions={() => setAdmissionsOpen(true)}
                onOpenCampusTour={() => setCampusTourOpen(true)}
                onSelectPage={handleSelectPage}
              />
            } 
          />
          {/* Research Division Dedicated Pages */}
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

          {/* Institutional Pages */}
          <Route path="/page/:slug" element={<InstitutionalPage />} />
          <Route path="/:slug" element={<InstitutionalPage />} />

          {/* Fallback to Home */}
          <Route 
            path="*" 
            element={
              <HomePage 
                onOpenAdmissions={() => setAdmissionsOpen(true)}
                onOpenCampusTour={() => setCampusTourOpen(true)}
                onSelectPage={handleSelectPage}
              />
            } 
          />
        </Routes>
      </main>

      {/* 9. Institutional Footer */}
      <Footer onSelectPage={handleSelectPage} />

      {/* Interactive Modals */}
      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)}
        onSelectPage={handleSelectPage}
        onOpenAdmissions={() => setAdmissionsOpen(true)}
        onOpenCampusTour={() => setCampusTourOpen(true)}
      />

      <AdmissionsModal 
        isOpen={admissionsOpen} 
        onClose={() => setAdmissionsOpen(false)} 
      />

      <CampusTourModal 
        isOpen={campusTourOpen} 
        onClose={() => setCampusTourOpen(false)} 
      />

      {/* Floating Action Controls */}
      <div className="floating-actions-dock">
        {showScrollTop && (
          <button 
            type="button" 
            onClick={scrollToTop}
            className="floating-btn scroll-top-btn"
            title="Back to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        )}
      </div>

      {/* Scoped Styling for Floating Dock */}
      <style>{`
        .floating-actions-dock {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 1000;
        }

        .floating-btn {
          box-shadow: 0 8px 24px rgba(0, 38, 77, 0.2);
          transition: all var(--transition-base);
        }

        .scroll-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-white);
          color: var(--color-blue-primary);
          border: 1.5px solid var(--color-border-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scroll-top-btn:hover {
          background-color: var(--color-blue-primary);
          color: var(--color-white);
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
}

export default App;
