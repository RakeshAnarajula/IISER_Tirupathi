import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, X, ArrowRight, BookOpen, Atom, Volume2, Microscope, 
  GraduationCap, Users, Building, PhoneCall, Compass, FileText, 
  Sparkles, CheckCircle2, ChevronRight, CornerDownLeft, ExternalLink
} from 'lucide-react';
import { academicPrograms, departments, announcements, researchFacilities } from '../data/mockData';
import { aboutAndPeopleData } from '../data/aboutAndPeopleData';
import { researchPagesData } from '../data/researchPagesData';

export function SearchModal({ isOpen, onClose, onSelectPage, onOpenAdmissions, onOpenCampusTour }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);

  // Build pages index from aboutAndPeopleData and researchPagesData
  const institutionalPages = useMemo(() => {
    const aboutPages = Object.entries(aboutAndPeopleData).map(([slug, data]) => {
      const summaryText = data.content?.lead || 
        (Array.isArray(data.content?.sections) ? data.content.sections.map(s => s.heading + ' ' + (s.text || '')).join(' ') : '') ||
        data.subtitle || '';
      return {
        id: slug,
        slug,
        title: data.title,
        subtitle: data.subtitle || data.tagline || '',
        category: data.category || 'Institutional Page',
        summary: summaryText,
        type: 'page'
      };
    });

    const resPages = Object.entries(researchPagesData).map(([slug, data]) => {
      const summaryText = data.content?.lead || data.subtitle || data.tagline || '';
      return {
        id: slug,
        slug,
        title: data.title,
        subtitle: data.subtitle || data.tagline || '',
        category: data.category || 'Research',
        summary: summaryText,
        type: 'page'
      };
    });

    return [...aboutPages, ...resPages];
  }, []);

  // Quick destinations when search is empty
  const quickDestinations = [
    {
      title: "BS-MS Admissions 2026",
      subtitle: "5-Year Dual Degree via IAT 2026 • Eligibility & Application Details",
      icon: GraduationCap,
      badge: "Admissions",
      action: () => {
        onClose();
        if (onOpenAdmissions) onOpenAdmissions();
      }
    },
    {
      title: "Faculty Directory & PIs",
      subtitle: "85+ Research Scientists, Laboratory Heads & National Academy Fellows",
      icon: Users,
      badge: "People",
      action: () => {
        onClose();
        if (onSelectPage) onSelectPage('faculty');
      }
    },
    {
      title: "Central Instrumentation Facility (CIF)",
      subtitle: "500 MHz NMR, HRMS, FE-SEM, Single-Crystal XRD & HPC Param",
      icon: Microscope,
      badge: "Research",
      action: () => {
        onClose();
        if (onSelectPage) onSelectPage(null);
        setTimeout(() => {
          document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      title: "About The Institute & Yerpedu Campus",
      subtitle: "250-Acre Eco-Sustainable Campus • National Importance Mandate",
      icon: Building,
      badge: "About Us",
      action: () => {
        onClose();
        if (onSelectPage) onSelectPage('the-institute');
      }
    },
    {
      title: "Virtual Campus 360° Tour",
      subtitle: "Explore Hostels, Science Complex, Library & Seshachalam Foothills",
      icon: Compass,
      badge: "Interactive",
      action: () => {
        onClose();
        if (onOpenCampusTour) onOpenCampusTour();
      }
    },
    {
      title: "Administration & Campus Contact",
      subtitle: "Registrar, Academic Office, Campus Security & Emergency Helplines",
      icon: PhoneCall,
      badge: "Contact",
      action: () => {
        onClose();
        if (onSelectPage) onSelectPage('administration');
      }
    }
  ];

  const popularSearches = [
    "BS-MS Admissions 2026",
    "Faculty Directory",
    "500 MHz NMR",
    "Ph.D. Fellowships",
    "Yerpedu Campus",
    "Chemical Sciences",
    "Anti-Ragging",
    "NIRF Ranking"
  ];

  // Focus on modal open
  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    } else {
      setQuery('');
      setActiveCategory('all');
    }
  }, [isOpen]);

  const q = query.toLowerCase().trim();

  // Search Results Calculation
  const matchingResults = useMemo(() => {
    if (!q || q.length < 2) return [];

    const results = [];

    // 1. Programs
    academicPrograms.forEach(p => {
      const matchScore = (
        (p.title.toLowerCase().includes(q) ? 10 : 0) +
        (p.level.toLowerCase().includes(q) ? 5 : 0) +
        (p.overview.toLowerCase().includes(q) ? 3 : 0) +
        (p.admissionVia?.toLowerCase().includes(q) ? 4 : 0)
      );
      if (matchScore > 0) {
        results.push({
          id: `prog-${p.id}`,
          title: p.title,
          subtitle: `${p.level} • ${p.duration} • ${p.admissionVia}`,
          description: p.overview,
          type: 'program',
          categoryLabel: 'Academic Program',
          badgeColor: 'blue',
          action: () => {
            onClose();
            if (onSelectPage) onSelectPage(null);
            setTimeout(() => {
              document.getElementById('academics')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        });
      }
    });

    // 2. Departments
    departments.forEach(d => {
      const matchScore = (
        (d.name.toLowerCase().includes(q) ? 10 : 0) +
        (d.head.toLowerCase().includes(q) ? 5 : 0) +
        (d.specializations.some(s => s.toLowerCase().includes(q)) ? 6 : 0)
      );
      if (matchScore > 0) {
        results.push({
          id: `dept-${d.id}`,
          title: d.name,
          subtitle: `${d.facultyCount} • Head: ${d.head}`,
          description: `Specializations: ${d.specializations.join(', ')}`,
          type: 'department',
          categoryLabel: 'Department',
          badgeColor: 'teal',
          action: () => {
            onClose();
            if (onSelectPage) onSelectPage(null);
            setTimeout(() => {
              document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        });
      }
    });

    // 3. Research Facilities
    researchFacilities.forEach((f, i) => {
      const matchScore = (
        (f.title.toLowerCase().includes(q) ? 10 : 0) +
        (f.tag.toLowerCase().includes(q) ? 5 : 0) +
        (f.equipment.some(e => e.toLowerCase().includes(q)) ? 5 : 0) +
        (f.specs.toLowerCase().includes(q) ? 3 : 0)
      );
      if (matchScore > 0) {
        results.push({
          id: `fac-${i}`,
          title: f.title,
          subtitle: `${f.tag} • ${f.specs}`,
          description: `Key Equipment: ${f.equipment.join(' • ')}`,
          type: 'facility',
          categoryLabel: 'Research Facility',
          badgeColor: 'orange',
          action: () => {
            onClose();
            if (onSelectPage) onSelectPage(null);
            setTimeout(() => {
              document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        });
      }
    });

    // 4. Institutional Pages
    institutionalPages.forEach(page => {
      const matchScore = (
        (page.title.toLowerCase().includes(q) ? 10 : 0) +
        (page.subtitle.toLowerCase().includes(q) ? 6 : 0) +
        (page.category.toLowerCase().includes(q) ? 4 : 0) +
        (page.summary.toLowerCase().includes(q) ? 2 : 0)
      );
      if (matchScore > 0) {
        results.push({
          id: `page-${page.slug}`,
          title: page.title,
          subtitle: `${page.category} • ${page.subtitle}`,
          description: page.summary.slice(0, 140) + '...',
          type: 'page',
          categoryLabel: page.category,
          badgeColor: 'purple',
          action: () => {
            onClose();
            if (onSelectPage) onSelectPage(page.slug);
          }
        });
      }
    });

    // 5. Announcements
    announcements.forEach(a => {
      const matchScore = (
        (a.title.toLowerCase().includes(q) ? 10 : 0) +
        (a.desc.toLowerCase().includes(q) ? 4 : 0) +
        (a.category.toLowerCase().includes(q) ? 5 : 0)
      );
      if (matchScore > 0) {
        results.push({
          id: `ann-${a.id}`,
          title: a.title,
          subtitle: `${a.date} • ${a.category}`,
          description: a.desc,
          type: 'announcement',
          categoryLabel: 'Notice / Circular',
          badgeColor: 'amber',
          action: () => {
            onClose();
            if (onSelectPage) onSelectPage(null);
            setTimeout(() => {
              document.getElementById('announcements')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        });
      }
    });

    return results;
  }, [q, institutionalPages, onSelectPage, onClose]);

  // Filtered by category tab
  const filteredResults = useMemo(() => {
    if (activeCategory === 'all') return matchingResults;
    if (activeCategory === 'programs') return matchingResults.filter(r => r.type === 'program');
    if (activeCategory === 'faculty-depts') return matchingResults.filter(r => r.type === 'department' || (r.type === 'page' && r.id.includes('faculty')));
    if (activeCategory === 'facilities') return matchingResults.filter(r => r.type === 'facility');
    if (activeCategory === 'announcements') return matchingResults.filter(r => r.type === 'announcement');
    if (activeCategory === 'pages') return matchingResults.filter(r => r.type === 'page');
    return matchingResults;
  }, [matchingResults, activeCategory]);

  // Reset selected index when filtered results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults.length, activeCategory, q]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredResults.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults.length > 0 && filteredResults[selectedIndex]) {
          filteredResults[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector('.result-item-card.is-active');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  // Helper to highlight matching text
  const highlightMatch = (text, term) => {
    if (!term || !text) return text;
    const parts = text.split(new RegExp(`(${term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={i} className="search-term-highlight">{part}</mark>
      ) : (
        part
      )
    );
  };

  const categoryCounts = {
    all: matchingResults.length,
    programs: matchingResults.filter(r => r.type === 'program').length,
    'faculty-depts': matchingResults.filter(r => r.type === 'department' || (r.type === 'page' && r.id.includes('faculty'))).length,
    facilities: matchingResults.filter(r => r.type === 'facility').length,
    announcements: matchingResults.filter(r => r.type === 'announcement').length,
    pages: matchingResults.filter(r => r.type === 'page').length,
  };

  return (
    <div className="search-spotlight-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="University Search Dialog">
      <div className="search-spotlight-window" onClick={(e) => e.stopPropagation()}>
        
        {/* Search Top Input Box */}
        <div className="search-header-container">
          <div className="search-bar-inner">
            <div className="search-icon-box">
              <Search size={22} className="search-icon-svg" />
            </div>
            
            <input 
              ref={inputRef}
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search degrees, faculty, research labs, circulars, Yerpedu campus..." 
              className="search-main-input"
              aria-label="Search IISER Tirupati"
              autoComplete="off"
              spellCheck="false"
            />

            {query && (
              <button 
                type="button" 
                onClick={() => { setQuery(''); inputRef.current?.focus(); }} 
                className="search-action-btn search-clear-btn" 
                aria-label="Clear search input"
                title="Clear input"
              >
                <X size={16} />
              </button>
            )}

            <button 
              type="button" 
              onClick={onClose} 
              className="search-action-btn search-esc-badge" 
              aria-label="Close search modal"
              title="Close modal (Esc)"
            >
              <kbd>ESC</kbd>
            </button>
          </div>

          {/* Quick Category Filter Bar (Visible when searching) */}
          {q.length >= 2 && matchingResults.length > 0 && (
            <div className="search-filter-pills-bar">
              <span className="filter-label">Filter:</span>
              <div className="filter-pills-scroll">
                {[
                  { key: 'all', label: 'All Results', count: categoryCounts.all },
                  { key: 'programs', label: 'Programs', count: categoryCounts.programs },
                  { key: 'faculty-depts', label: 'Faculty & Depts', count: categoryCounts['faculty-depts'] },
                  { key: 'facilities', label: 'Facilities', count: categoryCounts.facilities },
                  { key: 'announcements', label: 'Notices', count: categoryCounts.announcements },
                  { key: 'pages', label: 'Institutional Pages', count: categoryCounts.pages },
                ].filter(tab => tab.key === 'all' || tab.count > 0).map(tab => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveCategory(tab.key)}
                    className={`search-filter-chip ${activeCategory === tab.key ? 'active' : ''}`}
                  >
                    <span>{tab.label}</span>
                    <span className="chip-counter">{tab.count}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Popular Trending Searches Bar */}
        <div className="search-trending-strip">
          <div className="trending-title">
            <Sparkles size={14} className="trending-icon" />
            <span>Popular Searches:</span>
          </div>
          <div className="trending-chips-wrap">
            {popularSearches.map((term, idx) => (
              <button 
                key={idx} 
                type="button" 
                onClick={() => {
                  setQuery(term);
                  inputRef.current?.focus();
                }}
                className={`trending-chip ${query === term ? 'active' : ''}`}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body: Results or Curated Portals */}
        <div className="search-body-viewport" ref={resultsContainerRef}>
          {q.length < 2 ? (
            /* EMPTY / DEFAULT STATE: Rich curated portals & shortcuts */
            <div className="search-default-showcase">
              <div className="showcase-header">
                <span className="showcase-caption">Featured University Portals & Direct Links</span>
                <span className="showcase-hint">Select any destination or type keywords above</span>
              </div>

              <div className="portals-grid">
                {quickDestinations.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="portal-card"
                      onClick={item.action}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter') item.action(); }}
                    >
                      <div className="portal-card-top">
                        <div className="portal-icon-wrapper">
                          <IconComp size={20} />
                        </div>
                        <span className="portal-badge">{item.badge}</span>
                      </div>
                      <div className="portal-card-content">
                        <h4 className="portal-card-title">{item.title}</h4>
                        <p className="portal-card-sub">{item.subtitle}</p>
                      </div>
                      <div className="portal-card-footer">
                        <span className="portal-action-text">Explore</span>
                        <ChevronRight size={14} className="portal-arrow" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="search-instit-highlights">
                <div className="highlight-pill">
                  <CheckCircle2 size={13} className="text-orange" />
                  <span>Ministry of Education, Govt. of India</span>
                </div>
                <div className="highlight-pill">
                  <CheckCircle2 size={13} className="text-orange" />
                  <span>Autonomous Institute of National Importance</span>
                </div>
                <div className="highlight-pill">
                  <CheckCircle2 size={13} className="text-orange" />
                  <span>250-Acre Yerpedu Permanent Campus</span>
                </div>
              </div>
            </div>
          ) : filteredResults.length === 0 ? (
            /* NO RESULTS STATE */
            <div className="search-empty-feedback">
              <div className="empty-icon-circle">
                <Search size={32} />
              </div>
              <h3 className="empty-heading">No results found for "{query}"</h3>
              <p className="empty-desc">
                We couldn't find matches across degrees, labs, faculty, or circulars.
              </p>
              <div className="empty-suggestions">
                <span>Try searching for:</span>
                <div className="empty-sugg-buttons">
                  {["BS-MS", "Chemistry", "Admissions", "Director", "NMR", "Yerpedu"].map((s, i) => (
                    <button 
                      key={i} 
                      type="button" 
                      onClick={() => setQuery(s)} 
                      className="empty-tag-btn"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* ACTIVE RESULTS LIST */
            <div className="search-active-results-list">
              <div className="results-status-summary">
                <span>Showing {filteredResults.length} {filteredResults.length === 1 ? 'match' : 'matches'} for "{query}"</span>
                <span className="results-keys-hint">Use ↑ ↓ arrows to navigate • Enter to view</span>
              </div>

              <div className="results-stack">
                {filteredResults.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      className={`result-item-card is-${item.badgeColor} ${isSelected ? 'is-active' : ''}`}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      role="button"
                      tabIndex={0}
                      aria-selected={isSelected}
                    >
                      <div className="result-card-left">
                        <div className="result-card-meta">
                          <span className={`result-category-badge badge-${item.badgeColor}`}>
                            {item.categoryLabel}
                          </span>
                          <span className="result-subtitle">
                            {highlightMatch(item.subtitle, q)}
                          </span>
                        </div>
                        <h4 className="result-title">
                          {highlightMatch(item.title, q)}
                        </h4>
                        {item.description && (
                          <p className="result-desc">
                            {highlightMatch(item.description, q)}
                          </p>
                        )}
                      </div>

                      <div className="result-card-right">
                        <span className="result-open-label">Open</span>
                        <div className="result-arrow-circle">
                          <ArrowRight size={15} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls & Keybind info */}
        <div className="search-modal-footer">
          <div className="footer-keys-row">
            <span className="key-guide">
              <kbd className="key-chip">↑</kbd>
              <kbd className="key-chip">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="key-guide">
              <kbd className="key-chip">↵</kbd>
              <span>Select</span>
            </span>
            <span className="key-guide">
              <kbd className="key-chip">ESC</kbd>
              <span>Close</span>
            </span>
          </div>
          <div className="footer-brand-label">
            IISER Tirupati Institutional Search
          </div>
        </div>

      </div>

      {/* Scoped CSS Styles for Modern Spotlight Dialog */}
      <style>{`
        /* ==========================================================================
           Spotlight University Search Dialog
           Theme: Blue (#00264D), White, Peach (#FFF2E8), Orange (#FF5722 / #E64A19)
           ========================================================================== */
        
        .search-spotlight-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 24, 51, 0.68);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 3500;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 60px 16px 30px;
          overflow-y: auto;
          animation: searchFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes searchFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes searchWindowPop {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(-14px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .search-spotlight-window {
          width: 100%;
          max-width: 780px;
          background-color: #FFFFFF;
          border-radius: 20px;
          border: 1px solid rgba(255, 107, 43, 0.2);
          box-shadow: 
            0 24px 64px rgba(0, 26, 51, 0.35),
            0 6px 18px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 84vh;
          animation: searchWindowPop 0.26s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 1. Header & Input */
        .search-header-container {
          background-color: #FFFFFF;
          border-bottom: 1px solid #E8EFF7;
          display: flex;
          flex-direction: column;
        }

        .search-bar-inner {
          display: flex;
          align-items: center;
          padding: 18px 24px;
          gap: 14px;
          background-color: #FFFFFF;
          transition: background-color 0.2s;
        }

        .search-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: #F0F6FD;
          color: #00264D;
          flex-shrink: 0;
        }

        .search-main-input {
          flex: 1;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          font-family: var(--font-sans);
          font-size: 1.12rem;
          font-weight: 500;
          color: #00264D;
          background: transparent;
          padding: 0;
          min-width: 0;
        }

        /* Prevent global orange border on input */
        .search-main-input:focus,
        .search-main-input:focus-visible {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }

        .search-main-input::placeholder {
          color: #8C9CAE;
          font-weight: 400;
          font-size: 1.02rem;
        }

        .search-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;
          cursor: pointer;
          color: #687F96;
          border-radius: 8px;
          padding: 6px;
          transition: all 0.15s ease;
        }

        .search-clear-btn:hover {
          background-color: #FFF2E8;
          color: #E64A19;
        }

        .search-esc-badge kbd {
          display: inline-block;
          background-color: #F0F4F8;
          border: 1px solid #D6E0EC;
          border-radius: 6px;
          padding: 3px 7px;
          font-size: 0.72rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          color: #4A607A;
          letter-spacing: 0.05em;
        }

        .search-esc-badge:hover kbd {
          background-color: #E2ECF6;
          color: #00264D;
        }

        /* Category Filter Pills (When search active) */
        .search-filter-pills-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 24px 14px;
          background-color: #FFFFFF;
          border-top: 1px dashed #EBF1F8;
        }

        .filter-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #687F96;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .filter-pills-scroll {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 2px;
        }

        .filter-pills-scroll::-webkit-scrollbar {
          display: none;
        }

        .search-filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 600;
          color: #3B526B;
          background-color: #F2F6FA;
          border: 1px solid #E0E8F2;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .search-filter-chip:hover {
          background-color: #E6EFF8;
          color: #00264D;
        }

        .search-filter-chip.active {
          background-color: #00264D;
          color: #FFFFFF;
          border-color: #00264D;
        }

        .search-filter-chip .chip-counter {
          display: inline-block;
          font-size: 0.68rem;
          padding: 1px 5px;
          border-radius: 10px;
          background-color: rgba(0, 0, 0, 0.08);
        }

        .search-filter-chip.active .chip-counter {
          background-color: #FF5722;
          color: #FFFFFF;
        }

        /* 2. Trending Strip */
        .search-trending-strip {
          padding: 10px 24px;
          background: #FFF9F5;
          border-bottom: 1px solid #FFE4D4;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .trending-title {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #D84315;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          flex-shrink: 0;
        }

        .trending-icon {
          color: #FF5722;
        }

        .trending-chips-wrap {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          align-items: center;
        }

        .trending-chip {
          background-color: #FFFFFF;
          border: 1px solid #FFD0B5;
          color: #A03808;
          padding: 3px 9px;
          border-radius: 9999px;
          font-size: 0.74rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .trending-chip:hover,
        .trending-chip.active {
          background-color: #FF5722;
          color: #FFFFFF;
          border-color: #FF5722;
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(255, 87, 34, 0.25);
        }

        /* 3. Body Viewport */
        .search-body-viewport {
          padding: 22px 24px;
          overflow-y: auto;
          flex: 1;
          background-color: #FBFDFE;
        }

        /* Empty / Default State: Curated Portals */
        .search-default-showcase {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .showcase-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 4px;
        }

        .showcase-caption {
          font-family: var(--font-accent);
          font-size: 0.78rem;
          font-weight: 700;
          color: #00264D;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .showcase-hint {
          font-size: 0.74rem;
          color: #687F96;
        }

        .portals-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .portal-card {
          background-color: #FFFFFF;
          border: 1px solid #E2EAF2;
          border-radius: 12px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .portal-card:hover {
          border-color: #FF7043;
          background-color: #FFFDFB;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 38, 77, 0.08);
        }

        .portal-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .portal-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-color: #F0F6FD;
          color: #00264D;
        }

        .portal-card:hover .portal-icon-wrapper {
          background-color: #FFF0E6;
          color: #E64A19;
        }

        .portal-badge {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 2px 7px;
          border-radius: 4px;
          background-color: #F0F4F8;
          color: #4A607A;
        }

        .portal-card-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #00264D;
          margin: 0 0 4px 0;
          line-height: 1.3;
        }

        .portal-card-sub {
          font-size: 0.74rem;
          color: #5C728A;
          line-height: 1.4;
          margin: 0 0 10px 0;
        }

        .portal-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #E64A19;
        }

        .portal-arrow {
          transition: transform 0.15s ease;
        }

        .portal-card:hover .portal-arrow {
          transform: translateX(3px);
        }

        .search-instit-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 6px;
          border-top: 1px solid #EDF3F9;
        }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: #5C728A;
          font-weight: 500;
        }

        /* 4. Active Results List */
        .search-active-results-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .results-status-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #5C728A;
          font-weight: 600;
          padding-bottom: 4px;
        }

        .results-keys-hint {
          color: #8C9CAE;
          font-weight: 400;
        }

        .results-stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .result-item-card {
          background-color: #FFFFFF;
          border: 1px solid #E3ECF5;
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          cursor: pointer;
          transition: all 0.14s ease;
          position: relative;
        }

        .result-item-card:hover,
        .result-item-card.is-active {
          background-color: #FFFDF9;
          border-color: #FF9E80;
          transform: translateX(3px);
          box-shadow: 0 4px 12px rgba(0, 38, 77, 0.06);
        }

        .result-item-card.is-active {
          outline: 2px solid rgba(255, 87, 34, 0.6);
          outline-offset: -1px;
        }

        .result-card-left {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
          min-width: 0;
        }

        .result-card-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .result-category-badge {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 1.5px 6px;
          border-radius: 4px;
        }

        .badge-blue {
          background-color: #E6F0FA;
          color: #003366;
        }

        .badge-teal {
          background-color: #E0F2F1;
          color: #004D40;
        }

        .badge-orange {
          background-color: #FFF0E6;
          color: #C0392B;
        }

        .badge-amber {
          background-color: #FFF8E1;
          color: #D84315;
        }

        .badge-purple {
          background-color: #EDE7F6;
          color: #4A148C;
        }

        .result-subtitle {
          font-size: 0.72rem;
          color: #687F96;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .result-title {
          font-size: 0.94rem;
          font-weight: 700;
          color: #00264D;
          margin: 0;
          line-height: 1.3;
        }

        .result-desc {
          font-size: 0.75rem;
          color: #5C728A;
          margin: 2px 0 0 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .result-card-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .result-open-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #FF5722;
          opacity: 0;
          transform: translateX(4px);
          transition: all 0.15s ease;
        }

        .result-item-card:hover .result-open-label,
        .result-item-card.is-active .result-open-label {
          opacity: 1;
          transform: translateX(0);
        }

        .result-arrow-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #F0F4F8;
          color: #4A607A;
          transition: all 0.15s ease;
        }

        .result-item-card:hover .result-arrow-circle,
        .result-item-card.is-active .result-arrow-circle {
          background-color: #FF5722;
          color: #FFFFFF;
          transform: translateX(2px);
        }

        .search-term-highlight {
          background-color: #FFE6CC;
          color: #B23B00;
          font-weight: 700;
          padding: 0 2px;
          border-radius: 2px;
        }

        /* 5. Empty State Feedback */
        .search-empty-feedback {
          padding: 36px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .empty-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #F0F4F8;
          color: #8C9CAE;
          margin-bottom: 14px;
        }

        .empty-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: #00264D;
          margin: 0 0 6px 0;
        }

        .empty-desc {
          font-size: 0.82rem;
          color: #687F96;
          margin: 0 0 18px 0;
          max-width: 420px;
        }

        .empty-suggestions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .empty-suggestions span {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #A03808;
        }

        .empty-sugg-buttons {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .empty-tag-btn {
          background-color: #FFF2E8;
          border: 1px solid #FFD0B5;
          color: #B23B00;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .empty-tag-btn:hover {
          background-color: #FF5722;
          color: #FFFFFF;
          border-color: #FF5722;
        }

        /* 6. Footer bar */
        .search-modal-footer {
          padding: 10px 24px;
          background-color: #F4F8FC;
          border-top: 1px solid #E2EAF2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.72rem;
          color: #687F96;
        }

        .footer-keys-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .key-guide {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .key-chip {
          display: inline-block;
          background-color: #FFFFFF;
          border: 1px solid #CBD8E6;
          border-radius: 4px;
          padding: 1px 5px;
          font-size: 0.68rem;
          font-family: inherit;
          font-weight: 600;
          color: #334E68;
        }

        .footer-brand-label {
          font-weight: 600;
          color: #4A607A;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .search-spotlight-backdrop {
            padding: 20px 10px;
          }

          .search-spotlight-window {
            max-height: 92vh;
            border-radius: 16px;
          }

          .search-bar-inner {
            padding: 14px 16px;
          }

          .search-main-input {
            font-size: 1rem;
          }

          .portals-grid {
            grid-template-columns: 1fr;
          }

          .search-modal-footer {
            flex-direction: column;
            gap: 6px;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
