import React, { useState, useEffect } from 'react';
import { researchPagesData } from '../constants/researchPagesData';
import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchSidebar } from '../components/research/ResearchSidebar';
import '../styles/ResearchPage.module.scss';
import { Clock, MapPin } from 'lucide-react';

export function SeminarsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const data = researchPagesData["seminar-colloquium"];
  const accent = data?.accentColor || '#9333ea';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Seminars & Colloquia | IISER Tirupati";
  }, []);

  if (!data) return null;

  const upcoming = data.content?.upcomingSeminars || [];
  const series = data.content?.seminarSeries || [];
  const distinguished = data.content?.distinguishedSpeakers || [];

  return (
    <div className="research-page-wrapper">
      <ResearchHero data={data} />

      <div className="site-container-wide research-body-container">
        <div className="research-body-grid">
          <ResearchSidebar activePath="/seminar-colloquium" />

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
                { id: 'upcoming', label: 'Upcoming Seminars & Talks' },
                { id: 'series', label: 'Colloquium & Seminar Series' },
                { id: 'distinguished', label: 'Distinguished Past Speakers' }
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

            {activeTab === 'upcoming' && (
              <div className="upcoming-seminars-list animate-fade">
                <div className="research-sec-heading" style={{ marginBottom: '18px' }}>
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Scheduled Lectures &amp; Colloquia</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {upcoming.map((sem, idx) => (
                    <div 
                      key={idx}
                      className="seminar-card"
                      style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px 26px',
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                        display: 'grid',
                        gridTemplateColumns: '130px 1fr',
                        gap: '24px',
                        alignItems: 'center'
                      }}
                    >
                      <div style={{ textAlign: 'center', padding: '16px', borderRadius: '12px', background: `${accent}12`, border: `1.5px solid ${accent}30` }}>
                        <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: accent, letterSpacing: '0.06em' }}>
                          {sem.department || 'IISER'}
                        </span>
                        <span style={{ display: 'block', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>
                          {sem.date}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: '#64748b' }}>
                          <Clock size={11} />
                          <span>{sem.time}</span>
                        </span>
                      </div>

                      <div>
                        <h4 style={{ margin: '0 0 8px', fontSize: '1.08rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                          {sem.title}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                          <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#334155' }}>
                            {sem.speaker}
                          </span>
                          <span style={{ color: '#cbd5e1' }}>•</span>
                          <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                            {sem.affiliation}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: '#64748b' }}>
                            <MapPin size={13} style={{ color: accent }} />
                            <span>{sem.venue}</span>
                          </span>
                          <a 
                            href={`mailto:seminars@iisertirupati.ac.in?subject=Registration%20for%20${encodeURIComponent(sem.title)}`}
                            style={{ fontSize: '0.78rem', color: accent, fontWeight: 700, textDecoration: 'none' }}
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

            {activeTab === 'series' && (
              <div className="seminar-series-section animate-fade">
                <div className="research-sec-heading" style={{ marginBottom: '18px' }}>
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Colloquia &amp; Seminar Formats</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  {series.map((s, idx) => (
                    <div 
                      key={idx}
                      style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        borderLeft: `4px solid ${accent}`,
                        boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                      }}
                    >
                      <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: accent, background: `${accent}16`, padding: '4px 10px', borderRadius: '6px', marginBottom: '10px' }}>
                        {s.frequency}
                      </span>
                      <h4 style={{ margin: '0 0 10px', fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                        {s.name}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.86rem', color: '#475569', lineHeight: 1.65 }}>
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'distinguished' && (
              <div className="distinguished-speakers-section animate-fade">
                <div className="research-sec-heading" style={{ marginBottom: '18px' }}>
                  <div className="heading-accent" style={{ background: accent }} />
                  <span>Eminent Scientists &amp; Past Colloquium Speakers</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                  {distinguished.map((spk, idx) => (
                    <div 
                      key={idx}
                      style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <h4 style={{ margin: 0, fontSize: '1.02rem', fontWeight: 700, color: '#0f172a' }}>
                          {spk.name}
                        </h4>
                        <span style={{ fontSize: '0.74rem', background: '#f1f5f9', color: '#475569', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                          {spk.year}
                        </span>
                      </div>
                      <span style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', marginBottom: '10px' }}>
                        {spk.title}
                      </span>
                      <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '10px', borderLeft: `3px solid ${accent}` }}>
                        <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>Distinguished Lecture</span>
                        <span style={{ fontSize: '0.82rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.45 }}>
                          "{spk.talkTitle}"
                        </span>
                      </div>
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

export default SeminarsPage;

