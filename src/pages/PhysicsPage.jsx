import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { researchPagesData } from '../constants/researchPagesData';
import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchSidebar } from '../components/research/ResearchSidebar';
import '../styles/ResearchPage.module.scss';
import { 
  Atom, 
  Zap, 
  Eye, 
  Cpu, 
  Radio, 
  Mail, 
  Orbit, 
  ChevronRight 
} from 'lucide-react';

const iconMap = {
  atom: Atom,
  zap: Zap,
  orbit: Orbit,
  eye: Eye,
  cpu: Cpu,
  radio: Radio
};

export function PhysicsPage() {
  const [activeTab, setActiveTab] = useState('areas');
  const data = researchPagesData["physics"];
  const accent = data?.accentColor || '#7c3aed';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Department of Physics | IISER Tirupati";
  }, []);

  if (!data) return null;

  return (
    <div className="research-page-wrapper">
      <ResearchHero data={data} />

      <div className="site-container-wide research-body-container">
        <div className="research-body-grid">
          <ResearchSidebar activePath="/physics" />

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
                { id: 'areas', label: 'Quantum & Physical Disciplines' },
                { id: 'faculty', label: 'Physics Faculty Directory' },
                { id: 'facilities', label: 'Cleanroom & Optics Labs' },
                { id: 'publications', label: 'PRL & Nature Physics Papers' },
                { id: 'overview', label: 'Vision & Collaborations' }
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
                  <span>Frontiers in Fundamental &amp; Applied Physics</span>
                </div>
                <p className="research-sec-text" style={{ marginBottom: '20px' }}>
                  Investigating the deepest laws of nature — from quantum metamaterials, topological insulator states, and superconducting qubits to astrophysical relativistic plasma jets and femtosecond nonlinear optics.
                </p>
                <div className="research-areas-grid">
                  {data.content?.researchAreas?.map((area, idx) => {
                    const IconComp = iconMap[area.icon] || Atom;
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

                <div style={{ marginTop: '32px', padding: '28px', borderRadius: '18px', background: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', boxShadow: '0 10px 30px rgba(46,16,101,0.2)' }}>
                  <div>
                    <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ddd6fe', fontWeight: 800 }}>National Quantum Mission Center</span>
                    <h4 style={{ margin: '6px 0 8px', fontSize: '1.25rem', color: '#fff' }}>Quantum Materials &amp; Integrated Photonics Hub</h4>
                    <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
                      Fabricating chip-scale quantum entanglement sources, 2D van der Waals heterostructures, and ultra-cold atom optical lattices for quantum computation and sensing.
                    </p>
                  </div>
                  <Link 
                    to="/research-facilities"
                    style={{ background: '#a78bfa', color: '#2e1065', padding: '12px 22px', borderRadius: '10px', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Cleanroom Facilities</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'faculty' && (
              <div className="research-faculty-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Department of Physics Faculty</span>
                </div>
                <div className="research-faculty-grid">
                  {data.content?.faculty?.map((prof, idx) => (
                    <div key={idx} className="research-faculty-card">
                      <div className="research-faculty-avatar" style={{ background: `linear-gradient(135deg, ${accent} 0%, #4c1d95 100%)` }}>
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
                  <span>Specialized Physics Laboratories</span>
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
                  <span>Landmark Physics Publications</span>
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

export default PhysicsPage;

