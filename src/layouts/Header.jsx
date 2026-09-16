import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { navItems } from '../constants/mockData';
import '../styles/Header.module.scss';
import {
  Search,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Phone,
  User
} from 'lucide-react';

const aboutColumns = [
  [
    { name: "The Institute", slug: "the-institute" },
    { name: "About Director", slug: "about-director" },
    { name: "Board Of Governors", slug: "board-of-governors" },
    { name: "NIRF Ranking", slug: "nirf" },
  ],
  [
    { name: "Senate", slug: "senate" },
    { name: "ACT And Statutes", slug: "act-and-statutes" },
    { name: "Records Retention Schedule", slug: "records-retention-schedule" },
  ],
  [
    { name: "Internal Committees", slug: "internal-committees" },
    { name: "Annual Reports", slug: "annual-reports" },
  ],
  [
    { name: "About Logo", slug: "about-logo" },
    { name: "About Tirupati", slug: "about-tirupati" },
  ],
];

const peopleColumns = [
  [
    { name: "Administration", slug: "administration" },
    { name: "Faculty", slug: "faculty" },
    { name: "On Contract", slug: "on-contract" },
  ],
  [
    { name: "Postdoctoral Research Fellows", slug: "postdoctoral-fellows" },
    { name: "Prime Minister's Research Fellowship (PMRF)", slug: "pmrf" },
    { name: "Visvesvaraya PhD Scheme", slug: "visvesvaraya-phd-scheme" },
  ],
  [
    { name: "Students", slug: "students" },
  ],
];

const researchColumns = [
  {
    title: "Departments",
    items: [
      { name: "Biology", slug: "biology" },
      { name: "Chemistry", slug: "chemistry" },
      { name: "Earth & Climate Sciences", slug: "earth-climate-sciences" },
      { name: "Mathematics", slug: "mathematics" },
      { name: "Physics", slug: "physics" },
      { name: "Humanities and Social Sciences", slug: "humanities-social-sciences" },
    ]
  },
  {
    items: [
      { name: "Research Facilities", slug: "research-facilities" },
      { name: "Research Highlights", slug: "research-highlights" },
    ]
  },
  {
    items: [
      { name: "Publications", slug: "publications" },
      { name: "Seminar/Colloquium", slug: "seminar-colloquium" },
    ]
  }
];

const academicsColumns = [
  {
    title: "Courses Offered",
    items: [
      { name: "BS-MS Dual Degree (5-Year)", link: "#academics" },
      { name: "BS Earth & Climate Sciences", link: "#academics" },
      { name: "Integrated PhD Programs", link: "#academics" },
      { name: "Doctor of Philosophy (PhD)", link: "#academics" },
      { name: "Professional Master's Program", link: "#academics" },
      { name: "Two-Year MS (Research)", link: "#academics" },
    ]
  },
  {
    title: "Admissions",
    items: [
      { name: "BS-MS Admissions 2026", modal: "admissions" },
      { name: "Integrated PhD Admissions", modal: "admissions" },
      { name: "PhD Admissions Portal", modal: "admissions" },
      { name: "Visvesvaraya PhD Scheme", slug: "visvesvaraya-phd-scheme" },
      { name: "One Year Professional Master's", modal: "admissions" },
      { name: "Scholarships & Financial Aid", modal: "admissions" },
    ]
  },
  {
    title: "Academic Norms",
    items: [
      { name: "Fee Payment And Policies", slug: "fee-payment-policies" },
      { name: "Academic Bank Of Credits (ABC)", slug: "academic-bank-of-credits" },
      { name: "Senate Ordinances", slug: "senate" },
      { name: "NITSER Act & Statutes", slug: "act-and-statutes" },
    ]
  }
];

const studentsColumns = [
  [
    { name: "Students Community", slug: "students" },
    { name: "Committee of Student Activities (CoSA)", slug: "committee-of-student-activities" },
  ],
  [
    { name: "Center for Career Development (CCPD)", slug: "career-development" },
    { name: "Student Clubs & Science Outreach", link: "#campus" },
  ],
  [
    { name: "Student Life at Yerpedu", link: "#campus" },
    { name: "Dining & Multi-Cuisine Mess", slug: "dining" },
  ]
];

