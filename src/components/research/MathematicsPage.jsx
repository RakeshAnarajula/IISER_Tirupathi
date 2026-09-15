import React, { useState } from 'react';
import { 
  Binary, 
  Calculator, 
  Network, 
  GitBranch, 
  Infinity as InfinityIcon, 
  Shield, 
  Mail, 
  Award, 
  BookOpen, 
  Code
} from 'lucide-react';

const iconMap = {
  binary: Binary,
  calculator: Calculator,
  network: Network,
  "git-branch": GitBranch,
  infinity: InfinityIcon,
  shield: Shield
};

export function MathematicsPage({ data, onNavigate }) {
  const [activeTab, setActiveTab] = useState('areas');
  const accent = data.accentColor || '#4f46e5';

  return (
    <div className="research-detail-page math-page-theme">
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
          { id: 'areas', label: 'Mathematical Disciplines' },
          { id: 'faculty', label: 'Faculty Directory' },
          { id: 'facilities', label: 'Computational Labs' },
          { id: 'publications', label: 'Major Publications' },
          { id: 'overview', label: 'Vision & Colloquium' }
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

      {/* TAB 1: Mathematical Disciplines */}
      {activeTab === 'areas' && (
        <div className="research-areas-section animate-fade">
          <div className="research-sec-heading">
            <div className="heading-accent" style={{ background: accent }} />
            <span>Pure &amp; Applied Mathematics Disciplines</span>
          </div>
          <p className="research-sec-text" style={{ marginBottom: '20px' }}>
            Spanning the deep abstractions of algebraic geometry and number theory to data-driven non-linear partial differential equations, mathematical finance, and post-quantum cryptographic primitives.
          </p>
          <div className="research-areas-grid">
            {data.content?.researchAreas?.map((area, idx) => {
              const IconComp = iconMap[area.icon] || Binary;
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

          {/* Ramanujan Colloquium Banner */}
          <div style={{ marginTop: '28px', padding: '24px', borderRadius: '14px', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c7d2fe', fontWeight: 700 }}>Weekly Research Forum</span>
              <h4 style={{ margin: '4px 0 6px', fontSize: '1.2rem', color: '#fff' }}>Srinivasa Ramanujan Mathematical Colloquium</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
                Hosting distinguished international mathematicians, Fields medalists, and young researchers presenting open problems, proofs, and computational breakthroughs every Friday.
              </p>
            </div>
            <button 
              type="button" 
              onClick={() => onNavigate('seminar-colloquium')}
              style={{ background: '#818cf8', color: '#1e1b4b', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Colloquium Schedule &rarr;
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: Faculty */}
      {activeTab === 'faculty' && (
        <div className="research-faculty-section animate-fade">
          <div className="research-sec-heading">
            <div className="heading-accent" style={{ background: accent }} />
            <span>Mathematics Faculty Directory</span>
          </div>
          <div className="research-faculty-grid">
            {data.content?.faculty?.map((prof, idx) => (
              <div key={idx} className="research-faculty-card">
                <div className="research-faculty-avatar" style={{ background: `linear-gradient(135deg, ${accent} 0%, #312e81 100%)` }}>
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
            <span>Computational &amp; Library Facilities</span>
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
            <span>Notable Mathematics Publications</span>
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

      {/* TAB 5: Vision & Colloquium */}
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
