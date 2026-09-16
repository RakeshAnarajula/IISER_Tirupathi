import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { researchPagesData } from '../constants/researchPagesData';
import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchSidebar } from '../components/research/ResearchSidebar';
import '../styles/ResearchPage.scss';
import { 
  Globe2, 
  CloudRain, 
  Mountain, 
  Compass, 
  Wind, 
  Flame, 
  Mail, 
  ChevronRight 
} from 'lucide-react';

const iconMap = {
  globe: Globe2,
  "cloud-rain": CloudRain,
  mountain: Mountain,
  compass: Compass,
  wind: Wind,
  flame: Flame
};

export function EarthSciencesPage() {
  const [activeTab, setActiveTab] = useState('areas');
  const data = researchPagesData["earth-climate-sciences"];
  const accent = data?.accentColor || '#0284c7';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Department of Earth & Climate Sciences | IISER Tirupati";
  }, []);

  if (!data) return null;

  return (
    <div className="research-page-wrapper">
      <ResearchHero data={data} />

      <div className="site-container-wide research-body-container">
        <div className="research-body-grid">
          <ResearchSidebar activePath="/earth-climate-sciences" />

          <main className="research-main-content">
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

            <div className="research-lead-box" style={{ borderLeftColor: accent }}>
              <p className="research-lead-paragraph">{data.content?.lead}</p>
            </div>

            <div className="research-page-tab-nav">
              {[
                { id: 'areas', label: 'Research Disciplines' },
                { id: 'faculty', label: 'Faculty & Geoscientists' },
                { id: 'facilities', label: 'Field Stations & Labs' },
                { id: 'publications', label: 'Geoscience Publications' },
                { id: 'overview', label: 'Vision & Mission' }
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

            {activeTab === 'areas' && (
              <div className="research-areas-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Earth System &amp; Planetary Dynamics</span>
                </div>
                <p className="research-sec-text" style={{ marginBottom: '20px' }}>
                  From the Indian summer monsoon teleconnections and Bay of Bengal tropical cyclogenesis to Eastern Ghats granulite terrains and tectonic mantle convection models.
                </p>
                <div className="research-areas-grid">
                  {data.content?.researchAreas?.map((area, idx) => {
                    const IconComp = iconMap[area.icon] || Globe2;
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

                <div style={{ marginTop: '32px', padding: '28px', borderRadius: '18px', background: 'linear-gradient(135deg, #082f49 0%, #0369a1 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', boxShadow: '0 10px 30px rgba(8,47,73,0.2)' }}>
                  <div>
                    <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7dd3fc', fontWeight: 800 }}>National Observation Network</span>
                    <h4 style={{ margin: '6px 0 8px', fontSize: '1.25rem', color: '#fff' }}>Atmospheric &amp; Seismic Telemetry Network</h4>
                    <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
                      Deploying Doppler sodar, radiometer profiling towers, and continuous broadband seismic stations to study deep crustal seismicity and convective cloud microphysics.
                    </p>
                  </div>
                  <Link 
                    to="/research-facilities"
                    style={{ background: '#38bdf8', color: '#082f49', padding: '12px 22px', borderRadius: '10px', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Field Stations</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'faculty' && (
              <div className="research-faculty-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Earth &amp; Climate Sciences Faculty</span>
                </div>
                <div className="research-faculty-grid">
                  {data.content?.faculty?.map((prof, idx) => (
                    <div key={idx} className="research-faculty-card">
                      <div className="research-faculty-avatar" style={{ background: `linear-gradient(135deg, ${accent} 0%, #075985 100%)` }}>
                        <span>{prof.name.split(' ').slice(1).map(n => n[0]).join('').slice(0, 2)}</span>
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

            {activeTab === 'facilities' && (
              <div className="research-facilities-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Observational &amp; Geochemical Facilities</span>
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

            {activeTab === 'publications' && (
              <div className="research-pubs-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>High-Impact Earth Sciences Papers</span>
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

export default EarthSciencesPage;

