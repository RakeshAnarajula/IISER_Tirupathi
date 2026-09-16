import React from 'react';
import styles from '../../styles/Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.heroSection} aria-label="IISER Tirupati Campus Hero">
      {/* Background Campus Photo with Academic Blue Overlay */}
      <div className={styles.bgContainer}>
        <img
          src="/hero_imglogo.jpg"
          alt="IISER Tirupati Modern Permanent Campus at Yerpedu"
          className={styles.campusPhoto}
        />
        <div className={styles.blueOverlay} />
      </div>

      {/* Foreground Content placed directly over the image */}
      <div className={`site-container ${styles.foregroundContent}`}>
        <div className={styles.textBlock}>
          {/* Badge: Institute of National Importance */}
          <div className={styles.importanceBadge}>
            <span className={styles.badgeDot}>●</span>
            <span className={styles.badgeText}>INSTITUTE OF NATIONAL IMPORTANCE</span>
          </div>

          {/* Main Title: Indian Institute of Science Education and Research Tirupati */}
          <h1 className={styles.bannerTitle}>
            Indian Institute of<br />
            Science Education and<br />
            Research Tirupati
          </h1>

          {/* Subtitle: Advancing scientific discovery... */}
          <p className={styles.bannerSubtitle}>
            Advancing scientific discovery through education, research and innovation — from the heart of Andhra Pradesh.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

