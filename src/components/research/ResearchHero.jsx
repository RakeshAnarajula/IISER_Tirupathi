import React from 'react';
import styles from '../../styles/ResearchHero.module.scss';

export function ResearchHero({ data }) {
  if (!data) return null;

  const accent = data.accentColor || '#FF5722';

  return (
    <section className={styles.researchHero} aria-label={data.title}>
      {/* Background image — High clarity, bright and vibrant */}
      <div className={styles.heroBg}>
        <img 
          src={data.heroImage || '/campus-hero.jpg'} 
          alt={data.title}
          onError={(e) => {
            e.target.src = '/campus-hero.jpg';
          }}
        />
      </div>

      {/* Gentle gradient overlay to keep text legible without dimming the photo */}
      <div className={styles.gradientOverlay} />

      {/* Content Container */}
      <div className={`site-container-wide ${styles.heroContent}`}>
        <div className={styles.heroBox}>
          <div 
            className={styles.catBadge}
            style={{ borderColor: accent }}
          >
            <span 
              className={styles.badgeDot} 
              style={{ backgroundColor: accent, color: accent, boxShadow: `0 0 8px ${accent}` }} 
            />
            <span>{data.category || "IISER Tirupati"}</span>
          </div>

          <h1 className={styles.heroTitle}>{data.title}</h1>
          <p className={styles.heroSubtitle}>{data.subtitle}</p>
          
          {data.tagline && (
            <div 
              className={styles.heroTagline}
              style={{ borderLeftColor: accent }}
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

