import React from 'react';
import { ArrowLeft, ChevronRight, Sparkles } from 'lucide-react';

export function ResearchTopBar({ data, onBack }) {
  if (!data) return null;

  return (
    <>
      {/* 1. Breadcrumbs Topbar */}
      <div className="research-page-topbar">
        <div className="site-container-wide research-topbar-inner">
          <button type="button" onClick={onBack} className="research-back-btn">
            <ArrowLeft size={16} />
            <span>Back to Homepage</span>
          </button>

          <nav className="research-breadcrumbs" aria-label="Breadcrumb">
            {(data.breadcrumbs || ["Home", "Research", data.title]).map((crumb, idx, arr) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={13} className="crumb-arrow" />}
                <span className={idx === arr.length - 1 ? "crumb-current" : "crumb-item"}>
                  {crumb}
                </span>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* 2. Hero Header with real image background */}
      <section className="research-hero" style={{ background: '#09131f' }}>
        <div className="research-hero-bg">
          <img 
            src={data.heroImage || '/campus-hero.jpg'} 
            alt={data.title}
            onError={(e) => {
              e.target.src = '/campus-hero.jpg';
            }}
          />
        </div>
        <div 
          className="research-hero-gradient-overlay" 
          style={{
            background: `linear-gradient(180deg, rgba(8, 19, 36, 0.72) 0%, rgba(8, 19, 36, 0.94) 100%)`
          }}
        />

        <div className="site-container-wide research-hero-content">
          <div className="research-hero-box">
            <div 
              className="research-cat-badge"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                borderColor: data.accentColor || '#ff5722',
                color: '#ffffff'
              }}
            >
              <span 
                className="badge-dot" 
                style={{ backgroundColor: data.accentColor || '#ff5722' }} 
              />
              <span>{data.category || "IISER Tirupati Research"}</span>
            </div>

            <h1 className="research-hero-title">{data.title}</h1>
            <p className="research-hero-subtitle">{data.subtitle}</p>
            {data.tagline && (
              <div 
                className="research-hero-tagline"
                style={{ borderLeftColor: data.accentColor || '#ff5722' }}
              >
                {data.tagline}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
