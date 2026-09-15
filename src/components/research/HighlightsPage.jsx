import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

export function HighlightsPage({ data, onNavigate }) {
  const [selectedDept, setSelectedDept] = useState('All');
  const accent = data.accentColor || '#f59e0b';

  const highlights = data.content?.highlights || [];
  const departments = ['All', ...new Set(highlights.map(h => h.department))];

  const filteredHighlights = selectedDept === 'All' 
    ? highlights 
    : highlights.filter(h => h.department === selectedDept);

  return (
    <div className="research-detail-page highlights-page-theme">
      {/* 1. Quick Stats */}
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

      {/* 3. Department Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {departments.map(dept => (
          <button
            key={dept}
            type="button"
            onClick={() => setSelectedDept(dept)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: selectedDept === dept ? 700 : 500,
              border: selectedDept === dept ? `1.5px solid ${accent}` : '1px solid #e2e8f0',
              background: selectedDept === dept ? `${accent}16` : '#fff',
              color: selectedDept === dept ? '#b45309' : '#64748b',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* 4. Research Highlights Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '36px' }}>
        {filteredHighlights.map((item, idx) => (
          <div 
            key={idx}
            className="highlight-card animate-fade"
            style={{
              background: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                <span style={{ background: accent, color: '#fff', padding: '3px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>
                  {item.department}
                </span>
                <span style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '3px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                  {item.year}
                </span>
              </div>
            </div>

            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ margin: '0 0 10px', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <p style={{ margin: '0 0 14px', fontSize: '0.82rem', lineHeight: 1.6, color: '#475569' }}>
                  {item.summary}
                </p>
              </div>

              <div style={{ padding: '10px 12px', background: '#fef3c7', borderRadius: '8px', borderLeft: `3px solid ${accent}` }}>
                <span style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#92400e', marginBottom: '2px' }}>
                  Significance &amp; Impact
                </span>
                <span style={{ fontSize: '0.76rem', color: '#78350f', lineHeight: 1.4, display: 'block' }}>
                  {item.impact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Major Sponsored Research Grants Strip */}
      {data.content?.fundedProjects && (
        <div style={{ background: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
          <div className="research-sec-heading" style={{ marginBottom: '16px' }}>
            <div className="heading-accent" style={{ background: accent }} />
            <span>Major Sponsored Research Projects &amp; External Grants</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {data.content.fundedProjects.map((proj, idx) => (
              <div key={idx} style={{ padding: '16px', background: '#f8fafc', borderRadius: '10px', borderLeft: `3px solid ${accent}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: accent, background: `${accent}16`, padding: '2px 8px', borderRadius: '4px' }}>
                    {proj.agency}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>
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
    </div>
  );
}
