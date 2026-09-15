import React, { useState } from 'react';
import { newsItems, upcomingEvents } from '../data/mockData';
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Share2,
  X,
  ChevronRight,
  FileText,
  ShieldCheck,
  Sparkles,
  Users,
  GraduationCap
} from 'lucide-react';

export function NewsEventsSection() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div id="news-events" className="news-and-events-container" aria-label="Campus News and Events">

      {/* 1. NEWS SECTION (Bright White Background) */}
      <section className="academic-section bg-white">
        <div className="site-container">
          <div className="section-head-center">
            <h2 className="section-title">News</h2>
            <p className="section-subtitle-center">What's happening at IISER Tirupati</p>
          </div>

          <div className="grid-3 news-events-cards-grid">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="stanford-media-card"
                onClick={() => setSelectedItem({ ...item, type: 'News' })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedItem({ ...item, type: 'News' })}
              >
                {/* Card Tag Ribbon Banner */}
                <div className="card-ribbon-bar">
                  <span className="ribbon-tags">
                    {item.tags ? item.tags.join(', ') : item.category}
                  </span>
                </div>

                {/* Photographic Related Image Preview */}
                <div className="card-media-thumbnail-box">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="card-photo-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/convocation-yerpedu.jpg';
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="media-card-body">
                  <h3 className="media-card-title">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="section-bottom-action">
            <button
              type="button"
              onClick={() => alert('Viewing all news archives.')}
              className="view-all-link-btn"
            >
              <span>View All</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. EVENTS SECTION */}
      <section className="academic-section bg-white" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="site-container">
          <div className="section-head-center">
            <h2 className="section-title">Events</h2>
            <p className="section-subtitle-center">What's happening at IISER Tirupati</p>
          </div>

          <div className="grid-3 news-events-cards-grid">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="stanford-media-card"
                onClick={() => setSelectedItem({ ...event, type: 'Event' })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedItem({ ...event, type: 'Event' })}
              >
                {/* Card Tag Ribbon Banner */}
                <div className="card-ribbon-bar">
                  <span className="ribbon-tags">
                    {event.tags ? event.tags.join(', ') : event.category}
                  </span>
                </div>

                {/* Photographic Related Image Preview */}
                <div className="card-media-thumbnail-box">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="card-photo-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/convocation-yerpedu.jpg';
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="media-card-body">
                  <h3 className="media-card-title">{event.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="section-bottom-action">
            <button
              type="button"
              onClick={() => alert('Viewing all upcoming campus colloquia and academic schedules.')}
              className="view-all-link-btn"
            >
              <span>View All</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* In-App Interactive Reading Modal Dialog */}
      {selectedItem && (
        <div className="media-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="media-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="media-modal-header" style={{ backgroundColor: selectedItem.color || 'var(--color-blue-primary)' }}>
              <div>
                <span className="modal-tag-type">{selectedItem.type || 'Bulletin'}</span>
                <h3 className="modal-item-title">{selectedItem.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="modal-close-icon-btn"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="media-modal-body">
              <div className="modal-info-bar">
                <span className="modal-info-item">
                  <Calendar size={14} />
                  {selectedItem.date}
                </span>
                {selectedItem.time && (
                  <span className="modal-info-item">
                    <Clock size={14} />
                    {selectedItem.time}
                  </span>
                )}
                {selectedItem.venue && (
                  <span className="modal-info-item">
                    <MapPin size={14} />
                    {selectedItem.venue}
                  </span>
                )}
              </div>

              {selectedItem.speaker && (
                <div className="speaker-highlight-box">
                  <span className="speaker-lbl">Distinguished Speaker / Chair:</span>
                  <span className="speaker-val">{selectedItem.speaker}</span>
                </div>
              )}

              <div className="modal-summary-content">
                <p>
                  {selectedItem.summary || "Official circular and bulletin published by the Academic Affairs Section and Public Relations Cell, IISER Tirupati. Open to registered researchers, scholars, students, and invited institutional guests."}
                </p>
                <p>
                  For registration inquiries, abstract submissions, or venue reservations, please connect with the organizing secretariat through the institutional directory or helpdesk.
                </p>
              </div>

              <div className="modal-alert-notice">
                <ShieldCheck size={18} className="notice-icon" />
                <span>Verified Official Notice • Permanent Campus, Yerpedu Mandal, Tirupati – 517619</span>
              </div>
            </div>

            <div className="media-modal-footer">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="btn-secondary"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Event/News link copied to clipboard!');
                }}
                className="btn-primary"
              >
                <Share2 size={15} />
                <span>Share Update</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scoped Styling for News and Events */}
      <style>{`
        .section-head-center {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-subtitle-center {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          margin-top: 6px;
        }

        .news-events-cards-grid {
          gap: 26px;
        }

        .stanford-media-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 59, 115, 0.05);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .stanford-media-card:hover {
          border-color: #BED6F5;
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0, 59, 115, 0.12);
        }

        .card-ribbon-bar {
          background-color: #1E70BF;
          padding: 8px 16px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .ribbon-tags {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-media-thumbnail-box {
          position: relative;
          height: 195px;
          overflow: hidden;
          background-color: #EEF2F6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stanford-media-card:hover .card-photo-img {
          transform: scale(1.05);
        }

        .media-card-body {
          padding: 16px 18px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background-color: #FFFFFF;
        }

        .media-card-title {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.45;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color var(--transition-fast);
        }

        .stanford-media-card:hover .media-card-title {
          color: #1E70BF;
        }


        .section-bottom-action {
          margin-top: 36px;
          display: flex;
          justify-content: flex-end;
        }

        .view-all-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-blue-bright);
          transition: all var(--transition-fast);
        }

        .view-all-link-btn:hover {
          color: var(--color-orange-primary);
          transform: translateX(3px);
        }

        /* Modal Dialog */
        .media-modal-backdrop {
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

        .media-modal-card {
          width: 100%;
          max-width: 680px;
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--color-peach-accent);
          box-shadow: 0 24px 60px rgba(0, 38, 77, 0.25);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 85vh;
          animation: slideDown 0.22s ease-out;
        }

        .media-modal-header {
          padding: 22px 28px;
          color: #FFFFFF;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
        }

        .modal-tag-type {
          display: inline-block;
          background-color: rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          margin-bottom: 6px;
        }

        .modal-item-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .modal-close-icon-btn {
          color: #FFFFFF;
          padding: 6px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
        }

        .modal-close-icon-btn:hover {
          background-color: rgba(255, 255, 255, 0.25);
        }

        .media-modal-body {
          padding: 26px 28px;
          overflow-y: auto;
        }

        .modal-info-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--color-border-light);
        }

        .modal-info-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          color: var(--color-text-secondary);
          font-weight: 600;
        }

        .speaker-highlight-box {
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 18px;
        }

        .speaker-lbl {
          display: block;
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          text-transform: uppercase;
        }

        .speaker-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-blue-primary);
        }

        .modal-summary-content {
          font-size: 0.96rem;
          line-height: 1.7;
          color: var(--color-text-primary);
          margin-bottom: 20px;
        }

        .modal-summary-content p {
          margin-bottom: 12px;
        }

        .modal-alert-notice {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-blue-light);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: var(--color-blue-primary);
          font-weight: 500;
        }

        .notice-icon {
          color: var(--color-orange-primary);
          flex-shrink: 0;
        }

        .media-modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding: 16px 28px;
          background-color: var(--color-canvas);
          border-top: 1px solid var(--color-border-light);
        }

        @media (max-width: 992px) {
          .news-events-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .news-events-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
