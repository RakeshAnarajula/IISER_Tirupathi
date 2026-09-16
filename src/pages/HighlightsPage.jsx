import React, { useState, useEffect } from 'react';
import { researchPagesData } from '../constants/researchPagesData';
import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchSidebar } from '../components/research/ResearchSidebar';
import '../styles/ResearchPage.module.scss';

export function HighlightsPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const data = researchPagesData["research-highlights"];
  const accent = data?.accentColor || '#f59e0b';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Research Highlights | IISER Tirupati";
  }, []);

  if (!data) return null;

  const highlights = data.content?.highlights || [];
  const departments = ['All', ...new Set(highlights.map(h => h.department))];

  const filteredHighlights = selectedDept === 'All' 
    ? highlights 
    : highlights.filter(h => h.department === selectedDept);

  return (
    <div className="research-page-wrapper">
      <ResearchHero data={data} />

      <div className="site-container-wide research-body-container">
        <div className="research-body-grid">
          <ResearchSidebar activePath="/research-highlights" />

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

            {/* Department Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '26px' }}>
              {departments.map(dept => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '20px',
                    fontSize: '0.82rem',
                    fontWeight: selectedDept === dept ? 700 : 500,
                    border: selectedDept === dept ? `1.5px solid ${accent}` : '1px solid #e2e8f0',
                    background: selectedDept === dept ? `${accent}18` : '#ffffff',
                    color: selectedDept === dept ? '#b45309' : '#64748b',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '36px' }}>
              {filteredHighlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="highlight-card animate-fade"
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ position: 'relative', height: '180px', background: '#0f172a' }}>
                    <img 
                      src={item.image || '/card-highlights.jpg'} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = '/card-highlights.jpg'; }}
                    />
                    <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '8px' }}>
                      <span style={{ background: accent, color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 700 }}>
                        {item.department}
                      </span>
                      <span style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ margin: '0 0 10px', fontSize: '1.08rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                        {item.title}
                      </h3>
                      <p style={{ margin: '0 0 16px', fontSize: '0.84rem', lineHeight: 1.6, color: '#475569' }}>
                        {item.summary}
                      </p>
                    </div>

                    <div style={{ padding: '12px 14px', background: '#fef3c7', borderRadius: '10px', borderLeft: `3px solid ${accent}` }}>
                      <span style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#92400e', marginBottom: '3px' }}>
                        Significance &amp; Impact
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#78350f', lineHeight: 1.4, display: 'block' }}>
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grants Strip */}
            {data.content?.fundedProjects && (
              <div style={{ background: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
                <div className="research-sec-heading" style={{ marginBottom: '16px' }}>
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Major Sponsored Research Projects &amp; External Grants</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {data.content.fundedProjects.map((proj, idx) => (
                    <div key={idx} style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', borderLeft: `4px solid ${accent}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: accent, background: `${accent}16`, padding: '2px 8px', borderRadius: '4px' }}>
                          {proj.agency}
                        </span>
                        <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>
                          {proj.amount}
                        </span>
                      </div>
                      <h4 style={{ margin: '0 0 4px', fontSize: '0.88rem', color: '#0f172a', fontWeight: 600 }}>
                        {proj.title}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        Lead PI: {proj.pi}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default HighlightsPage;

