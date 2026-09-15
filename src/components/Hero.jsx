import React from 'react';

export function Hero({ onOpenAdmissions, onOpenCampusTour } = {}) {
  return (
    <section className="hero-overlay-section" aria-label="IISER Tirupati Campus Hero">
      {/* Background Campus Photo with Dark Overlay */}
      <div className="hero-bg-container">
        <img
          src="/hero_imglogo.jpg"
          alt="IISER Tirupati Modern Permanent Campus at Yerpedu"
          className="hero-campus-photo"
        />
        <div className="hero-dark-overlay" />
      </div>

      {/* Foreground Content placed directly over the image */}
      <div className="site-container hero-foreground-content">
        <div className="hero-text-block">
          {/* Badge: Institute of National Importance */}
          <div className="hero-importance-badge">
            <span className="badge-dot">●</span>
            <span className="badge-text">INSTITUTE OF NATIONAL IMPORTANCE</span>
          </div>

          {/* Main Title: Indian Institute of Science Education and Research Tirupati */}
          <h1 className="hero-banner-title">
            Indian Institute of<br />
            Science Education and<br />
            Research Tirupati
          </h1>

          {/* Subtitle: Advancing scientific discovery... */}
          <p className="hero-banner-subtitle">
            Advancing scientific discovery through education, research and innovation — from the heart of Andhra Pradesh.
          </p>
        </div>
      </div>

      {/* Scoped Styling matching user's uploaded screenshot */}
      <style>{`
        .hero-overlay-section {
          position: relative;
          width: 100%;
          min-height: 480px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #0b1523;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-campus-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
          display: block;
        }

        .hero-dark-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(18, 30, 49, 0.74) 0%, 
            rgba(13, 23, 38, 0.82) 100%
          );
        }

        .hero-foreground-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 60px 24px;
        }

        .hero-text-block {
          max-width: 760px;
        }

        .hero-importance-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 9999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.55);
          margin-bottom: 22px;
        }

        .badge-dot {
          color: #F59E0B;
          font-size: 0.68rem;
          line-height: 1;
        }

        .badge-text {
          color: #FBBF24;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hero-banner-title {
          font-family: Georgia, "Times New Roman", Cambria, serif;
          font-size: 3.4rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.16;
          letter-spacing: -0.015em;
          margin: 0 0 18px 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);
        }

        .hero-banner-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 1.15rem;
          color: #E2E8F0;
          line-height: 1.6;
          margin: 0;
          max-width: 620px;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 1024px) {
          .hero-overlay-section {
            min-height: 420px;
          }
          .hero-banner-title {
            font-size: 2.7rem;
          }
          .hero-banner-subtitle {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 640px) {
          .hero-overlay-section {
            min-height: 360px;
          }
          .hero-foreground-content {
            padding: 40px 16px;
          }
          .hero-banner-title {
            font-size: 2.1rem;
            line-height: 1.22;
          }
          .hero-banner-subtitle {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
