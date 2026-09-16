import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { researchPagesData } from '../constants/researchPagesData';
import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchSidebar } from '../components/research/ResearchSidebar';
import '../styles/ResearchPage.scss';
import { 
  Dna, 
  Microscope, 
  FlaskConical, 
  Leaf, 
  Brain, 
  Cpu, 
  Mail, 
  ChevronRight
} from 'lucide-react';

const iconMap = {
  dna: Dna,
  microscope: Microscope,
  flask: FlaskConical,
  leaf: Leaf,
  brain: Brain,
  cpu: Cpu
};

export function BiologyPage() {
  const [activeTab, setActiveTab] = useState('areas');
  const data = researchPagesData["biology"];
  const accent = data?.accentColor || '#16a34a';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Department of Biology | IISER Tirupati";
  }, []);

  if (!data) return null;

  return (
    <div className="research-page-wrapper">
      {/* 1. Hero Section with High-Clarity Image & Frosted Card (No marked UI topbar) */}
      <ResearchHero data={data} />

      {/* 2. Main Content Grid */}
      <div className="site-container-wide research-body-container">
        <div className="research-body-grid">
          {/* Left Navigation Sidebar */}
          <ResearchSidebar activePath="/biology" />

          {/* Right Main Editorial Content */}
          <main className="research-main-content">
            {/* Quick Stats Grid */}
            {data.quickStats && (
              <div className="research-stats-strip">
                {data.quickStats.map((stat, idx) => (
                  <div key={idx} className="research-stat-card" style={{ borderTop: `3px solid ${accent}` }}>
                    <span className="research-stat-val" style={{ color: accent }}>{stat.value}</span>
                    <span className="research-stat-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Lead Overview Card */}
            <div className="research-lead-box" style={{ borderLeftColor: accent }}>
              <p className="research-lead-paragraph">{data.content?.lead}</p>
            </div>

            {/* Interactive Section Tabs */}
            <div className="research-page-tab-nav">
              {[
                { id: 'areas', label: 'Research Areas & Themes' },
                { id: 'faculty', label: 'Faculty Directory' },
                { id: 'facilities', label: 'Laboratories & Facilities' },
                { id: 'publications', label: 'Recent High-Impact Papers' },
                { id: 'overview', label: 'Vision & Academics' }
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`research-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  style={activeTab === tab.id ? { background: accent } : {}}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB 1: Research Areas */}
            {activeTab === 'areas' && (
              <div className="research-areas-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Pioneering Biological Investigations</span>
                </div>
                <p className="research-sec-text" style={{ marginBottom: '20px' }}>
                  Faculty members at IISER Tirupati lead state-of-the-art research across diverse spatial scales, from quantum biophysics in enzymes to biodiversity dynamics in tropical deciduous biomes.
                </p>
                <div className="research-areas-grid">
                  {data.content?.researchAreas?.map((area, idx) => {
                    const IconComp = iconMap[area.icon] || Dna;
                    return (
                      <div key={idx} className="research-area-card" style={{ borderTop: `3px solid ${accent}` }}>
                        <div className="research-area-icon" style={{ background: accent }}>
                          <IconComp size={22} />
                        </div>
                        <h3 className="research-area-title">{area.title}</h3>
                        <p className="research-area-desc">{area.description}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Seshachalam Special Banner */}
                <div style={{ marginTop: '32px', padding: '28px', borderRadius: '18px', background: 'linear-gradient(135deg, #052e16 0%, #14532d 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', boxShadow: '0 10px 30px rgba(5,46,22,0.2)' }}>
                  <div>
                    <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#86efac', fontWeight: 800 }}>Living Ecological Observatory</span>
                    <h4 style={{ margin: '6px 0 8px', fontSize: '1.25rem', color: '#fff' }}>Seshachalam Biosphere Reserve Field Station</h4>
                    <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
                      Located at the foothills of the Eastern Ghats, IISER Tirupati provides unprecedented access for ecological monitoring, tropical flora phenology, and endemism conservation studies.
                    </p>
                  </div>
                  <Link 
                    to="/research-facilities"
                    style={{ background: '#22c55e', color: '#052e16', padding: '12px 22px', borderRadius: '10px', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Explore Field Stations</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            )}

            {/* TAB 2: Faculty */}
            {activeTab === 'faculty' && (
              <div className="research-faculty-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Faculty &amp; Principal Investigators</span>
                </div>
                <div className="research-faculty-grid">
                  {data.content?.faculty?.map((prof, idx) => (
                    <div key={idx} className="research-faculty-card">
                      <div className="research-faculty-avatar" style={{ background: `linear-gradient(135deg, ${accent} 0%, #064e3b 100%)` }}>
                        {prof.image ? (
                          <img
                            src={encodeURI(prof.image)}
                            alt={prof.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        ) : (
                          <span>{prof.name.split(' ').slice(1).map(n => n[0]).join('').slice(0, 2)}</span>
                        )}
                      </div>
                      <div className="research-faculty-info">
                        <h4 className="research-faculty-name">{prof.name}</h4>
                        <span className="research-faculty-role">{prof.role}</span>
                        <span className="research-faculty-area" style={{ color: accent }}>{prof.area}</span>
                        <a href={`mailto:${prof.email}`} className="research-faculty-email">
                          <Mail size={12} />
                          <span>{prof.email}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Facilities */}
            {activeTab === 'facilities' && (
              <div className="research-facilities-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Specialized Departmental Laboratories</span>
                </div>
                <div className="research-facilities-grid">
                  {data.content?.facilities?.map((fac, idx) => (
                    <div key={idx} className="research-facility-card" style={{ borderLeft: `4px solid ${accent}` }}>
                      <h4 className="research-facility-name">{fac.name}</h4>
                      <p className="research-facility-desc">{fac.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: Publications */}
            {activeTab === 'publications' && (
              <div className="research-pubs-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Key Research Publications</span>
                </div>
                <div className="research-pubs-list">
                  {data.content?.publications?.map((pub, idx) => (
                    <div key={idx} className="research-pub-card" style={{ borderLeft: `4px solid ${accent}` }}>
                      <h4 className="research-pub-title">{pub.title}</h4>
                      <div className="research-pub-meta">
                        <span className="research-pub-journal" style={{ color: accent }}>{pub.journal}</span>
                        <span className="research-pub-badge">{pub.impact}</span>
                        <span className="research-pub-year">{pub.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: Vision & Academics */}
            {activeTab === 'overview' && (
              <div className="research-text-sections animate-fade">
                {data.content?.sections?.map((sec, idx) => (
                  <div key={idx} className="research-section-block" style={{ borderLeft: `4px solid ${accent}` }}>
                    <h3 className="research-sec-heading">
                      <div className="heading-accent" style={{ background: accent }} />
                      <span>{sec.heading}</span>
                    </h3>
                    <p className="research-sec-text">{sec.text}</p>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default BiologyPage;

