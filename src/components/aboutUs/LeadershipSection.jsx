import React from 'react';
import { 
  Quote, 
  Landmark, 
  CheckCircle2
} from 'lucide-react';
import styles from '../../styles/LeadershipSection.module.scss';

export function LeadershipSection({ onSelectPage }) {
  return (
    <section id="about" className={styles.leadershipSection} aria-label="Director's Vision and Governance">
      <div className="site-container">
        <div className={styles.leadershipCard}>
          <div className={styles.leadershipContent}>
            <div className={styles.leadershipTagRow}>
              <span className={styles.sectionTag}>
                <Landmark size={14} />
                Leadership &amp; Institutional Vision
              </span>
              <span className={styles.instStamp}>Ministry of Education, GoI</span>
            </div>

            <h2 className={styles.leadershipHeadline}>
              "Creating Infinite Possibilities Through Science &amp; Human Curiosity"
            </h2>

            <div className={styles.directorQuoteBox}>
              <Quote size={32} className={styles.quoteMark} />
              <p className={styles.directorQuoteText}>
                At IISER Tirupati, we have envisioned an academic environment where teaching and research are not separate endeavors, but an indivisible continuum. Our students participate in real discoveries at the forefront of human knowledge, working alongside world-leading faculty in state-of-the-art facilities at our permanent Yerpedu campus.
              </p>
            </div>

            <div className={styles.directorProfileRow}>
              <div className={styles.directorAvatarBox}>
                <div className={styles.directorAvatarFallback}>
                  <span>SB</span>
                </div>
              </div>
              <div className={styles.directorMeta}>
                <h3 className={styles.directorName}>Prof. Santanu Bhattacharya</h3>
                <span className={styles.directorRole}>Director, IISER Tirupati</span>
                <span className={styles.directorFellowships}>
                  Fellow of the Indian National Science Academy (FNA) • Shanti Swarup Bhatnagar Awardee
                </span>
              </div>
            </div>

            <div className={styles.governanceLinksRow}>
              <button 
                type="button" 
                onClick={() => onSelectPage && onSelectPage('board-of-governors')} 
                className={styles.govLink}
              >
                <CheckCircle2 size={14} />
                <span>Board of Governors</span>
              </button>
              <button 
                type="button" 
                onClick={() => onSelectPage && onSelectPage('senate')} 
                className={styles.govLink}
              >
                <CheckCircle2 size={14} />
                <span>Academic Senate</span>
              </button>
              <button 
                type="button" 
                onClick={() => onSelectPage && onSelectPage('annual-reports')} 
                className={styles.govLink}
              >
                <CheckCircle2 size={14} />
                <span>Annual Reports &amp; NIRF</span>
              </button>
              <button 
                type="button" 
                onClick={() => onSelectPage && onSelectPage('internal-committees')} 
                className={styles.govLink}
              >
                <CheckCircle2 size={14} />
                <span>Internal Committees</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;

