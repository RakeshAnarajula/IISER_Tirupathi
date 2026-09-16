import React, { useState, useEffect } from 'react';
import { featuredEvents, allRemainingEvents } from '../constants/mockData';
import { Sparkles, Calendar, ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from '../styles/NewsEventsSection.module.scss';

export function EventsPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [eventsPage, setEventsPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [eventsPage]);

  const currentEvents = showAllPages 
    ? allRemainingEvents 
    : allRemainingEvents.filter(e => e.page === eventsPage);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh', padding: '40px 0 80px' }}>
      <div className="site-container">
        
        {/* Breadcrumb & Navigation */}
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0b72b9', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> Home
          </Link>
          <span style={{ color: '#aaa' }}>/</span>
          <span style={{ color: '#555', fontSize: '0.9rem', fontWeight: 600 }}>Events &amp; Symposia</span>
        </div>

        <div style={{ marginBottom: '36px', borderBottom: '1px solid #eaeaea', paddingBottom: '20px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#00264D', margin: '0 0 8px' }}>
            Events &amp; Symposia Portal
          </h1>
          <p style={{ color: '#555', fontSize: '1.05rem', margin: 0 }}>
            Official archive of scientific conferences, workshops, convocation and academic celebrations at IISER Tirupati.
          </p>
        </div>

        {/* 1. Featured Events */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Sparkles size={22} color="#FF5722" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#00264D', margin: 0, fontWeight: 700 }}>
              Featured Events
            </h2>
          </div>

          <div className={styles.cardsGrid}>
            {featuredEvents.map((feat) => (
              <article
                key={feat.id}
                className={styles.mediaCard}
                onClick={() => setSelectedItem({ ...feat, type: 'Featured Event' })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedItem({ ...feat, type: 'Featured Event' })}
              >
                <div className={styles.cardRibbonBar}>
                  <span className={styles.ribbonTags}>
                    Featured Event • {feat.category}
                  </span>
                </div>

                <div className={styles.thumbnailBox}>
                  <img
                    src={feat.imageUrl}
                    alt={feat.title}
                    className={styles.photoImg}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/chemistry-dept.jpg';
                    }}
                  />
                </div>

                <div className={styles.mediaCardBody}>
                  <h3 className={styles.mediaCardTitle}>{feat.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 2. Events Archive Grid */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Calendar size={22} color="#0056B3" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#00264D', margin: 0, fontWeight: 700 }}>
              Events Archive
            </h2>
            <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 600, marginLeft: '8px' }}>
              {showAllPages ? `(All ${allRemainingEvents.length} Events)` : `(Page ${eventsPage} of 4 • 6 Events)`}
            </span>
          </div>

          <div className={styles.cardsGrid}>
            {currentEvents.map((evt) => (
              <article
                key={evt.id}
                className={styles.mediaCard}
                onClick={() => setSelectedItem({ ...evt, type: 'Event' })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedItem({ ...evt, type: 'Event' })}
              >
                <div className={styles.cardRibbonBar}>
                  <span className={styles.ribbonTags}>
                    Event • {evt.category}
                  </span>
                </div>

                <div className={styles.thumbnailBox}>
                  <img
                    src={evt.imageUrl}
                    alt={evt.title}
                    className={styles.photoImg}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/convocation-yerpedu.jpg';
                    }}
                  />
                </div>

                <div className={styles.mediaCardBody}>
                  <h3 className={styles.mediaCardTitle}>{evt.title}</h3>
                  {evt.eventDateBadge && (
                    <div style={{ marginTop: '10px', fontSize: '0.82rem', color: '#E65100', fontWeight: 700 }}>
                      {evt.eventDateBadge}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className={styles.paginationControls}>
          <button
            type="button"
            disabled={showAllPages || eventsPage === 1}
            onClick={() => setEventsPage((p) => Math.max(1, p - 1))}
            className={styles.pageBtn}
            aria-label="Previous Page"
          >
            <ChevronLeft size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Prev
          </button>

          {[1, 2, 3, 4].map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              className={`${styles.pageBtn} ${!showAllPages && eventsPage === pageNum ? styles.activePageBtn : ''}`}
              onClick={() => {
                setShowAllPages(false);
                setEventsPage(pageNum);
              }}
            >
              Page {pageNum}
            </button>
          ))}

          <button
            type="button"
            disabled={showAllPages || eventsPage === 4}
            onClick={() => setEventsPage((p) => Math.min(4, p + 1))}
            className={styles.pageBtn}
            aria-label="Next Page"
          >
            Next <ChevronRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </button>

          <button
            type="button"
            className={`${styles.pageBtn} ${showAllPages ? styles.activePageBtn : ''}`}
            onClick={() => setShowAllPages(!showAllPages)}
            style={{ marginLeft: '12px' }}
          >
            {showAllPages ? 'Show 6 Per Page' : 'View All 24 Events'}
          </button>
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className={styles.modalBackdrop} onClick={() => setSelectedItem(null)}>
            <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className={styles.modalClose}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <span className={styles.modalTag}>{selectedItem.type}: {selectedItem.category}</span>
              <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
              <div className={styles.modalMeta}>
                {selectedItem.date && <span>Date: {selectedItem.date}</span>}
                {selectedItem.venue && <span> • Venue: {selectedItem.venue}</span>}
              </div>
              <div className={styles.modalBody}>
                {selectedItem.description || selectedItem.summary || "Full detailed coverage and report regarding this academic announcement."}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default EventsPage;
