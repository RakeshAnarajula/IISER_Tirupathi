import React, { useState } from 'react';
import { campusFeatures } from '../data/mockData';
import { 
  Building2, 
  Home, 
  BookOpen, 
  Utensils, 
  Trophy, 
  Users, 
  Sparkles, 
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

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
    <section id="campus" className="academic-section bg-peach-tint" aria-label="Yerpedu Permanent Campus Life">
      <div className="site-container">
        {/* Section Header */}
        <div className="campus-header-center">
          <span className="section-tag">
            <Compass size={14} />
            Life at Yerpedu Campus
          </span>
          <h2 className="section-title">
            A Thriving Scientific Haven in the <br />
            <span className="accent-orange">Foothills of Tirumala</span>
          </h2>
          <p className="section-subtitle">
            Spread over 250 acres of picturesque landscapes in Srinivasapuram, Yerpedu, IISER Tirupati offers an inspiring residential environment designed for holistic learning, well-being, and scientific camaraderie.
          </p>
        </div>

        {/* Interactive Feature Master View */}
        <div className="campus-life-container">
          {/* Feature Tabs */}
          <div className="campus-nav-tabs">
            {tabs.map((tab, idx) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`campus-tab-btn ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <TabIcon size={18} className="c-tab-icon" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="campus-display-card">
            <div className="display-card-content">
              <span className="campus-feature-badge">
                {campusFeatures[activeTab]?.badge || "Featured"}
              </span>

              <h3 className="campus-feature-title">
                {campusFeatures[activeTab]?.title || "Campus Life"}
              </h3>

              <p className="campus-feature-desc">
                {campusFeatures[activeTab]?.description || "Experience life at our permanent campus."}
              </p>

              {activeTab === 3 && (
                <div className="clubs-embedded-list">
                  <h4 className="clubs-header-label">Active Student Societies:</h4>
                  <div className="clubs-grid">
                    {clubs.map((c, i) => (
                      <div key={i} className="club-chip">
                        <span className="club-chip-name">{c.name}</span>
                        <span className="club-chip-focus">{c.focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="campus-card-action-bar">
                <button 
                  type="button" 
                  onClick={onOpenCampusTour}
                  className="btn-primary"
                >
                  <span>Launch Campus Photo Gallery</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button"
                  onClick={() => onSelectPage && onSelectPage('health-center')} 
                  className="btn-secondary"
                >
                  <span>All Campus Facilities</span>
                </button>
              </div>
            </div>

            <div className="display-card-visual">
              <div className="campus-visual-frame">
                <img 
                  src={campusFeatures[activeTab]?.imageUrl || "/campus-hero.jpg"} 
                  alt={campusFeatures[activeTab]?.title || "IISER Tirupati Campus Architecture"} 
                  className="campus-visual-img"
                  key={activeTab}
                  loading="lazy"
                />
                <div className="visual-caption-box">
                  <span className="cap-bold">{campusFeatures[activeTab]?.title || "Yerpedu Permanent Campus"}</span>
                  <span className="cap-light">{campusFeatures[activeTab]?.badge || "250 Acres • LEED-Compliant Sustainable Design"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .campus-header-center {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 46px;
        }

        .campus-header-center .section-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        .campus-life-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Nav Tabs */
        .campus-nav-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          padding: 8px;
          border-radius: var(--radius-pill);
          gap: 6px;
          flex-wrap: wrap;
          box-shadow: var(--shadow-sm);
        }

        .campus-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-pill);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          transition: all var(--transition-fast);
        }

        .campus-tab-btn:hover {
          color: var(--color-blue-primary);
          background-color: var(--color-blue-tint);
        }

        .campus-tab-btn.active {
          background-color: var(--color-blue-primary);
          color: var(--color-white);
          box-shadow: 0 4px 14px rgba(0, 59, 115, 0.18);
        }

        .c-tab-icon {
          flex-shrink: 0;
        }

        /* Display Card */
        .campus-display-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-xl);
          padding: 44px;
          box-shadow: var(--shadow-md);
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .display-card-content {
          display: flex;
          flex-direction: column;
        }

        .campus-feature-badge {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          background-color: var(--color-peach-base);
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          margin-bottom: 14px;
        }

        .campus-feature-title {
          font-family: var(--font-serif);
          font-size: 2.1rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .campus-feature-desc {
          font-size: 1.02rem;
          color: var(--color-text-secondary);
          line-height: 1.68;
          margin-bottom: 28px;
        }

        .clubs-embedded-list {
          margin-bottom: 28px;
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-md);
          padding: 16px;
        }

        .clubs-header-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-orange-dark);
          margin-bottom: 10px;
        }

        .clubs-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .club-chip {
          display: flex;
          flex-direction: column;
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
        }

        .club-chip-name {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .club-chip-focus {
          font-size: 0.76rem;
          color: var(--color-text-muted);
        }

        .campus-card-action-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Visual Frame */
        .campus-visual-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0, 59, 115, 0.12);
          border: 3px solid var(--color-white);
        }

        .campus-visual-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .campus-visual-frame:hover .campus-visual-img {
          transform: scale(1.03);
        }

        .visual-caption-box {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 38, 77, 0.85) 100%);
          padding: 24px 20px 16px;
          color: var(--color-white);
          display: flex;
          flex-direction: column;
        }

        .cap-bold {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
        }

        .cap-light {
          font-size: 0.78rem;
          color: #FFE5D4;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .campus-display-card {
            grid-template-columns: 1fr;
          }
          .campus-visual-img {
            height: 280px;
          }
        }

        @media (max-width: 768px) {
          .campus-display-card {
            padding: 26px 18px;
          }
          .campus-feature-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </section>
  );
}
