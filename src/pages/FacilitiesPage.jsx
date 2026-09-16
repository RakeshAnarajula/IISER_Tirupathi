import React, { useState, useEffect } from 'react';
import { researchPagesData } from '../constants/researchPagesData';
import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchSidebar } from '../components/research/ResearchSidebar';
import '../styles/ResearchPage.scss';
import { 
  CheckCircle2, 
  Calendar, 
  Search 
} from 'lucide-react';

export function FacilitiesPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchFilter, setSearchFilter] = useState('');
  const data = researchPagesData["research-facilities"];
  const accent = data?.accentColor || '#0891b2';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Central Research Facilities | IISER Tirupati";
  }, []);

  if (!data) return null;

  const facilities = data.content?.facilitiesDetailed || [];
  const categories = ['All', ...new Set(facilities.map(f => f.category))];

  const filteredFacilities = facilities.filter(fac => {
    const matchCat = selectedCat === 'All' || fac.category === selectedCat;
    const matchSearch = !searchFilter || 
      fac.name.toLowerCase().includes(searchFilter.toLowerCase()) || 
      fac.description.toLowerCase().includes(searchFilter.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="research-page-wrapper">
      <ResearchHero data={data} />

      <div className="site-container-wide research-body-container">
        <div className="research-body-grid">
          <ResearchSidebar activePath="/research-facilities" />

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

            {/* Filter Bar */}
            <div style={{ background: '#ffffff', padding: '18px 24px', borderRadius: '16px', marginBottom: '28px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCat(cat)}
                    style={{
                      padding: '7px 16px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: selectedCat === cat ? 700 : 500,
                      border: selectedCat === cat ? `1.5px solid ${accent}` : '1px solid #e2e8f0',
                      background: selectedCat === cat ? `${accent}16` : '#ffffff',
                      color: selectedCat === cat ? accent : '#64748b',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', padding: '8px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', minWidth: '220px' }}>
                <Search size={15} style={{ color: '#94a3b8' }} />
                <input 
                  type="text" 
                  placeholder="Search instruments..." 
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.82rem', width: '100%' }}
                />
              </div>
            </div>

            {/* Instruments Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {filteredFacilities.map((fac, idx) => (
                <div 
                  key={idx} 
                  className="facility-detailed-card animate-fade"
                  style={{ 
                    background: '#ffffff', 
                    borderRadius: '16px', 
                    border: '1px solid rgba(0,0,0,0.08)', 
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(240px, 300px) 1fr',
                    gap: '24px'
                  }}
                >
                  <div style={{ position: 'relative', minHeight: '220px', background: '#0f172a' }}>
                    <img 
                      src={fac.image || '/card-facilities.jpg'} 
                      alt={fac.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = '/card-facilities.jpg'; }}
                    />
                    <span 
                      style={{ 
                        position: 'absolute', 
                        top: '12px', 
                        left: '12px', 
                        background: 'rgba(15, 23, 42, 0.85)', 
                        color: '#fff', 
                        padding: '4px 10px', 
                        borderRadius: '20px', 
                        fontSize: '0.72rem', 
                        fontWeight: 600,
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      {fac.category}
                    </span>
                  </div>

                  <div style={{ padding: '24px 24px 24px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ margin: '0 0 10px', fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>
                        {fac.name}
                      </h3>
                      <p style={{ margin: '0 0 16px', fontSize: '0.88rem', lineHeight: 1.65, color: '#475569' }}>
                        {fac.description}
                      </p>

                      {fac.specs && (
                        <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
                          <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b', marginBottom: '8px' }}>
                            Key Specifications
                          </span>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px' }}>
                            {fac.specs.map((spec, sIdx) => (
                              <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#334155' }}>
                                <CheckCircle2 size={13} style={{ color: accent, flexShrink: 0 }} />
                                <span>{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                      <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                        Central Instrumentation Facility (CIF)
                      </span>
                      <a 
                        href="mailto:cif@iisertirupati.ac.in" 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '9px 18px',
                          background: accent,
                          color: '#fff',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          textDecoration: 'none'
                        }}
                      >
                        <Calendar size={13} />
                        <span>Book Instrument Slot</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Access Guidelines Card */}
            <div style={{ marginTop: '36px', padding: '28px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
              <h3 style={{ margin: '0 0 16px', fontSize: '1.2rem', color: '#0f172a', fontWeight: 700 }}>
                Access Guidelines &amp; Analytical Tariffs
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', borderLeft: `4px solid ${accent}` }}>
                  <h4 style={{ margin: '0 0 6px', fontSize: '0.95rem', color: '#0f172a' }}>Internal Users (IISER Tirupati)</h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>
                    All BS-MS, I-PhD, PhD students and faculty can book slots through the internal CIF portal with faculty advisor sign-off.
                  </p>
                </div>
                <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                  <h4 style={{ margin: '0 0 6px', fontSize: '0.95rem', color: '#0f172a' }}>External Academic Institutions</h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>
                    Subsidized academic tariffs apply for universities, colleges, and national laboratories across India. Samples may be submitted by post.
                  </p>
                </div>
                <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #6366f1' }}>
                  <h4 style={{ margin: '0 0 6px', fontSize: '0.95rem', color: '#0f172a' }}>Industry &amp; R&amp;D Centers</h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>
                    Specialized testing, high-throughput characterization, and expert analytical interpretation available for pharmaceutical and materials industries.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default FacilitiesPage;

