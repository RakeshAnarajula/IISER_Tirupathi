import React, { useState } from 'react';
import { announcements } from '../data/mockData';
import {
  Building2,
  Bell,
  ArrowRight,
  Calendar,
  Tag,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  FileText,
  X,
  Share2
} from 'lucide-react';

export function AboutAndAnnouncementsSection({ onSelectPage }) {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  return (
    <section id="about-announcements" className="academic-section bg-white" aria-label="About IISER Tirupati and Latest Announcements">
      <div className="site-container">
        <div className="about-announcements-grid">

          {/* Left Column: About IISER Tirupati */}
          <div className="about-col-card">
            <div className="col-header">
              <h2 className="col-heading">About IISER Tirupati</h2>
            </div>

            <div className="about-body-text">
              <p className="lead-para">
                The Government of India, through the Ministry of Education, has established seven Indian Institutes of Science Education and Research (IISERs). These institutes are located in Berhampur, Bhopal, Kolkata, Mohali, Pune, Thiruvananthapuram and Tirupati.
              </p>
              <p className="secondary-para">
                The IISERs represent a unique initiative in India where teaching and education are integrated with state-of-the-art research, nurturing both curiosity and creativity in an intellectually vibrant atmosphere of research. Each IISER is an autonomous institution awarding its own Bachelors, Masters and Doctoral Degrees.
              </p>
            </div>

            <div className="about-action-footer">
              <button
                type="button"
                onClick={() => onSelectPage && onSelectPage('the-institute')}
                className="know-more-btn"
                aria-label="Know more about IISER Tirupati"
              >
                <span>Know More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Announcements */}
          <div className="announcements-col-card">
            <div className="col-header">
              <h2 className="col-heading">Announcements</h2>
              <p className="announcements-subhead">
                Find out what's going on &amp; stay up-to-date.
              </p>
            </div>

            <div className="announcements-list">
              {announcements.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="announcement-item-card"
                  onClick={() => setSelectedAnnouncement(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedAnnouncement(item)}
                >
                  <div className="item-meta-bar">
                    <span className="item-date">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                    <span className="item-category-pill">{item.category}</span>
                  </div>
                  <h3 className="item-title">
                    {item.title}
                  </h3>
                  <div className="item-action-row">
                    <span className="item-view-text">Read Circular</span>
                    <ChevronRight size={14} className="item-arrow" />
                  </div>
                </div>
              ))}
            </div>

            <div className="announcements-footer">
              <a
                href="#news-events"
                className="view-more-announcements-btn"
                aria-label="View all announcements and circulars"
              >
                <span>View More</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* In-App Announcement Reading Modal Dialog */}
      {selectedAnnouncement && (
        <div className="announcement-modal-backdrop" onClick={() => setSelectedAnnouncement(null)}>
          <div className="announcement-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top-bar">
              <div className="modal-tag-group">
                <span className="modal-type-badge">Official Circular</span>
                <span className="modal-cat-badge">{selectedAnnouncement.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="modal-close-btn"
                aria-label="Close circular"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body-scroll">
              <div className="modal-meta-row">
                <span className="modal-date">
                  <Calendar size={13} />
                  Published on: {selectedAnnouncement.date}
                </span>
                <span className="modal-ref">Ref: IISERT/ADMIN/2026/0{selectedAnnouncement.id}</span>
              </div>

              <h2 className="modal-circular-title">{selectedAnnouncement.title}</h2>

              <div className="modal-official-banner">
                <ShieldCheck size={18} className="shield-ic" />
                <span>Issued under the authority of Office of the Registrar, IISER Tirupati.</span>
              </div>

              <div className="modal-circular-content">
                <p>
                  This official notification is published for the immediate attention of students, faculty, researchers, and prospective candidates. The complete schedule, eligibility guidelines, and procedural circulars have been approved by the Institute Competent Authority.
                </p>
                <p>
                  All concerned individuals are requested to take note of the deadlines and submit queries or applications strictly through the institutional academic portals.
                </p>
              </div>
            </div>

            <div className="modal-footer-bar">
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="btn-secondary"
              >
                Close Notice
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Circular link copied to clipboard!');
                }}
                className="btn-peach"
              >
                <Share2 size={15} />
                <span>Share Notice</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scoped Styling for About & Announcements */}
      <style>{`
        .about-announcements-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 16px;
          align-items: stretch;
        }

        .about-col-card, .announcements-col-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px rgba(0, 59, 115, 0.04);
          transition: all var(--transition-base);
        }

        .about-col-card {
          border-left: 4px solid var(--color-orange-primary);
        }

        .announcements-col-card {
          border-left: 4px solid var(--color-blue-primary);
          background-color: var(--color-canvas);
        }

        .col-heading {
          font-family: var(--font-serif);
          font-size: 1.95rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-top: 4px;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .announcements-subhead {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-bottom: 12px;
        }

        .about-body-text {
          color: var(--color-text-primary);
          font-size: 0.98rem;
          line-height: 1.6;
          margin: 10px 0 16px;
        }

        .lead-para {
          margin-bottom: 10px;
          color: #1A2B49;
        }

        .secondary-para {
          color: var(--color-text-secondary);
          font-size: 0.92rem;
        }

        .about-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 16px;
        }

        .about-stat-pill {
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-md);
          padding: 8px 10px;
          text-align: center;
        }

        .stat-num {
          display: block;
          font-family: var(--font-accent);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          line-height: 1.2;
        }

        .stat-lbl {
          font-size: 0.72rem;
          color: var(--color-text-secondary);
          font-weight: 600;
        }

        .about-action-footer {
          margin-top: auto;
          padding-top: 6px;
          display: flex;
          justify-content: flex-end;
        }

        .know-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #004D99;
          font-weight: 600;
          font-size: 0.92rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }

        .know-more-btn:hover {
          color: var(--color-orange-primary);
          transform: translateX(4px);
        }

        /* Announcements List */
        .announcements-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .announcement-item-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .announcement-item-card:hover {
          border-color: #BED6F5;
          transform: translateX(3px);
          box-shadow: 0 4px 12px rgba(0, 59, 115, 0.06);
        }

        .item-meta-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .item-date {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .item-category-pill {
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          text-transform: uppercase;
        }

        .item-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-blue-primary);
          line-height: 1.45;
          margin-bottom: 6px;
        }

        .item-action-row {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--color-orange-primary);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .item-arrow {
          transition: transform var(--transition-fast);
        }

        .announcement-item-card:hover .item-arrow {
          transform: translateX(3px);
        }

        .announcements-footer {
          margin-top: 18px;
          padding-top: 12px;
          border-top: 1px solid var(--color-border-light);
          display: flex;
          justify-content: flex-end;
        }

        .view-more-announcements-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-blue-bright);
          transition: color var(--transition-fast);
        }

        .view-more-announcements-btn:hover {
          color: var(--color-orange-primary);
        }

        /* Modal Dialog */
        .announcement-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 38, 77, 0.65);
          backdrop-filter: blur(6px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .announcement-modal-card {
          width: 100%;
          max-width: 680px;
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--color-peach-accent);
          box-shadow: 0 20px 50px rgba(0, 38, 77, 0.25);
          display: flex;
          flex-direction: column;
          max-height: 90vh;
          animation: slideDown 0.22s ease-out;
        }

        .modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: linear-gradient(135deg, var(--color-blue-primary) 0%, var(--color-blue-bright) 100%);
          color: var(--color-white);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .modal-tag-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-type-badge {
          background-color: var(--color-orange-primary);
          color: var(--color-white);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .modal-cat-badge {
          background-color: rgba(255, 255, 255, 0.2);
          color: var(--color-white);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          font-size: 0.74rem;
          font-weight: 600;
        }

        .modal-close-btn {
          color: var(--color-white);
          padding: 4px;
          border-radius: 50%;
        }

        .modal-close-btn:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }

        .modal-body-scroll {
          padding: 24px;
          overflow-y: auto;
          color: var(--color-text-primary);
        }

        .modal-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }

        .modal-date {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .modal-circular-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.35;
          margin-bottom: 16px;
        }

        .modal-official-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-blue-light);
          border: 1px solid #BED6F5;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.84rem;
          color: var(--color-blue-primary);
          font-weight: 500;
          margin-bottom: 20px;
        }

        .modal-circular-content {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-text-secondary);
        }

        .modal-circular-content p {
          margin-bottom: 12px;
        }

        .modal-footer-bar {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding: 16px 24px;
          background-color: var(--color-canvas);
          border-top: 1px solid var(--color-border-light);
          border-radius: 0 0 var(--radius-lg) var(--radius-lg);
        }

        @media (max-width: 992px) {
          .about-announcements-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-col-card, .announcements-col-card {
            padding: 28px 20px;
          }
          .col-heading {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
