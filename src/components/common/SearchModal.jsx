import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, X, ArrowRight, Microscope, GraduationCap, Users,
  Building, PhoneCall, Compass, Sparkles, CheckCircle2, ChevronRight
} from 'lucide-react';
import { academicPrograms, departments, announcements, researchFacilities } from '../../constants/mockData';
import { aboutAndPeopleData } from '../../constants/aboutAndPeopleData';
import { researchPagesData } from '../../constants/researchPagesData';
import '../../styles/SearchModal.scss';

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
    </div>
  );
}

