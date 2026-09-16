import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { SearchModal } from './components/common/SearchModal';
import { AdmissionsModal } from './components/admissions/AdmissionsModal';
import { CampusTourModal } from './components/campusLife/CampusTourModal';
import { AppRoutes } from './routes/AppRoutes';
import { ArrowUp } from 'lucide-react';

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

  const rootSlugs = [
    'biology', 'chemistry', 'earth-climate-sciences', 'mathematics',
    'physics', 'humanities-social-sciences', 'research-facilities',
    'research-highlights', 'publications', 'seminar-colloquium',
    'events', 'all-events'
  ];

  const handleSelectPage = (pageKey) => {
    if (!pageKey) {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (rootSlugs.includes(pageKey)) {
      navigate('/' + pageKey);
    } else {
      navigate('/page/' + pageKey);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
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

      <main id="content" className="main-content">
        <AppRoutes
          onOpenAdmissions={() => setAdmissionsOpen(true)}
          onOpenCampusTour={() => setCampusTourOpen(true)}
          onSelectPage={handleSelectPage}
        />
      </main>

      {/* Institutional Footer */}
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
            className="scroll-top-btn"
            title="Back to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

