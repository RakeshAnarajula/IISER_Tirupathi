import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { siteConfig, navItems } from '../data/mockData';
import {
  Search,
  Menu,
  X,
  Globe,
  Sparkles,
  GraduationCap,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Phone,
  BookOpen,
  User
} from 'lucide-react';

export const aboutColumns = [
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

export const peopleColumns = [
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

export const researchColumns = [
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

export const academicsColumns = [
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

export const studentsColumns = [
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

export const campusColumns = [
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

export const libraryColumns = [
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

  useEffect(() => {
    const handleScroll = () => {
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
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  const getInstituteTitle = () => {
    if (currentLang === 'te') return siteConfig.teluguName;
    if (currentLang === 'hi') return siteConfig.hindiName;
    return siteConfig.fullName;
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
      onOpenAdmissions && onOpenAdmissions();
      return;
    }

    if (item.slug) {
      if (researchSlugs.includes(item.slug)) {
        navigate('/' + item.slug);
      } else {
        navigate('/page/' + item.slug);
      }
      onSelectPage && onSelectPage(item.slug);
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
              onClick={() => onSelectPage && onSelectPage('the-institute')}
              className="util-link"
            >
              RTI
            </button>
            <span className="util-pipe">|</span>
            <button
              type="button"
              onClick={() => onSelectPage && onSelectPage('on-contract')}
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
              onClick={() => onSelectPage && onSelectPage('contact-us')}
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
                onSelectPage && onSelectPage(null);
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
            onClick={() => onSelectPage && onSelectPage(null)}
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

      {/* 3. Primary Navigation Bar - Matching User Specified Official Navigation Structure */}
      <nav
        className="primary-navbar"
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
                        onSelectPage && onSelectPage('contact-us');
                        setActiveDropdown(null);
                      } else if (item.title === 'Careers') {
                        onSelectPage && onSelectPage('careers');
                        setActiveDropdown(null);
                      } else if (item.title === 'About Us') {
                        onSelectPage && onSelectPage('the-institute');
                        setActiveDropdown(null);
                      } else if (item.title === 'People') {
                        onSelectPage && onSelectPage('administration');
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
                          onSelectPage && onSelectPage(item.slug);
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
                onClick={() => { setMobileMenuOpen(false); onSelectPage && onSelectPage('contact-us'); }}
                className="btn-primary w-full"
              >
                <Phone size={16} />
                <span>Contact &amp; Directory</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scoped CSS for Header */}
      <style>{`
        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--color-white);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .header-wrapper.scrolled {
          box-shadow: 0 4px 20px rgba(0, 59, 115, 0.12);
        }

        /* Top Utility Bar */
        .top-utility-bar {
          background-color: var(--color-blue-deep);
          color: #E2EBF5;
          font-size: 0.8rem;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .utility-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .utility-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .inst-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #CFE2FE;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: var(--color-orange-primary);
          box-shadow: 0 0 8px var(--color-orange-primary);
        }

        .utility-divider {
          width: 1px;
          height: 14px;
          background-color: rgba(255, 255, 255, 0.22);
        }

        .utility-links {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .util-link {
          color: #D6E4F5;
          font-size: 0.78rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .util-link:hover {
          color: var(--color-orange-primary);
        }

        .util-pipe {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.75rem;
          margin: 0 2px;
        }

        .util-user-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .util-user-btn:hover {
          background-color: var(--color-orange-primary);
          color: #FFFFFF;
        }

        .utility-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .text-resizer {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .resizer-label {
          color: #9FB8D7;
          font-size: 0.75rem;
        }

        .zoom-btn {
          background-color: rgba(255, 255, 255, 0.08);
          color: #E2EBF5;
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 0.72rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .zoom-btn:hover, .zoom-btn.active {
          background-color: var(--color-orange-primary);
          color: var(--color-white);
        }

        .lang-switcher {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .globe-icon {
          color: #FFB088;
        }

        .lang-select {
          background-color: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 0.76rem;
          cursor: pointer;
        }

        .lang-select option {
          background-color: var(--color-blue-deep);
          color: #FFFFFF;
        }

        /* Main Brand Header: Pure solid white, no bg images, compact side padding */
        .main-brand-header {
          background-color: #FFFFFF !important;
          background-image: none !important;
          padding: 8px 0;
          border-bottom: 1px solid var(--color-border-light);
          width: 100%;
        }

        .main-brand-header .brand-header-content {
          width: 100% !important;
          max-width: none !important;
          padding: 0 80px !important;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .top-utility-bar .utility-content {
          width: 100% !important;
          max-width: none !important;
          padding: 0 16px !important;
        }

        .primary-navbar .navbar-inner {
          width: 100% !important;
          max-width: none !important;
          padding: 0 160px !important;
        }

        .brand-logo-left-container {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .brand-logo-left {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .header-logo-img.left-logo {
          height: 68px;
          max-width: none;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-base);
        }

        .brand-logo-left:hover .left-logo {
          transform: scale(1.04);
        }

        .brand-center-composite {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          padding: 0 16px;
        }

        .brand-center-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 0;
        }

        .inst-name-hindi {
          font-family: var(--font-sans);
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          letter-spacing: 0.01em;
          margin-bottom: 3px;
        }

        .brand-full-name {
          font-family: var(--font-sans);
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--color-blue-primary);
          letter-spacing: 0.02em;
          line-height: 1.25;
          margin: 0;
          text-transform: uppercase;
        }

        .brand-sub-details {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748B;
          margin-top: 3px;
          text-align: center;
        }

        .brand-logo-right-container {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .brand-logo-right {
          display: flex;
          align-items: center;
        }

        .header-logo-img.right-logo.g20-logo {
          height: 60px;
          max-width: none;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-base);
        }

        .brand-logo-right:hover .g20-logo {
          transform: scale(1.04);
        }

        .header-mobile-action {
          display: none;
        }

        @media (max-width: 1100px) {
          .header-logo-img.left-logo {
            height: 56px;
            max-width: none;
          }
          .header-logo-img.right-logo.g20-logo {
            height: 50px;
            max-width: none;
          }
          .brand-full-name {
            font-size: 1.02rem;
          }
          .inst-name-hindi {
            font-size: 0.86rem;
          }
          .brand-sub-details {
            font-size: 0.67rem;
          }
        }

        @media (max-width: 860px) {
          .header-logo-img.left-logo {
            height: 48px;
            max-width: none;
          }
          .header-logo-img.right-logo.g20-logo {
            height: 44px;
            max-width: none;
          }
          .brand-full-name {
            font-size: 0.9rem;
          }
          .inst-name-hindi {
            font-size: 0.78rem;
          }
          .brand-sub-details {
            font-size: 0.62rem;
          }
        }

        @media (max-width: 768px) {
          .brand-logo-right-container {
            display: none;
          }
          .header-mobile-action {
            display: block;
          }
          .brand-center-text {
            align-items: flex-start;
            text-align: left;
            padding: 0 8px;
          }
          .brand-sub-details {
            text-align: left;
          }
        }

        .badge-pill-peach {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-peach-base);
          color: var(--color-orange-dark);
          border: 1px solid var(--color-peach-accent);
          font-size: 0.78rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
        }

        .sparkle-icon {
          color: var(--color-orange-primary);
        }

        .quick-search-trigger {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-blue-tint);
          border: 1px solid var(--color-border-light);
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          color: var(--color-text-muted);
          font-size: 0.86rem;
          transition: all var(--transition-fast);
        }

        .quick-search-trigger:hover {
          background-color: var(--color-white);
          border-color: var(--color-blue-bright);
          color: var(--color-blue-primary);
          box-shadow: var(--shadow-sm);
        }

        .search-kbd {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: 4px;
          padding: 1px 5px;
          font-size: 0.7rem;
          font-family: monospace;
          color: var(--color-text-secondary);
        }

        .apply-nav-btn {
          padding: 9px 20px;
          font-size: 0.88rem;
        }

        .mobile-toggle-btn {
          display: none;
          color: var(--color-blue-primary);
          padding: 6px;
        }

        /* 3. Primary Navbar - Official IISER Tirupati Style */
        .primary-navbar {
          background-color: #0E71B8;
          border-bottom: 3px solid var(--color-orange-primary);
          position: relative;
          z-index: 1000;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 0;
        }

        .nav-menu-item {
          display: flex;
          align-items: stretch;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 12px 14px;
          color: #FFFFFF;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          transition: background-color var(--transition-fast);
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
        }

        /* Exact Active Tab styling from User Screenshots */
        .nav-link.official-active-tab {
          background-color: #3e444a !important;
          color: #FFFFFF !important;
        }

        .nav-caret {
          font-size: 0.72rem;
          display: inline-block;
          margin-left: 2px;
          opacity: 0.9;
        }

        .nav-search-right {
          display: flex;
          align-items: center;
          margin-left: auto;
          padding-left: 12px;
        }

        .navbar-search-btn {
          width: 36px;
          height: 36px;
          background-color: #FFFFFF;
          color: #1A2B49;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
          transition: all var(--transition-fast);
        }

        .navbar-search-btn:hover {
          background-color: #F1F5F9;
          color: #0E71B8;
        }

        /* 4. Full-Width Mega Dropdown Panel (Exact Match to User Screenshots) */
        .official-mega-menu-panel {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          width: 100%;
          background-color: #FFFFFF;
          box-shadow: 0 16px 40px rgba(0, 38, 77, 0.16);
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          border-bottom: 3px solid var(--color-orange-primary);
          padding: 24px 0 28px;
          z-index: 1050;
          animation: slideDown 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .official-mega-menu-panel::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 0;
          right: 0;
          height: 8px;
        }

        .official-dropdown-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .official-dropdown-grid.about-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .official-dropdown-grid.people-grid,
        .official-dropdown-grid.research-grid,
        .official-dropdown-grid.academics-grid,
        .official-dropdown-grid.three-col-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr 1fr;
          gap: 0;
        }

        .official-dropdown-col {
          padding: 4px 28px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .official-dropdown-col:not(:last-child) {
          border-right: 1px solid #CBD5E1;
        }

        .dropdown-col-heading {
          font-size: 0.94rem;
          font-weight: 700;
          color: #111827;
          padding: 6px 12px;
          margin-bottom: 2px;
        }

        .official-menu-link {
          display: block;
          font-size: 0.92rem;
          font-weight: 500;
          color: #1F2937;
          padding: 7px 12px;
          border-radius: 4px;
          text-decoration: none;
          transition: all var(--transition-fast);
          line-height: 1.4;
        }

        .official-menu-link.is-subitem {
          padding-left: 20px;
          font-size: 0.88rem;
          color: #374151;
        }

        .official-menu-link:hover {
          color: #0E71B8;
          background-color: #EBF3FB;
        }

        .official-menu-link.active {
          color: var(--color-orange-primary);
          font-weight: 700;
          background-color: var(--color-peach-light);
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 38, 77, 0.6);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-drawer-content {
          width: 86%;
          max-width: 380px;
          height: 100%;
          background-color: var(--color-white);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          padding: 24px 20px;
          animation: slideInRight 0.28s ease;
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border-light);
        }

        .drawer-title {
          font-family: var(--font-accent);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .drawer-sub {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .drawer-close-btn {
          color: var(--color-text-secondary);
          padding: 6px;
        }

        .drawer-search-box {
          margin: 16px 0;
        }

        .drawer-search-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: var(--color-text-muted);
          text-align: left;
        }

        .drawer-nav-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .drawer-item-group {
          border-radius: var(--radius-sm);
          overflow: hidden;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-subtle);
        }

        .drawer-item-group.expanded {
          background-color: var(--color-white);
          border-color: var(--color-peach-accent);
          box-shadow: 0 4px 14px rgba(0, 59, 115, 0.05);
        }

        .drawer-accordion-header {
          display: flex;
          width: 100%;
        }

        .drawer-parent-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          text-align: left;
          background: none;
          transition: all var(--transition-fast);
        }

        .drawer-parent-btn:hover {
          color: var(--color-orange-primary);
          background-color: var(--color-peach-light);
        }

        .drawer-parent-btn.active {
          color: var(--color-orange-primary);
          background-color: var(--color-peach-base);
        }

        .drawer-chevron {
          color: var(--color-text-muted);
          transition: transform var(--transition-base);
        }

        .drawer-chevron.rotate {
          transform: rotate(180deg);
          color: var(--color-orange-primary);
        }

        .drawer-direct-arrow {
          color: var(--color-orange-primary);
        }

        .drawer-sub-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 6px 12px 12px 14px;
          border-top: 1px solid var(--color-peach-border);
          background-color: var(--color-peach-light);
        }

        .drawer-sub-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--color-text-primary);
          text-align: left;
          background: none;
          transition: all var(--transition-fast);
        }

        .drawer-sub-btn .sub-icon {
          color: var(--color-orange-primary);
          flex-shrink: 0;
        }

        .drawer-sub-btn:hover,
        .drawer-sub-btn.active {
          color: var(--color-orange-dark);
          background-color: var(--color-white);
          font-weight: 700;
          box-shadow: var(--shadow-sm);
        }

        .page-active {
          color: var(--color-orange-primary) !important;
          border-bottom: 2px solid var(--color-orange-primary);
        }

        .drawer-footer-actions {
          padding-top: 16px;
          border-top: 1px solid var(--color-border-light);
        }

        .w-full {
          width: 100%;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .primary-navbar {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
          .g20-badge-box {
            display: none;
          }
          .quick-search-trigger span,
          .quick-search-trigger kbd {
            display: none;
          }
          .quick-search-trigger {
            padding: 8px;
          }
        }

        @media (max-width: 768px) {
          .utility-links {
            display: none;
          }
          .brand-full-name {
            font-size: 0.78rem;
            max-width: 240px;
          }
          .brand-tagline {
            display: none;
          }
          .apply-nav-btn span {
            display: none;
          }
          .apply-nav-btn {
            padding: 8px 12px;
          }
        }
      `}</style>
    </header>
  );
}
