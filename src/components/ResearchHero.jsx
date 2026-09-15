import React from 'react';

export function ResearchHero({ data }) {
  if (!data) return null;

  const accent = data.accentColor || '#ff5722';

  return (
    <section className="research-hero" aria-label={data.title}>
      {/* Background image — High clarity, bright and vibrant */}
      <div className="research-hero-bg">
        <img 
          src={data.heroImage || '/campus-hero.jpg'} 
          alt={data.title}
          onError={(e) => {
            e.target.src = '/campus-hero.jpg';
          }}
        />
      </div>

      {/* Gentle gradient overlay to keep text legible without dimming the photo */}
      <div className="research-hero-gradient-overlay" />

      {/* Content Container */}
      <div className="site-container-wide research-hero-content">
        <div className="research-hero-box">
          <div 
            className="research-cat-badge"
            style={{ borderColor: accent }}
          >
            <span 
              className="badge-dot" 
              style={{ backgroundColor: accent, color: accent }} 
            />
            <span>{data.category || "IISER Tirupati"}</span>
          </div>

          <h1 className="research-hero-title">{data.title}</h1>
          <p className="research-hero-subtitle">{data.subtitle}</p>
          
          {data.tagline && (
            <div 
              className="research-hero-tagline"
              style={{ borderLeftColor: accent, color: '#fef08a' }}
            >
              {data.tagline}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ResearchHero;