const campusColumns = [
  [
    { name: "Teaching Facilities & Lecture Halls", link: "#campus" },
    { name: "Health Center & 24x7 Ambulance", slug: "health-center" },
  ],
  [
    { name: "IT Infrastructure & Wi-Fi 6", slug: "it-infrastructure" },
    { name: "Day Care Center", slug: "day-care" },
  ],
  [
    { name: "Dining & Mess Facilities", slug: "dining" },
    { name: "Yerpedu 250-Acre Permanent Campus", link: "#campus" },
  ]
];

const libraryColumns = [
  [
    { name: "About Central Library", slug: "library" },
    { name: "Library Rules & Borrowing Guidelines", slug: "library-rules" },
  ],
  [
    { name: "Library Catalogue & Collections", slug: "library" },
    { name: "Online Databases (Scopus / IEEE)", slug: "online-databases" },
  ],
  [
    { name: "E-Journals & Science Direct", slug: "online-databases" },
    { name: "Library Helpdesk & Support", slug: "contact-us" },
  ]
];

export function Header({
  onOpenSearch,
  onOpenAdmissions,
  currentLang,
  setLang,
  textZoom,
  setTextZoom,
  onSelectPage,
  activePage
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(48);

  const sentinelRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        if (height > 0) {
          setNavHeight(height);
        }
      }
    };

    updateNavHeight();

    const handleScroll = () => {
      if (sentinelRef.current) {
        const rect = sentinelRef.current.getBoundingClientRect();
        setIsNavbarSticky(rect.top <= 0);
      } else {
        setIsNavbarSticky(window.scrollY > 140);
      }
      setIsScrolled(window.scrollY > 30);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest('.primary-navbar')) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateNavHeight);
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavHeight);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleZoomChange = (delta) => {
    if (delta === 0) {
      setTextZoom(1);
    } else {
      setTextZoom(prev => Math.min(1.25, Math.max(0.85, Number((prev + delta).toFixed(2)))));
    }
  };


  const researchSlugs = [
    'biology', 'chemistry', 'earth-climate-sciences', 'mathematics',
    'physics', 'humanities-social-sciences', 'research-facilities',
    'research-highlights', 'publications', 'seminar-colloquium'
  ];

  const handleNavigationItem = (item) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (item.modal === 'admissions' || item.link === '#admissions') {
      onOpenAdmissions?.();
      return;
    }

    if (item.slug) {
      if (researchSlugs.includes(item.slug)) {
        navigate('/' + item.slug);
      } else {
        navigate('/page/' + item.slug);
      }
      onSelectPage?.(item.slug);
      return;
    }

    if (item.link && item.link.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(item.link);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        const el = document.querySelector(item.link);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (item.path && item.path.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(item.path);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        const el = document.querySelector(item.path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderMegaDropdown = () => {
    if (activeDropdown === null) return null;
    const currentItem = navItems[activeDropdown];
    if (!currentItem) return null;

    if (currentItem.title === 'About Us') {
      return (
        <div
          className="official-mega-menu-panel"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="official-dropdown-grid about-grid">
            {aboutColumns.map((col, colIdx) => (
              <div key={colIdx} className="official-dropdown-col">
                {col.map((linkItem) => (
                  <button
                    key={linkItem.slug}
                    type="button"
                    className={`official-menu-link ${activePage === linkItem.slug ? 'active' : ''}`}
                    onClick={() => handleNavigationItem(linkItem)}
                  >
                    <span>{linkItem.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.title === 'People') {
      return (
        <div
          className="official-mega-menu-panel"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="official-dropdown-grid people-grid">
            {peopleColumns.map((col, colIdx) => (
              <div key={colIdx} className="official-dropdown-col">
                {col.map((linkItem) => (
                  <button
                    key={linkItem.slug}
                    type="button"
                    className={`official-menu-link ${activePage === linkItem.slug ? 'active' : ''}`}
                    onClick={() => handleNavigationItem(linkItem)}
                  >
                    <span>{linkItem.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.title === 'Research') {
      return (
        <div
          className="official-mega-menu-panel"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="official-dropdown-grid three-col-grid">
            {researchColumns.map((col, colIdx) => (
              <div key={colIdx} className="official-dropdown-col">
                {col.title && <div className="dropdown-col-heading">{col.title}</div>}
                {col.items.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className={`official-menu-link ${col.title ? 'is-subitem' : ''}`}
                    onClick={() => handleNavigationItem(sub)}
                  >
                    <span>{sub.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.title === 'Academics') {
      return (
        <div
          className="official-mega-menu-panel"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="official-dropdown-grid academics-grid">
            {academicsColumns.map((col, colIdx) => (
              <div key={colIdx} className="official-dropdown-col">
                {col.title && <div className="dropdown-col-heading">{col.title}</div>}
                {col.items.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className={`official-menu-link ${col.title ? 'is-subitem' : ''}`}
                    onClick={() => handleNavigationItem(sub)}
                  >
                    <span>{sub.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.title === 'Students') {
      return (
        <div
          className="official-mega-menu-panel"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="official-dropdown-grid three-col-grid">
            {studentsColumns.map((col, colIdx) => (
              <div key={colIdx} className="official-dropdown-col">
                {col.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className="official-menu-link"
                    onClick={() => handleNavigationItem(sub)}
                  >
                    <span>{sub.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.title === 'Campus & Facilities') {
      return (
        <div
          className="official-mega-menu-panel"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="official-dropdown-grid three-col-grid">
            {campusColumns.map((col, colIdx) => (
              <div key={colIdx} className="official-dropdown-col">
                {col.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className="official-menu-link"
                    onClick={() => handleNavigationItem(sub)}
                  >
                    <span>{sub.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.title === 'Library') {
      return (
        <div
          className="official-mega-menu-panel"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="official-dropdown-grid three-col-grid">
            {libraryColumns.map((col, colIdx) => (
              <div key={colIdx} className="official-dropdown-col">
                {col.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    className="official-menu-link"
                    onClick={() => handleNavigationItem(sub)}
                  >
                    <span>{sub.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      {/* 1. Top Institutional Utility Bar (Stanford-Inspired) */}
      {/* 1. Top Utility Bar - Exact items from original design */}
      <div className="top-utility-bar">
        <div className="site-container-wide utility-content">
          <div className="utility-left">
            <button
              type="button"
              onClick={() => onSelectPage?.('the-institute')}
              className="util-link"
            >
              RTI
            </button>
            <span className="util-pipe">|</span>
            <button
              type="button"
              onClick={() => onSelectPage?.('on-contract')}
              className="util-link"
            >
              Tenders
            </button>
            <span className="util-pipe">|</span>
            <a
              href="https://webmail.iisertirupati.ac.in"
              target="_blank"
              rel="noreferrer"
              className="util-link"
            >
              Webmail
            </a>
            <span className="util-pipe">|</span>
            <button
              type="button"
              onClick={() => onSelectPage?.('contact-us')}
              className="util-link"
            >
              Directory
            </button>
            <span className="util-pipe">|</span>
            <button
              type="button"
              onClick={() => alert('Screen Reader Access')}
              className="util-link"
            >
              Screen Reader
            </button>
          </div>

          <div className="utility-right">
            {/* Accessibility text resize: A- A A+ */}
            <div className="text-resizer" aria-label="Adjust font size">
              <button
                type="button"
                onClick={() => handleZoomChange(-0.05)}
                title="Decrease font size"
                className={`zoom-btn ${textZoom < 1 ? 'active' : ''}`}
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => handleZoomChange(0)}
                title="Reset font size"
                className={`zoom-btn ${textZoom === 1 ? 'active' : ''}`}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => handleZoomChange(0.05)}
                title="Increase font size"
                className={`zoom-btn ${textZoom > 1 ? 'active' : ''}`}
              >
                A+
              </button>
            </div>

            <div className="utility-divider"></div>

            {/* Account / User Avatar */}
            <button
              type="button"
              onClick={() => alert('Sign In / Portal')}
              className="util-user-btn"
              title="Account / Sign In"
              aria-label="Account Login"
            >
              <User size={15} />
            </button>

            <div className="utility-divider"></div>

            {/* Language Switcher */}
            <div className="lang-switcher">
              <select
                value={currentLang}
                onChange={(e) => setLang(e.target.value)}
                className="lang-select"
                aria-label="Select Language"
              >
                <option value="en">English</option>
                <option value="te">తెలుగు (Telugu)</option>
                <option value="hi">हिन्दी (Hindi)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Institutional Branding Header with IISER Tirupati and G20 Logos */}
      <div className="main-brand-header">
        <div className="site-container-wide brand-header-content">
          {/* Left Side: tirupati-logo-icon.png */}
          <div className="brand-logo-left-container">
            <Link
              to="/"
              className="brand-logo-left"
              aria-label="IISER Tirupati Home"
              onClick={() => {
                onSelectPage?.(null);
              }}
            >
              <img
                src="/tirupati-logo-icon.png"
                alt="IISER Tirupati Official Emblem Logo"
                className="header-logo-img left-logo"
              />
            </Link>
          </div>

          {/* Center Content: Bilingual Institutional Name */}
          <Link
            to="/"
            className="brand-center-composite"
            style={{ textDecoration: 'none', color: 'inherit' }}
            onClick={() => onSelectPage?.(null)}
          >
            <div className="brand-center-text">
              <span className="inst-name-hindi">
                भारतीय विज्ञान शिक्षा एवं अनुसंधान संस्थान तिरुपति
              </span>
              <h1 className="brand-full-name">
                INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH TIRUPATI
              </h1>
              <span className="brand-sub-details">
                (शिक्षा मंत्रालय, भारत सरकार के अधीन एक स्वायत्त संस्थान / An Autonomous Institute under Ministry of Education, Govt. of India)
              </span>
            </div>
          </Link>

          {/* Right Side: g20-logo.png */}
          <div className="brand-logo-right-container">
            <div className="brand-logo-right">
              <img
                src="/g20-logo.png"
                alt="G20 Bharat 2023 India Official Logo"
                className="header-logo-img right-logo g20-logo"
              />
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="header-mobile-action">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Sentinel for sticky navbar trigger */}
      <div ref={sentinelRef} className="navbar-scroll-sentinel" />

      {/* Placeholder to prevent layout shift when navbar is fixed */}
      {isNavbarSticky && (
        <div
          className="navbar-placeholder"
          style={{ height: `${navHeight}px` }}
          aria-hidden="true"
        />
      )}

      {/* 3. Primary Navigation Bar - Matching User Specified Official Navigation Structure */}
      <nav
        ref={navbarRef}
        className={`primary-navbar ${isNavbarSticky ? 'navbar-sticky' : ''}`}
        aria-label="Primary Navigation"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="site-container-wide navbar-inner">
          <ul className="nav-menu">
            {navItems.map((item, idx) => {
              const isOpen = activeDropdown === idx;
              const hasSubmenu = item.title !== 'Careers' && item.title !== 'Contact Us';
              const isItemActive = activePage === item.slug;

              return (
                <li
                  key={item.title}
                  className={`nav-menu-item ${isOpen ? 'open' : ''}`}
                  onMouseEnter={() => {
                    if (hasSubmenu) {
                      setActiveDropdown(idx);
                    } else {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`nav-link ${isOpen ? 'official-active-tab' : ''} ${isItemActive ? 'page-active' : ''}`}
                    onClick={() => {
                      if (item.title === 'Contact Us') {
                        onSelectPage?.('contact-us');
                        setActiveDropdown(null);
                      } else if (item.title === 'Careers') {
                        onSelectPage?.('careers');
                        setActiveDropdown(null);
                      } else if (item.title === 'About Us') {
                        onSelectPage?.('the-institute');
                        setActiveDropdown(null);
                      } else if (item.title === 'People') {
                        onSelectPage?.('administration');
                        setActiveDropdown(null);
                      } else {
                        handleNavigationItem(item);
                      }
                    }}
                  >
                    <span className="nav-item-text">{item.title}</span>
                    {hasSubmenu && <span className="nav-caret">▾</span>}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Search Button */}
          <div className="nav-search-right">
            <button
              type="button"
              onClick={onOpenSearch}
              className="navbar-search-btn"
              title="Search website"
              aria-label="Search IISER Tirupati"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Sticky Bar - Visible only when navbar is sticky on mobile/tablet */}
        <div className="mobile-sticky-bar">
          <div className="mobile-sticky-brand">
            <span className="mobile-sticky-title">IISER TIRUPATI</span>
          </div>
          <div className="mobile-sticky-actions">
            <button
              type="button"
              onClick={onOpenSearch}
              className="mobile-sticky-btn"
              title="Search website"
              aria-label="Search IISER Tirupati"
            >
              <Search size={17} />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-sticky-btn"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Unified Full-Width Mega Dropdown Container */}
        {renderMegaDropdown()}
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="drawer-brand">
                <span className="drawer-title">IISER Tirupati</span>
                <span className="drawer-sub">Institutional Portal</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="drawer-close-btn"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="drawer-search-box">
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
                className="drawer-search-trigger"
              >
                <Search size={16} />
                <span>Search courses, faculty, circulars...</span>
              </button>
            </div>

            <div className="drawer-nav-list">
              {navItems.map((item, idx) => {
                const isAccordionOpen = openMobileGroup === idx;
                const isContactOrCareers = item.slug === 'contact-us' || item.slug === 'careers';

                if (isContactOrCareers) {
                  return (
                    <div key={idx} className="drawer-item-group direct-action">
                      <button
                        type="button"
                        className={`drawer-parent-btn ${activePage === item.slug ? 'active' : ''}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onSelectPage?.(item.slug);
                        }}
                      >
                        <span className="drawer-item-title-text">{item.title}</span>
                        <ChevronRight size={18} className="drawer-direct-arrow" />
                      </button>
                    </div>
                  );
                }

                let sublinks = [];
                if (item.title === 'About Us') {
                  sublinks = aboutColumns.flat();
                } else if (item.title === 'People') {
                  sublinks = peopleColumns.flat();
                } else if (item.title === 'Academics') {
                  sublinks = academicsColumns.flatMap(c => c.items);
                } else if (item.title === 'Research') {
                  sublinks = researchColumns.flatMap(c => c.items);
                } else if (item.title === 'Students') {
                  sublinks = studentsColumns.flat();
                } else if (item.title === 'Campus & Facilities') {
                  sublinks = campusColumns.flat();
                } else if (item.title === 'Library') {
                  sublinks = libraryColumns.flat();
                }

                return (
                  <div key={idx} className={`drawer-item-group ${isAccordionOpen ? 'expanded' : ''}`}>
                    <div className="drawer-accordion-header">
                      <button
                        type="button"
                        className="drawer-parent-btn"
                        onClick={() => {
                          // Toggle accordion on mobile
                          setOpenMobileGroup(isAccordionOpen ? null : idx);
                        }}
                      >
                        <span className="drawer-item-title-text">{item.title}</span>
                        <ChevronDown
                          size={18}
                          className={`drawer-chevron ${isAccordionOpen ? 'rotate' : ''}`}
                        />
                      </button>
                    </div>

                    {isAccordionOpen && (
                      <div className="drawer-sub-list animate-fade">
                        {sublinks.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            className={`drawer-sub-btn ${activePage === sub.slug ? 'active' : ''}`}
                            onClick={() => handleNavigationItem(sub)}
                          >
                            <ArrowRight size={13} className="sub-icon" />
                            <span>{sub.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="drawer-footer-actions">
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); onSelectPage?.('contact-us'); }}
                className="btn-primary w-full"
              >
                <Phone size={16} />
                <span>Contact &amp; Directory</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}


