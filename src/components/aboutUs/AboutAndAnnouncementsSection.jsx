import React, { useState } from 'react';
import { announcements } from '../../constants/mockData';
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  X
} from 'lucide-react';
import styles from '../../styles/AboutAndAnnouncementsSection.module.scss';

export function AboutAndAnnouncementsSection({ onSelectPage }) {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  return (
    <section id="about-announcements" className={styles.section} aria-label="About IISER Tirupati and Latest Announcements">
      <div className="site-container">
        <div className={styles.grid}>

          {/* Left Column: About IISER Tirupati */}
          <div className={styles.aboutCard}>
            <div className={styles.colHeader}>
              <h2 className={styles.colHeading}>About IISER Tirupati</h2>
            </div>

            <div className={styles.aboutBodyText}>
              <p className={styles.leadPara}>
                The Government of India, through the Ministry of Education, has established seven Indian Institutes of Science Education and Research (IISERs). These institutes are located in Berhampur, Bhopal, Kolkata, Mohali, Pune, Thiruvananthapuram and Tirupati.
              </p>
              <p className={styles.secondaryPara}>
                The IISERs represent a unique initiative in India where teaching and education are integrated with state-of-the-art research, nurturing both curiosity and creativity in an intellectually vibrant atmosphere of research. Each IISER is an autonomous institution awarding its own Bachelors, Masters and Doctoral Degrees.
              </p>
            </div>

            <div className={styles.aboutActionFooter}>
              <button
                type="button"
                onClick={() => onSelectPage && onSelectPage('the-institute')}
                className={styles.knowMoreBtn}
                aria-label="Know more about IISER Tirupati"
              >
                <span>Know More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Announcements */}
          <div className={styles.announcementsCard}>
            <div className={styles.colHeader}>
              <h2 className={styles.colHeading}>Announcements</h2>
              <p className={styles.announcementsSubhead}>
                Find out what's going on &amp; stay up-to-date.
              </p>
            </div>

            <div className={styles.announcementsList}>
              {announcements.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className={styles.announcementItem}
                  onClick={() => setSelectedAnnouncement(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedAnnouncement(item)}
                >
                  <div className={styles.itemMetaBar}>
                    <span className={styles.itemDate}>
                      <Calendar size={12} />
                      {item.date}
                    </span>
                    <span className={styles.itemCategoryPill}>{item.category}</span>
                  </div>
                  <h3 className={styles.itemTitle}>
                    {item.title}
                  </h3>
                  <div className={styles.itemActionRow}>
                    <span>Read Circular</span>
                    <ChevronRight size={14} className={styles.itemArrow} />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.announcementsFooter}>
              <a
                href="#news-events"
                className={styles.viewMoreBtn}
                aria-label="View all announcements and circulars"
              >
                <span>View More</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Announcement Detail Modal */}
      {selectedAnnouncement && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedAnnouncement(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className={styles.modalCloseBtn}
              onClick={() => setSelectedAnnouncement(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            <div className={styles.modalHeader}>
              <span className={styles.modalCategory}>{selectedAnnouncement.category}</span>
              <h3 className={styles.modalTitle}>{selectedAnnouncement.title}</h3>
            </div>
            <div className={styles.modalDate}>
              Published on: {selectedAnnouncement.date}
            </div>
            <div className={styles.modalBody}>
              {selectedAnnouncement.details || selectedAnnouncement.content || "For comprehensive guidelines, official circular notes, and application procedures, please refer to the academic office bulletin."}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutAndAnnouncementsSection;

