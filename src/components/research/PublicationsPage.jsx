import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  Search, 
  BookOpen, 
  Download, 
  Award, 
  CheckCircle2, 
  Calendar,
  Share2
} from 'lucide-react';

export function PublicationsPage({ data, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const accent = data.accentColor || '#2563eb';

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
    <div className="research-detail-page publications-page-theme">
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

      {/* 3. Search & Year Filter Controls */}
      <div style={{ background: '#fff', padding: '18px 24px', borderRadius: '14px', marginBottom: '24px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {years.map(yr => (
            <button
              key={yr}
              type="button"
              onClick={() => setSelectedYear(yr)}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: selectedYear === yr ? 700 : 500,
                border: selectedYear === yr ? `1.5px solid ${accent}` : '1px solid #e2e8f0',
                background: selectedYear === yr ? `${accent}14` : '#fff',
                color: selectedYear === yr ? accent : '#64748b',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {yr}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', padding: '8px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', minWidth: '240px' }}>
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

      {/* 4. Publications List */}
      <div className="research-pubs-list">
        {filteredPapers.map((paper, idx) => (
          <div 
            key={idx} 
            className="research-pub-card animate-fade" 
            style={{ borderLeft: `4px solid ${accent}`, background: '#fff', borderRadius: '12px', padding: '20px', marginBottom: '14px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}
          >
            <div className="research-pub-header" style={{ marginBottom: '8px' }}>
              <h4 className="research-pub-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px', lineHeight: 1.45 }}>
                {paper.title}
              </h4>
              <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', fontStyle: 'italic' }}>
                {paper.authors}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: accent }}>
                  {paper.journal}
                </span>
                <span style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                  {paper.year}
                </span>
                <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                  Open Access
                </span>
              </div>

              {paper.doi && (
                <a 
                  href={`https://doi.org/${paper.doi}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.76rem', color: accent, textDecoration: 'none', fontWeight: 600 }}
                >
                  <span>DOI: {paper.doi}</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}

        {filteredPapers.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px', background: '#fff', borderRadius: '14px' }}>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>No publications found matching your filter criteria.</p>
          </div>
        )}
      </div>

      {/* 5. Institutional Repository Banner */}
      <div style={{ marginTop: '28px', padding: '24px', borderRadius: '14px', background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93c5fd', fontWeight: 700 }}>Institutional Repository</span>
          <h4 style={{ margin: '4px 0 6px', fontSize: '1.2rem', color: '#fff' }}>IISER Tirupati E-Prints &amp; Open Access Archive</h4>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', lineHeight: 1.6 }}>
            Full-text access to thousands of pre-prints, post-prints, theses, and dissertation datasets authored by IISER Tirupati researchers.
          </p>
        </div>
        <a 
          href="https://eprints.iisertirupati.ac.in" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ background: '#60a5fa', color: '#1e3a8a', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <span>Browse E-Prints</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
