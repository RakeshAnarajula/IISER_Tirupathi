import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { researchPagesData } from '../constants/researchPagesData';
import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchSidebar } from '../components/research/ResearchSidebar';
import '../styles/ResearchPage.scss';
import { 
  BookOpen, 
  Users, 
  Feather, 
  Scale, 
  Heart, 
  Brain, 
  Mail, 
  ChevronRight 
} from 'lucide-react';

const iconMap = {
  "book-open": BookOpen,
  users: Users,
  feather: Feather,
  scale: Scale,
  heart: Heart,
  brain: Brain
};

export function HumanitiesPage() {
  const [activeTab, setActiveTab] = useState('areas');
  const data = researchPagesData["humanities-social-sciences"];
  const accent = data?.accentColor || '#dc2626';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Humanities & Social Sciences | IISER Tirupati";
  }, []);

  if (!data) return null;

  return (
    <div className="research-page-wrapper">
      <ResearchHero data={data} />

      <div className="site-container-wide research-body-container">
        <div className="research-body-grid">
          <ResearchSidebar activePath="/humanities-social-sciences" />

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
                { id: 'areas', label: 'Humanities & Social Inquiry' },
                { id: 'faculty', label: 'Faculty Directory' },
                { id: 'facilities', label: 'Studios & Digital Labs' },
                { id: 'publications', label: 'Scholarly Publications' },
                { id: 'overview', label: 'Philosophy & Curriculum' }
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
                  <span>Interdisciplinary Humanistic &amp; Social Inquiry</span>
                </div>
                <p className="research-sec-text" style={{ marginBottom: '20px' }}>
                  Bridging science and society through the history of science, philosophy of mind, ecological economics, public policy analysis, and digital humanities.
                </p>
                <div className="research-areas-grid">
                  {data.content?.researchAreas?.map((area, idx) => {
                    const IconComp = iconMap[area.icon] || BookOpen;
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

                <div style={{ marginTop: '32px', padding: '28px', borderRadius: '18px', background: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', boxShadow: '0 10px 30px rgba(69,10,10,0.2)' }}>
                  <div>
                    <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fca5a5', fontWeight: 800 }}>Interdisciplinary Center</span>
                    <h4 style={{ margin: '6px 0 8px', fontSize: '1.25rem', color: '#fff' }}>Center for Science, Ethics &amp; Public Policy</h4>
                    <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
                      Fostering critical discourse on AI ethics, bioethics of gene editing, climate justice, and the philosophical foundations of scientific inquiry for all BS-MS scientists.
                    </p>
                  </div>
                  <Link 
                    to="/seminar-colloquium"
                    style={{ background: '#ef4444', color: '#fff', padding: '12px 22px', borderRadius: '10px', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Public Lectures</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'faculty' && (
              <div className="research-faculty-section animate-fade">
                <div className="research-sec-heading">
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Humanities &amp; Social Sciences Faculty</span>
                </div>
                <div className="research-faculty-grid">
                  {data.content?.faculty?.map((prof, idx) => (
                    <div key={idx} className="research-faculty-card">
                      <div className="research-faculty-avatar" style={{ background: `linear-gradient(135deg, ${accent} 0%, #7f1d1d 100%)` }}>
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
                  <span>Specialized Studios &amp; Laboratories</span>
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
                  <span>Key Scholarly Publications &amp; Monographs</span>
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

export default HumanitiesPage;

