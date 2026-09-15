import React, { useState, useEffect } from 'react';
import { researchPagesData } from '../data/researchPagesData';
import { ResearchHero } from '../components/ResearchHero';
import { ResearchSidebar } from '../components/ResearchSidebar';
import '../styles/ResearchPage.css';
import { 
  FileText, 
  ExternalLink, 
  Search 
} from 'lucide-react';

export function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const data = researchPagesData["publications"];
  const accent = data?.accentColor || '#2563eb';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Publications | IISER Tirupati";
  }, []);

  if (!data) return null;

  const papers = data.content?.recentPapers || [];
  const years = ['All', ...new Set(papers.map(p => String(p.year)))];

  const filteredPapers = papers.filter(p => {
    const matchYear = selectedYear === 'All' || String(p.year) === selectedYear;
    const q = searchQuery.toLowerCase();
    const matchQuery = !q || 
      p.title.toLowerCase().includes(q) || 
      p.authors.toLowerCase().includes(q) || 
      p.journal.toLowerCase().includes(q);
    return matchYear && matchQuery;
  });

  return (
    <div className="research-page-wrapper">
      <ResearchHero data={data} />

      <div className="site-container-wide research-body-container">
        <div className="research-body-grid">
          <ResearchSidebar activePath="/publications" />

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

            {/* Filter & Search Bar */}
            <div style={{ background: '#ffffff', padding: '18px 24px', borderRadius: '16px', marginBottom: '24px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {years.map(yr => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setSelectedYear(yr)}
                    style={{
                      padding: '7px 18px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: selectedYear === yr ? 700 : 500,
                      border: selectedYear === yr ? `1.5px solid ${accent}` : '1px solid #e2e8f0',
                      background: selectedYear === yr ? `${accent}16` : '#ffffff',
                      color: selectedYear === yr ? accent : '#64748b',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {yr}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', padding: '8px 14px', borderRadius: '10px', border: '1px solid #e2e8f0', minWidth: '240px' }}>
                <Search size={15} style={{ color: '#94a3b8' }} />
                <input 
                  type="text" 
                  placeholder="Search title, author, journal..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.82rem', width: '100%' }}
                />
              </div>
            </div>

            {/* Papers List */}
            <div className="research-pubs-list">
              {filteredPapers.map((paper, idx) => (
                <div 
                  key={idx} 
                  className="research-pub-card animate-fade" 
                  style={{ borderLeft: `4px solid ${accent}`, background: '#ffffff', borderRadius: '14px', padding: '22px', marginBottom: '14px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}
                >
                  <div className="research-pub-header" style={{ marginBottom: '8px' }}>
                    <h4 className="research-pub-title" style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px', lineHeight: 1.45 }}>
                      {paper.title}
                    </h4>
                    <span style={{ fontSize: '0.84rem', color: '#64748b', display: 'block', fontStyle: 'italic' }}>
                      {paper.authors}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: accent }}>
                        {paper.journal}
                      </span>
                      <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                        {paper.year}
                      </span>
                      <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '6px', fontWeight: 700 }}>
                        Open Access
                      </span>
                    </div>

                    {paper.doi && (
                      <a 
                        href={`https://doi.org/${paper.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: accent, textDecoration: 'none', fontWeight: 700 }}
                      >
                        <span>DOI: {paper.doi}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* E-Prints Banner */}
            <div style={{ marginTop: '32px', padding: '26px', borderRadius: '18px', background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', boxShadow: '0 10px 30px rgba(30,58,138,0.2)' }}>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93c5fd', fontWeight: 800 }}>Institutional Repository</span>
                <h4 style={{ margin: '6px 0 8px', fontSize: '1.25rem', color: '#fff' }}>IISER Tirupati E-Prints &amp; Open Access Archive</h4>
                <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
                  Full-text access to thousands of pre-prints, post-prints, theses, and dissertation datasets authored by IISER Tirupati researchers.
                </p>
              </div>
              <a 
                href="https://eprints.iisertirupati.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ background: '#60a5fa', color: '#1e3a8a', padding: '12px 22px', borderRadius: '10px', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Browse E-Prints</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PublicationsPage;
