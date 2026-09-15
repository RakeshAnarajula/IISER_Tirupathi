import React from 'react';
import { 
  Quote, 
  Award, 
  Landmark, 
  FileText, 
  ExternalLink,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export function LeadershipSection({ onSelectPage }) {
  return (
    <section id="about" className="academic-section bg-peach-tint" aria-label="Director's Vision and Governance">
      <div className="site-container">
        <div className="leadership-card">
          <div className="leadership-content">
            <div className="leadership-tag-row">
              <span className="section-tag">
                <Landmark size={14} />
                Leadership &amp; Institutional Vision
              </span>
              <span className="inst-stamp">Ministry of Education, GoI</span>
            </div>

            <h2 className="leadership-headline">
              "Creating Infinite Possibilities Through Science &amp; Human Curiosity"
            </h2>

            <div className="director-quote-box">
              <Quote size={32} className="quote-mark" />
              <p className="director-quote-text">
                At IISER Tirupati, we have envisioned an academic environment where teaching and research are not separate endeavors, but an indivisible continuum. Our students participate in real discoveries at the forefront of human knowledge, working alongside world-leading faculty in state-of-the-art facilities at our permanent Yerpedu campus.
              </p>
            </div>

            <div className="director-profile-row">
              <div className="director-avatar-box">
                <div className="director-avatar-fallback">
                  <span>SB</span>
                </div>
              </div>
              <div className="director-meta">
                <h3 className="director-name">Prof. Santanu Bhattacharya</h3>
                <span className="director-role">Director, IISER Tirupati</span>
                <span className="director-fellowships">
                  Fellow of the Indian National Science Academy (FNA) • Shanti Swarup Bhatnagar Awardee
                </span>
              </div>
            </div>

            <div className="governance-links-row">
              <button 
                type="button" 
                onClick={() => onSelectPage && onSelectPage('board-of-governors')} 
                className="gov-link"
              >
                <CheckCircle2 size={14} />
                <span>Board of Governors</span>
              </button>
              <button 
                type="button" 
                onClick={() => onSelectPage && onSelectPage('senate')} 
                className="gov-link"
              >
                <CheckCircle2 size={14} />
                <span>Academic Senate</span>
              </button>
              <button 
                type="button" 
                onClick={() => onSelectPage && onSelectPage('annual-reports')} 
                className="gov-link"
              >
                <CheckCircle2 size={14} />
                <span>Annual Reports &amp; NIRF</span>
              </button>
              <button 
                type="button" 
                onClick={() => onSelectPage && onSelectPage('internal-committees')} 
                className="gov-link"
              >
                <CheckCircle2 size={14} />
                <span>Internal Committees</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .leadership-card {
          background-color: var(--color-white);
          border: 1.5px solid var(--color-peach-accent);
          border-radius: var(--radius-xl);
          padding: 50px 54px;
          box-shadow: 0 12px 36px rgba(0, 59, 115, 0.06);
          position: relative;
        }

        .leadership-content {
          max-width: 960px;
          margin: 0 auto;
        }

        .leadership-tag-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .inst-stamp {
          font-family: var(--font-accent);
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          background-color: var(--color-blue-light);
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          letter-spacing: 0.04em;
        }

        .leadership-headline {
          font-family: var(--font-serif);
          font-size: 2.35rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.25;
          margin-bottom: 26px;
        }

        .director-quote-box {
          display: flex;
          gap: 18px;
          background-color: var(--color-peach-light);
          border-left: 4px solid var(--color-orange-primary);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          padding: 24px 28px;
          margin-bottom: 30px;
        }

        .quote-mark {
          color: var(--color-orange-primary);
          flex-shrink: 0;
          opacity: 0.85;
        }

        .director-quote-text {
          font-size: 1.08rem;
          font-style: italic;
          color: var(--color-text-primary);
          line-height: 1.7;
        }

        .director-profile-row {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--color-border-light);
          margin-bottom: 24px;
        }

        .director-avatar-box {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 2px solid var(--color-orange-primary);
          padding: 2px;
          flex-shrink: 0;
        }

        .director-avatar-fallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-blue-primary) 0%, var(--color-blue-bright) 100%);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
        }

        .director-meta {
          display: flex;
          flex-direction: column;
        }

        .director-name {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.2;
        }

        .director-role {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--color-orange-dark);
          margin-top: 2px;
        }

        .director-fellowships {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          margin-top: 3px;
        }

        .governance-links-row {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        .gov-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-blue-primary);
          transition: color var(--transition-fast);
        }

        .gov-link:hover {
          color: var(--color-orange-primary);
        }

        @media (max-width: 768px) {
          .leadership-card {
            padding: 28px 20px;
          }
          .leadership-headline {
            font-size: 1.75rem;
          }
          .director-quote-box {
            padding: 16px;
            flex-direction: column;
          }
          .governance-links-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
