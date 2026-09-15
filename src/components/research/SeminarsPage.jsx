import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Award, 
  Bookmark, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight,
  Bell
} from 'lucide-react';

export function SeminarsPage({ data, onNavigate }) {
  const [activeTab, setActiveTab] = useState('upcoming');
  const accent = data.accentColor || '#9333ea';

  const upcoming = data.content?.upcomingSeminars || [];
  const series = data.content?.seminarSeries || [];
  const distinguished = data.content?.distinguishedSpeakers || [];

  return (
    <div className="research-detail-page seminars-page-theme">
      {/* 1. Quick Stats Strip */}
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
          { id: 'upcoming', label: 'Upcoming Seminars & Talks' },
          { id: 'series', label: 'Colloquium & Seminar Series' },
          { id: 'distinguished', label: 'Distinguished Past Speakers' }
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              border: activeTab === tab.id ? `1.5px solid ${accent}` : '1px solid #e2e8f0',
              background: activeTab === tab.id ? `${accent}14` : '#ffffff',
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

      {/* TAB 1: Upcoming Seminars */}
      {activeTab === 'upcoming' && (
        <div className="upcoming-seminars-list animate-fade">
          <div className="research-sec-heading" style={{ marginBottom: '16px' }}>
            <div className="heading-accent" style={{ background: accent }} />
            <span>Scheduled Lectures &amp; Colloquia</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {upcoming.map((sem, idx) => (
              <div 
                key={idx}
                className="seminar-card"
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '20px 24px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '24px',
                  alignItems: 'center'
                }}
              >
                {/* Date Badge */}
                <div style={{ textAlign: 'center', padding: '14px', borderRadius: '10px', background: `${accent}10`, border: `1.5px solid ${accent}30` }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: accent, letterSpacing: '0.06em' }}>
                    {sem.department || 'IISER'}
                  </span>
                  <span style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>
                    {sem.date}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: '#64748b' }}>
                    <Clock size={11} />
                    <span>{sem.time}</span>
                  </span>
                </div>

                {/* Talk Info */}
                <div>
                  <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                    {sem.title}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                      {sem.speaker}
                    </span>
                    <span style={{ color: '#94a3b8' }}>•</span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {sem.affiliation}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: '#64748b' }}>
                      <MapPin size={12} style={{ color: accent }} />
                      <span>{sem.venue}</span>
                    </span>
                    <a 
                      href={`mailto:seminars@iisertirupati.ac.in?subject=Registration%20for%20${encodeURIComponent(sem.title)}`}
                      style={{ fontSize: '0.76rem', color: accent, fontWeight: 600, textDecoration: 'none' }}
                    >
                      Add to Calendar &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: Seminar Series */}
      {activeTab === 'series' && (
        <div className="seminar-series-section animate-fade">
          <div className="research-sec-heading" style={{ marginBottom: '16px' }}>
            <div className="heading-accent" style={{ background: accent }} />
            <span>Colloquia &amp; Seminar Formats</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {series.map((s, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '24px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderLeft: `4px solid ${accent}`,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                }}
              >
                <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: accent, background: `${accent}14`, padding: '3px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                  {s.frequency}
                </span>
                <h4 style={{ margin: '0 0 10px', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                  {s.name}
                </h4>
                <p style={{ margin: 0, fontSize: '0.84rem', color: '#475569', lineHeight: 1.6 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Distinguished Speakers */}
      {activeTab === 'distinguished' && (
        <div className="distinguished-speakers-section animate-fade">
          <div className="research-sec-heading" style={{ marginBottom: '16px' }}>
            <div className="heading-accent" style={{ background: accent }} />
            <span>Eminent Scientists &amp; Past Colloquium Speakers</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '18px' }}>
            {distinguished.map((spk, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '20px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                    {spk.name}
                  </h4>
                  <span style={{ fontSize: '0.72rem', background: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                    {spk.year}
                  </span>
                </div>
                <span style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', marginBottom: '8px' }}>
                  {spk.title}
                </span>
                <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '8px', borderLeft: `3px solid ${accent}` }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase' }}>Distinguished Talk</span>
                  <span style={{ fontSize: '0.8rem', color: '#334155', fontStyle: 'italic' }}>
                    "{spk.talkTitle}"
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
