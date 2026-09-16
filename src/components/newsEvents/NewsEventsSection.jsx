import React, { useState } from 'react';
import { newsItems, upcomingEvents, featuredEvents, allRemainingEvents } from '../../constants/mockData';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  X
} from 'lucide-react';
import styles from '../../styles/NewsEventsSection.module.scss';

export function NewsEventsSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showRemainingEvents, setShowRemainingEvents] = useState(false);
  const [eventsPage, setEventsPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);

  // Pagination for remaining events (6 per page across 4 pages matching screenshots)
  const pageSize = 6;
  const currentEvents = showAllPages 
    ? allRemainingEvents 
    : allRemainingEvents.filter(e => e.page === eventsPage);

  const displayedNews = showAllNews ? newsItems : newsItems.slice(0, 3);

  return (
    <div id="news-events" className={styles.container} aria-label="Campus News and Events">

      {/* 1. NEWS SECTION */}
      <section className={styles.newsSection}>
        <div className="site-container">
          <div className={styles.sectionHeadCenter}>
            <h2 className={styles.sectionTitle}>News</h2>
            <p className={styles.sectionSubtitleCenter}>What's happening at IISER Tirupati</p>
          </div>

          <div className={styles.cardsGrid}>
            {displayedNews.map((item) => (
              <article
                key={item.id}
                className={styles.mediaCard}
                onClick={() => setSelectedItem({ ...item, type: 'News' })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedItem({ ...item, type: 'News' })}
              >
                <div className={styles.cardRibbonBar}>
                  <span className={styles.ribbonTags}>
                    {item.tags ? item.tags.join(', ') : item.category}
                  </span>
                </div>

                <div className={styles.thumbnailBox}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.photoImg}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/convocation-yerpedu.jpg';
                    }}
                  />
                </div>

                <div className={styles.mediaCardBody}>
                  <h3 className={styles.mediaCardTitle}>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.sectionBottomAction}>
            <button
              type="button"
              onClick={() => setShowAllNews(!showAllNews)}
              className={styles.viewAllBtn}
            >
              <span>{showAllNews ? 'Show Less News' : 'View All News'}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. EVENTS SECTION */}
      <section className={styles.eventsSection}>
        <div className="site-container">
          <div className={styles.sectionHeadCenter}>
            <h2 className={styles.sectionTitle}>Events</h2>
            <p className={styles.sectionSubtitleCenter}>Upcoming symposia, colloquia &amp; conferences</p>
          </div>

          {!showRemainingEvents ? (
            <>
              {/* Default Preview Grid */}
              <div className={styles.cardsGrid}>
                {upcomingEvents.map((event) => (
                  <article
                    key={event.id}
                    className={styles.mediaCard}
                    onClick={() => setSelectedItem({ ...event, type: 'Event' })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedItem({ ...event, type: 'Event' })}
                  >
                    <div className={styles.cardRibbonBar}>
                      <span className={styles.ribbonTags}>
                        {event.tags ? event.tags.join(', ') : event.category}
                      </span>
                    </div>

                    <div className={styles.thumbnailBox}>
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className={styles.photoImg}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/convocation-yerpedu.jpg';
                        }}
                      />
                    </div>

                    <div className={styles.mediaCardBody}>
                      <h3 className={styles.mediaCardTitle}>{event.title}</h3>
                    </div>
                  </article>
                ))}
              </div>

              <div className={styles.sectionBottomAction}>
                <button
                  type="button"
                  onClick={() => {
                    setShowRemainingEvents(true);
                    setEventsPage(1);
                  }}
                  className={styles.viewAllBtn}
                  title="View complete events archive"
                >
                  <span>View All Events ({allRemainingEvents.length} Archives)</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </>
          ) : (
            /* Complete Events Portal View with same mediaCard design as News */
            <div style={{ marginTop: '20px' }}>
              
              {/* Top: Featured Events */}
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  <Sparkles size={20} color="#FF5722" />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 700, color: '#00264D', margin: 0 }}>
                    Featured Events
                  </h3>
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

              {/* Bottom: Events Grid with same news card design */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={20} color="#0056B3" />
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 700, color: '#00264D', margin: 0 }}>
                      Events
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 600, marginLeft: '6px' }}>
                      {showAllPages ? `(All ${allRemainingEvents.length} Events)` : `(Page ${eventsPage} of 4 • 6 Events)`}
                    </span>
                  </div>
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

                {/* Collapse Back Button */}
                <div style={{ textAlign: 'center', marginTop: '36px' }}>
                  <button
                    type="button"
                    onClick={() => setShowRemainingEvents(false)}
                    className={styles.toggleActionBtn}
                  >
                    <span>Collapse Events</span>
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

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
              {selectedItem.location && <span> • Venue: {selectedItem.location}</span>}
            </div>
            <div className={styles.modalBody}>
              {selectedItem.description || selectedItem.summary || "Full detailed coverage and report regarding this academic announcement."}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsEventsSection;

