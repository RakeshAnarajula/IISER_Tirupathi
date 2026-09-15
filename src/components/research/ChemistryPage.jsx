import React, { useState } from 'react';
import { 
  FlaskConical, 
  Atom, 
  Zap, 
  Sparkles, 
  Layers, 
  Microscope, 
  Mail, 
  Award, 
  ExternalLink,
  Flame,
  TestTube
} from 'lucide-react';

const iconMap = {
  flask: FlaskConical,
  atom: Atom,
  zap: Zap,
  sparkles: Sparkles,
  layers: Layers,
  microscope: Microscope
};

export function ChemistryPage({ data, onNavigate }) {
  const [activeTab, setActiveTab] = useState('areas');
  const accent = data.accentColor || '#d97706';

  return (
    <div className="research-detail-page chemistry-page-theme">
      {/* 1. Quick Stats Grid */}
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

      {/* 2. Lead Overview Card */}
      <div className="research-lead-box" style={{ borderLeftColor: accent }}>
        <p className="research-lead-paragraph">{data.content?.lead}</p>
      </div>

      {/* 3. Interactive Section Switcher */}
      <div className="research-page-tab-nav" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {[
          { id: 'areas', label: 'Research Frontiers' },
          { id: 'faculty', label: 'Faculty Directory' },
          { id: 'facilities', label: 'Instrumentation & Labs' },
          { id: 'publications', label: 'High-Impact Publications' },
          { id: 'overview', label: 'Vision & Curriculum' }
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              border: activeTab === tab.id ? `1.5px solid ${accent}` : '1px solid #e2e8f0',
              background: activeTab === tab.id ? `${accent}12` : '#ffffff',
              color: activeTab === tab.id ? accent : '#475569',
              fontWeight: activeTab === tab.id ? 700 : 500,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: Research Frontiers */}
      {activeTab === 'areas' && (
        <div className="research-areas-section animate-fade">
          <div className="research-sec-heading">
            <div className="heading-accent" style={{ background: accent }} />
            <span>Core Pillars of Chemical Science</span>
          </div>
          <p className="research-sec-text" style={{ marginBottom: '20px' }}>
            Our chemical research spans the spectrum from sustainable catalysis and clean energy storage materials to photoredox synthesis and chemical biology probes.
          </p>
          <div className="research-areas-grid">
            {data.content?.researchAreas?.map((area, idx) => {
              const IconComp = iconMap[area.icon] || FlaskConical;
              return (
                <div key={idx} className="research-area-card" style={{ borderTop: `2px solid ${accent}` }}>
                  <div className="research-area-icon" style={{ background: accent }}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="research-area-title">{area.title}</h3>
                  <p className="research-area-desc">{area.description}</p>
                </div>
              );
            })}
          </div>

          {/* Green Chemistry & Clean Energy Box */}
          <div style={{ marginTop: '28px', padding: '24px', borderRadius: '14px', background: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fde68a', fontWeight: 700 }}>Flagship R&amp;D Initiative</span>
              <h4 style={{ margin: '4px 0 6px', fontSize: '1.2rem', color: '#fff' }}>Catalysis for Net-Zero Carbon Economy</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', maxWidth: '640px', lineHeight: 1.6 }}>
                Investigating earth-abundant molecular catalysts and solar-powered photocatalysts to convert greenhouse CO₂ into valuable chemical feedstocks and green fuels.
              </p>
            </div>
            <button 
              type="button" 
              onClick={() => onNavigate('research-facilities')}
              style={{ background: '#f59e0b', color: '#451a03', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Instrumentation Facility &rarr;
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: Faculty */}
      {activeTab === 'faculty' && (
        <div className="research-faculty-section animate-fade">
          <div className="research-sec-heading">
            <div className="heading-accent" style={{ background: accent }} />
            <span>Chemistry Faculty Directory</span>
          </div>
          <div className="research-faculty-grid">
            {data.content?.faculty?.map((prof, idx) => (
              <div key={idx} className="research-faculty-card">
                <div className="research-faculty-avatar" style={{ background: `linear-gradient(135deg, ${accent} 0%, #78350f 100%)` }}>
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

      {/* TAB 3: Facilities */}
      {activeTab === 'facilities' && (
        <div className="research-facilities-section animate-fade">
          <div className="research-sec-heading">
            <div className="heading-accent" style={{ background: accent }} />
            <span>Advanced Chemical Instrumentation</span>
          </div>
          <div className="research-facilities-grid">
            {data.content?.facilities?.map((fac, idx) => (
              <div key={idx} className="research-facility-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <h4 className="research-facility-name" style={{ color: '#0f172a' }}>{fac.name}</h4>
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
            <span>Selected High-Impact Chemical Papers</span>
          </div>
          <div className="research-pubs-list">
            {data.content?.publications?.map((pub, idx) => (
              <div key={idx} className="research-pub-card" style={{ borderLeft: `3px solid ${accent}` }}>
                <div className="research-pub-header">
                  <h4 className="research-pub-title">{pub.title}</h4>
                </div>
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

      {/* TAB 5: Vision & Curriculum */}
      {activeTab === 'overview' && (
        <div className="research-text-sections animate-fade">
          {data.content?.sections?.map((sec, idx) => (
            <div key={idx} className="research-section-block" style={{ borderLeft: `3px solid ${accent}` }}>
              <h3 className="research-sec-heading">
                <div className="heading-accent" style={{ background: accent }} />
                <span>{sec.heading}</span>
              </h3>
              <p className="research-sec-text">{sec.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
