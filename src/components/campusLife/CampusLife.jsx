import React, { useState } from 'react';
import { campusFeatures } from '../../constants/mockData';
import { 
  Building2, 
  Home, 
  BookOpen, 
  Trophy, 
  Users, 
  HeartHandshake,
  ArrowRight,
  Compass
} from 'lucide-react';
import styles from '../../styles/CampusLife.module.scss';

export function CampusLife({ onOpenCampusTour, onSelectPage }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Campus Architecture", icon: Building2 },
    { label: "Hostels & Dining", icon: Home },
    { label: "Central Library", icon: BookOpen },
    { label: "Student Clubs", icon: Users },
    { label: "Sports & Fitness", icon: Trophy },
    { label: "Health & Wellbeing", icon: HeartHandshake }
  ];

  const clubs = [
    { name: "Curiosity Science Club", focus: "Astronomy night skies, science debates & public outreach" },
    { name: "Turing AI & Robotics", focus: "Autonomous drones, competitive coding & hackathons" },
    { name: "Dhwani Cultural Society", focus: "Music ensembles, classical dance, dramatics & open mics" },
    { name: "Sahyadri Eco-Trekking", focus: "Biodiversity surveys in Eastern Ghats & trail conservation" },
    { name: "Sports Council", focus: "Inter-IISER sports meet, cricket, basketball & badminton leagues" }
  ];

  return (
    <section id="campus" className={styles.campusSection} aria-label="Yerpedu Permanent Campus Life">
      <div className="site-container">
        {/* Section Header */}
        <div className={styles.campusHeaderCenter}>
          <span className={styles.sectionTag}>
            <Compass size={14} />
            Life at Yerpedu Campus
          </span>
          <h2 className={styles.sectionTitle}>
            A Thriving Scientific Haven in the <br />
            <span className={styles.accentOrange}>Foothills of Tirumala</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Spread over 250 acres of picturesque landscapes in Srinivasapuram, Yerpedu, IISER Tirupati offers an inspiring residential environment designed for holistic learning, well-being, and scientific camaraderie.
          </p>
        </div>

        {/* Interactive Feature Master View */}
        <div className={styles.campusLifeContainer}>
          {/* Feature Tabs */}
          <div className={styles.campusNavTabs}>
            {tabs.map((tab, idx) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.campusTabBtn} ${activeTab === idx ? styles.active : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <TabIcon size={18} className={styles.cTabIcon} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className={styles.campusDisplayCard}>
            <div className={styles.displayCardContent}>
              <span className={styles.campusFeatureBadge}>
                {campusFeatures[activeTab]?.badge || "Featured"}
              </span>

              <h3 className={styles.campusFeatureTitle}>
                {campusFeatures[activeTab]?.title || "Campus Life"}
              </h3>

              <p className={styles.campusFeatureDesc}>
                {campusFeatures[activeTab]?.description || "Experience life at our permanent campus."}
              </p>

              {activeTab === 3 && (
                <div className={styles.clubsEmbeddedList}>
                  <h4 className={styles.clubsHeaderLabel}>Active Student Societies:</h4>
                  <div className={styles.clubsGrid}>
                    {clubs.map((c, i) => (
                      <div key={i} className={styles.clubChip}>
                        <span className={styles.clubChipName}>{c.name}</span>
                        <span className={styles.clubChipFocus}>{c.focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.campusCardActionBar}>
                <button 
                  type="button" 
                  onClick={onOpenCampusTour}
                  className={styles.btnPrimary}
                >
                  <span>Launch Campus Photo Gallery</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button" 
                  onClick={() => onSelectPage && onSelectPage('contact')} 
                  className={styles.btnSecondary}
                >
                  <span>How to Reach Us</span>
                </button>
              </div>
            </div>

            <div className={styles.displayCardVisual}>
              <div className={styles.campusVisualFrame}>
                <img 
                  src={campusFeatures[activeTab]?.imageUrl || "/campus-hero.jpg"} 
                  alt={campusFeatures[activeTab]?.title || "IISER Tirupati Campus Architecture"} 
                  className={styles.campusVisualImg}
                  key={activeTab}
                  loading="lazy"
                />
                <div className={styles.visualCaptionBox}>
                  <span className={styles.capBold}>{campusFeatures[activeTab]?.title || "Yerpedu Permanent Campus"}</span>
                  <span className={styles.capLight}>{campusFeatures[activeTab]?.badge || "250 Acres • LEED-Compliant Sustainable Design"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusLife;

