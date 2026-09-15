import React, { useState, useEffect } from 'react';
import { researchFacilities, publications } from '../data/mockData';
import {
  Microscope,
  Cpu,
  BookOpen,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Check,
  Layers,
  Zap,
  ArrowUpRight,
  Atom,
  Building2,
  Award,
  FileText,
  ChevronLeft,
  ChevronRight,
  X,
  Compass
} from 'lucide-react';

export function ResearchSection({ onSelectPage }) {
  const [activeCoverIdx, setActiveCoverIdx] = useState(0);
  const [activeFacilityIdx, setActiveFacilityIdx] = useState(0);
  const [activeModalCategory, setActiveModalCategory] = useState(null); // 'disciplines', 'facilities', 'highlights', 'publications'

  // Research Spotlight Covers with real images matching screenshot & scientific themes
  const spotlightCovers = [
    {
      id: "optics-materials",
      badge: "PEER-REVIEWED SPOTLIGHT",
      title: "Experimental and theoretical study of nonlinear 2D materials-assisted for photonic waveguides",
      journal: "JOURNAL OF NONLINEAR OPTICAL PHYSICS & MATERIALS",
      image: "/journal-cover-1.jpg",
      volume: "Vol. 34, Issue 2",
      authors: "Prof. P. K. Mohanty & Quantum Materials Lab",
      year: "2024",
      caption: "Experimental and theoretical study of nonlinear 2D materials-assisted for...",
      gradient: "linear-gradient(135deg, #0a1f38 0%, #123762 100%)",
      doi: "https://doi.org/10.1142/S021886352450012X"
    },
    {
      id: "prl-condensed",
      badge: "PHYSICAL REVIEW LETTERS",
      title: "Topological Valley Hall Edge States in Honeycomb Quantum Metamaterials",
      journal: "PHYSICAL REVIEW LETTERS",
      image: "/journal-cover-2.jpg",
      volume: "PRL 132, 086401",
      authors: "Department of Physics, IISER Tirupati",
      year: "2024",
      caption: "Observation of robust chiral acoustic edge modes immune to backscattering at high-frequency phonon junctions.",
      gradient: "linear-gradient(135deg, #2b0b10 0%, #5e161c 100%)",
      doi: "https://doi.org/10.1103/PhysRevLett.132.086401"
    },
    {
      id: "epsl-mantle",
      badge: "GEOSCIENCE SPOTLIGHT",
      title: "Supercontinents and superplumes: A nonlinear 3-D spherical mantle convection model in Cartesian-like geometry",
      journal: "EARTH & PLANETARY SCIENCE LETTERS",
      image: "/journal-cover-3.jpg",
      volume: "Vol. 584, Article 117462",
      authors: "Earth & Climate Science Research Group",
      year: "2024",
      caption: "Supercontinents and superplumes: A nonlinear 3-D spherical mantle convection model in Cartesian-like geometry...",
      gradient: "linear-gradient(135deg, #092336 0%, #144566 100%)",
      doi: "https://doi.org/10.1016/j.epsl.2024.117462"
    },
    {
      id: "nature-comm-bio",
      badge: "NATURE COMMUNICATIONS",
      title: "Deciphering Epigenetic Plasticity and Structural Macromolecular Dynamics in Cellular Systems",
      journal: "NATURE COMMUNICATIONS",
      image: "/journal-cover-4.jpg",
      volume: "Nat Commun 15, 2941",
      authors: "Biomolecular Sciences & Chemical Biology Lab",
      year: "2024",
      caption: "Single-molecule biophysical dissection of structural macromolecular assemblies in living systems...",
      gradient: "linear-gradient(135deg, #0e2715 0%, #1f4a28 100%)",
      doi: "https://doi.org/10.1038/s41467-024-47291-x"
    }
  ];

  // Auto-rotate spotlight covers every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCoverIdx((prev) => (prev + 1) % spotlightCovers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [spotlightCovers.length]);

  const currentCover = spotlightCovers[activeCoverIdx];

  const nextCover = () => {
    setActiveCoverIdx((prev) => (prev + 1) % spotlightCovers.length);
  };

  const prevCover = () => {
    setActiveCoverIdx((prev) => (prev - 1 + spotlightCovers.length) % spotlightCovers.length);
  };

  const activeFac = researchFacilities[activeFacilityIdx];

  return (
    <section id="research" className="academic-section bg-canvas" aria-label="Research and Innovation Hub">
      <div className="site-container">
        {/* Exact Layout from Screenshot: Left Journal Spotlight Carousel + Right Research Header & 4 Cards */}
        <div className="research-spotlight-split">

          {/* Left: Journal Cover Spotlight Carousel with Real Image + Badges & Content */}
          <div className="journal-spotlight-box">
            <div
              className="journal-cover-frame"
              style={{ background: currentCover.gradient }}
            >
              <div className="journal-frame-inner">
                {/* 1. Left Book Cover Stage */}
                <div className="journal-book-stage">
                  <img
                    key={currentCover.id}
                    src={currentCover.image}
                    alt={currentCover.journal}
                    className="journal-cover-img"
                    loading="lazy"
                  />
                </div>

                {/* 2. Right Content & Badges */}
                <div className="journal-details-col">
                  <div className="journal-meta-badges">
                    <span className="journal-badge">{currentCover.badge}</span>
                    <span className="journal-vol-tag">{currentCover.volume} • {currentCover.year}</span>
                  </div>

                  <h4 className="journal-name-title">{currentCover.journal}</h4>

                  <h3 className="paper-highlight-headline">
                    {currentCover.title}
                  </h3>

                  <p className="paper-authors-tag">
                    <span className="authors-label">Authors:</span> {currentCover.authors}
                  </p>

                  <div className="journal-action-row">
                    <a
                      href={currentCover.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="journal-doi-btn"
                    >
                      <span>Read Publication DOI</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Carousel Arrows */}
              <button
                type="button"
                onClick={prevCover}
                className="cover-nav-arrow left"
                aria-label="Previous publication spotlight"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={nextCover}
                className="cover-nav-arrow right"
                aria-label="Next publication spotlight"
              >
                <ChevronRight size={22} />
              </button>

              {/* Indicator Dots */}
              <div className="cover-dots-bar">
                {spotlightCovers.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveCoverIdx(idx)}
                    className={`cover-dot ${idx === activeCoverIdx ? 'active' : ''}`}
                    aria-label={`Jump to cover frame ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Caption Bar */}
            <div className="journal-bottom-caption">
              <div className="caption-text-wrap">
                <span className="caption-label">RESEARCH HIGHLIGHT:</span>
                <p className="caption-desc">
                  {currentCover.caption}
                </p>
              </div>
              <a
                href={currentCover.doi}
                target="_blank"
                rel="noreferrer"
                className="caption-doi-link"
              >
                View Paper &rarr;
              </a>
            </div>
          </div>

          {/* Right: Research Title + 4 Cards in 2x2 Grid with Related Images */}
          <div className="research-right-col">
            <h2 className="research-section-title">Research</h2>
            <div className="research-quick-cards-grid">

              {/* Card 1: Disciplines */}
              <div
                className="stanford-quick-card"
                onClick={() => setActiveModalCategory('disciplines')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModalCategory('disciplines')}
              >
                <div className="card-thumb-box">
                  <img
                    src="/card-disciplines.jpg"
                    alt="Disciplines"
                    className="card-thumb-img"
                  />
                  <div className="card-thumb-overlay" />
                  <div className="card-floating-icon">
                    <Atom size={20} />
                  </div>
                </div>
                <div className="quick-card-info">
                  <h3 className="quick-card-title">Disciplines</h3>
                </div>
              </div>

              {/* Card 2: Research Facilities */}
              <div
                className="stanford-quick-card"
                onClick={() => setActiveModalCategory('facilities')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModalCategory('facilities')}
              >
                <div className="card-thumb-box">
                  <img
                    src="/card-facilities.jpg"
                    alt="Research Facilities"
                    className="card-thumb-img"
                  />
                  <div className="card-thumb-overlay" />
                  <div className="card-floating-icon">
                    <Sparkles size={20} />
                  </div>
                </div>
                <div className="quick-card-info">
                  <h3 className="quick-card-title">Research Facilities</h3>
                </div>
              </div>

              {/* Card 3: Research Highlights */}
              <div
                className="stanford-quick-card"
                onClick={() => setActiveModalCategory('highlights')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModalCategory('highlights')}
              >
                <div className="card-thumb-box">
                  <img
                    src="/card-highlights.jpg"
                    alt="Research Highlights"
                    className="card-thumb-img"
                  />
                  <div className="card-thumb-overlay" />
                  <div className="card-floating-icon">
                    <BookOpen size={20} />
                  </div>
                </div>
                <div className="quick-card-info">
                  <h3 className="quick-card-title">Research Highlights</h3>
                </div>
              </div>

              {/* Card 4: Publications */}
              <div
                className="stanford-quick-card"
                onClick={() => {
                  onSelectPage ? onSelectPage('annual-reports') : setActiveModalCategory('publications');
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && (onSelectPage ? onSelectPage('annual-reports') : setActiveModalCategory('publications'))}
              >
                <div className="card-thumb-box">
                  <img
                    src="/card-publications.jpg"
                    alt="Publications"
                    className="card-thumb-img"
                  />
                  <div className="card-thumb-overlay" />
                  <div className="card-floating-icon">
                    <FileText size={20} />
                  </div>
                </div>
                <div className="quick-card-info">
                  <h3 className="quick-card-title">Publications</h3>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Modal for Disciplines, Highlights, Publications */}
      {activeModalCategory && (
        <div className="research-modal-backdrop" onClick={() => setActiveModalCategory(null)}>
          <div className="research-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="modal-title">
                  {activeModalCategory === 'disciplines' && 'Core Academic Disciplines'}
                  {activeModalCategory === 'highlights' && 'Research Breakthroughs & Patents'}
                  {activeModalCategory === 'publications' && 'Flagship Scientific Publications'}
                </h3>
                <span className="modal-sub">IISER Tirupati Frontier Science &amp; Engineering</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCategory(null)}
                className="modal-close"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-content-scroll">
              {activeModalCategory === 'disciplines' && (
                <div className="disciplines-modal-grid">
                  {[
                    { name: "Biological Sciences", desc: "Molecular biology, epigenetics, infectious disease dynamics, neurobiology, and synthetic genetics.", leads: "14 Faculty labs" },
                    { name: "Chemical Sciences", desc: "Catalysis, organometallics, materials chemistry, polymer synthesis, and medicinal nanomedicine.", leads: "16 Faculty labs" },
                    { name: "Physical Sciences", desc: "Quantum materials, condensed matter theory, astrophysics, nanophotonics, and gravitational physics.", leads: "15 Faculty labs" },
                    { name: "Mathematical Sciences", desc: "Algebraic geometry, number theory, partial differential equations, and scientific computing.", leads: "10 Faculty labs" },
                    { name: "Earth & Climate Sciences", desc: "Atmospheric aerosols, monsoonal dynamics, geophysics, mantle geodynamics, and hydrology.", leads: "8 Faculty labs" }
                  ].map((d, i) => (
                    <div key={i} className="disc-modal-card">
                      <h4 className="disc-title">{d.name}</h4>
                      <p className="disc-desc">{d.desc}</p>
                      <span className="disc-leads">{d.leads}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeModalCategory === 'highlights' && (
                <div className="highlights-list">
                  <div className="highlight-item-card">
                    <span className="hl-tag">PATENT GRANTED 2024</span>
                    <h4>Non-invasive Optical Diagnostic Sensor for Early Pathogen Detection</h4>
                    <p>Inventors: Department of Biology &amp; Chemistry. Rapid optical sensing platform deployed for biomedical applications.</p>
                  </div>
                  <div className="highlight-item-card">
                    <span className="hl-tag">NATIONAL FELLOWSHIP</span>
                    <h4>Prime Minister’s Research Fellowship (PMRF) Recipients</h4>
                    <p>Over 18 Ph.D. scholars from IISER Tirupati currently hold prestigious PMRF fellowships for doctoral investigations.</p>
                  </div>
                  <div className="highlight-item-card">
                    <span className="hl-tag">HIGH PERFORMANCE COMPUTING</span>
                    <h4>Param Param-Savitri HPC Tier Supercomputing Cluster</h4>
                    <p>Over 250 Teraflops hybrid CPU/GPU architecture running ab-initio simulations and planetary climate modelling.</p>
                  </div>
                </div>
              )}

              {activeModalCategory === 'publications' && (
                <div className="modal-pubs-list">
                  {publications.map((p, idx) => (
                    <div key={idx} className="modal-pub-row">
                      <div className="pub-meta">
                        <span className="pub-j">{p.journal}</span>
                        <span className="pub-impact">{p.impact}</span>
                      </div>
                      <h4 className="pub-t">{p.title}</h4>
                      <span className="pub-a">{p.authors}</span>
                      <a href={p.doi} target="_blank" rel="noreferrer" className="pub-doi">
                        DOI: {p.doi}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                onClick={() => setActiveModalCategory(null)}
                className="btn-secondary"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveModalCategory(null);
                  onSelectPage && onSelectPage('faculty');
                }}
                className="btn-primary"
              >
                <span>View Faculty Directory</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scoped CSS for Research Section */}
      <style>{`
        .research-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 44px;
        }

        .research-header-desc {
          max-width: 520px;
          font-size: 0.98rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
        }

        /* Middle Section Split Layout */
        .research-spotlight-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 48px;
          align-items: stretch;
        }

        /* Journal Spotlight Box */
        .journal-spotlight-box {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-peach-border);
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 59, 115, 0.08);
          display: flex;
          flex-direction: column;
        }

        .journal-cover-frame {
          position: relative;
          min-height: 380px;
          padding: 24px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: background 0.6s ease;
        }

        .journal-frame-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .journal-book-stage {
          flex-shrink: 0;
          width: 155px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .journal-cover-img {
          width: 100%;
          max-height: 240px;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 2px 8px rgba(0, 0, 0, 0.25);
          transition: transform var(--transition-base), opacity 0.3s ease;
          animation: coverFadeIn 0.4s ease-out;
        }

        .journal-details-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .journal-meta-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        .journal-badge {
          background-color: var(--color-orange-primary);
          color: #FFFFFF;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          text-transform: uppercase;
        }

        .journal-vol-tag {
          font-size: 0.74rem;
          color: #E2EBF5;
          font-weight: 500;
        }

        .journal-name-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.25;
          margin: 0;
        }

        .paper-highlight-headline {
          font-family: var(--font-serif);
          font-size: 0.98rem;
          font-weight: 600;
          line-height: 1.35;
          color: #F8FAFC;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .paper-authors-tag {
          font-size: 0.78rem;
          color: #E2E8F0;
          margin: 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .authors-label {
          color: #CBD5E1;
          font-weight: 600;
        }

        .journal-action-row {
          margin-top: 4px;
        }

        .journal-doi-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: var(--radius-pill);
          color: #FFFFFF;
          font-size: 0.74rem;
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .journal-doi-btn:hover {
          background: var(--color-orange-primary);
          border-color: var(--color-orange-primary);
          transform: translateY(-1px);
        }

        @keyframes coverFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        .cover-dots-bar {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .cover-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .cover-dot.active {
          width: 22px;
          border-radius: 6px;
          background: #FFFFFF;
        }

        .cover-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          color: var(--color-blue-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cover-nav-arrow:hover {
          background-color: var(--color-orange-primary);
          color: #FFFFFF;
          transform: translateY(-50%) scale(1.08);
        }

        .cover-nav-arrow.left {
          left: 12px;
        }

        .cover-nav-arrow.right {
          right: 12px;
        }

        .journal-bottom-caption {
          padding: 14px 20px;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .caption-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          letter-spacing: 0.04em;
          margin-bottom: 2px;
        }

        .caption-desc {
          font-size: 0.83rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .caption-doi-link {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          text-decoration: none;
          white-space: nowrap;
          transition: color var(--transition-fast);
        }

        .caption-doi-link:hover {
          color: var(--color-orange-primary);
          text-decoration: underline;
        }

        /* 4 Quick Cards in 2x2 Grid */
        .research-right-col {
          display: flex;
          flex-direction: column;
        }

        .research-section-title {
          font-family: var(--font-serif);
          font-size: 2.1rem;
          font-weight: 700;
          color: #003B73;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .research-quick-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          flex: 1;
        }

        .stanford-quick-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all var(--transition-base);
          box-shadow: 0 4px 16px rgba(0, 59, 115, 0.05);
        }

        .stanford-quick-card:hover {
          border-color: #BED6F5;
          transform: translateY(-4px);
          box-shadow: 0 10px 26px rgba(0, 59, 115, 0.12);
        }

        .card-thumb-box {
          position: relative;
          height: 110px;
          width: 100%;
          overflow: hidden;
          background-color: #F1F5F9;
        }

        .card-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .stanford-quick-card:hover .card-thumb-img {
          transform: scale(1.08);
        }

        .card-thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0, 59, 115, 0.45) 100%);
        }

        .card-floating-icon {
          position: absolute;
          bottom: 8px;
          right: 10px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #FFFFFF;
          color: var(--color-blue-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
          transition: transform var(--transition-fast);
        }

        .stanford-quick-card:hover .card-floating-icon {
          transform: scale(1.1);
          background-color: var(--color-blue-primary);
          color: #FFFFFF;
        }

        .quick-card-info {
          padding: 14px 12px;
          background-color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 1;
        }

        .quick-card-title {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: #003B73;
          margin: 0;
          transition: color var(--transition-fast);
        }

        .stanford-quick-card:hover .quick-card-title {
          color: var(--color-orange-primary);
        }

        .quick-icon-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: transform var(--transition-fast);
        }

        .stanford-quick-card:hover .quick-icon-circle {
          transform: scale(1.08);
        }

        .quick-icon-circle.blue-circle {
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
        }

        .quick-icon-circle.orange-circle {
          background-color: var(--color-orange-light);
          color: var(--color-orange-primary);
        }

        .quick-icon-circle.peach-circle {
          background-color: var(--color-peach-light);
          color: var(--color-orange-dark);
          border: 1px solid var(--color-peach-accent);
        }

        .quick-icon-circle.blue-light-circle {
          background-color: #E8F4FE;
          color: #0288D1;
        }

        .quick-card-title {
          font-family: var(--font-serif);
          font-size: 1.28rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-bottom: 8px;
        }

        .quick-card-desc {
          font-size: 0.84rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin-bottom: 16px;
          flex: 1;
        }

        .quick-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-orange-primary);
          margin-top: auto;
        }

        /* Facilities Master Card */
        .facilities-master-card {
          display: grid;
          grid-template-columns: 340px 1fr;
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .facilities-sidebar {
          background-color: var(--color-canvas);
          padding: 30px 24px;
          border-right: 1px solid var(--color-border-light);
        }

        .facilities-sidebar-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-bottom: 20px;
        }

        .facilities-btn-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fac-nav-btn {
          width: 100%;
          text-align: left;
          padding: 14px 16px;
          background-color: var(--color-white);
          border: 1.5px solid var(--color-border-light);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .fac-nav-btn:hover {
          border-color: #BED6F5;
          transform: translateX(3px);
        }

        .fac-nav-btn.active {
          background-color: var(--color-blue-primary);
          border-color: var(--color-blue-primary);
          color: var(--color-white);
          box-shadow: 0 4px 14px rgba(0, 59, 115, 0.16);
        }

        .fac-btn-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .fac-idx {
          font-family: var(--font-accent);
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--color-orange-primary);
        }

        .fac-nav-btn.active .fac-idx {
          color: #FFB088;
        }

        .fac-tag {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          background-color: var(--color-peach-light);
          color: var(--color-orange-dark);
          padding: 2px 7px;
          border-radius: var(--radius-pill);
        }

        .fac-nav-btn.active .fac-tag {
          background-color: rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
        }

        .fac-btn-name {
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1.35;
          color: inherit;
        }

        .facilities-details-panel {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
        }

        .fac-active-pill {
          display: inline-block;
          font-family: var(--font-accent);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-orange-dark);
          background-color: var(--color-peach-light);
          padding: 3px 12px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-peach-accent);
          margin-bottom: 10px;
        }

        .fac-active-title {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .fac-active-desc {
          font-size: 0.96rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 22px;
        }

        .fac-specs-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-blue-light);
          border: 1px solid #BED6F5;
          padding: 12px 18px;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-blue-primary);
          margin-bottom: 26px;
        }

        .equip-heading {
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-text-primary);
          margin-bottom: 12px;
          letter-spacing: 0.04em;
        }

        .equip-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 30px;
        }

        .equip-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--color-text-secondary);
        }

        .equip-icon {
          color: var(--color-orange-primary);
          flex-shrink: 0;
        }

        .fac-footer-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid var(--color-border-light);
        }

        /* Modal styling */
        .research-modal-backdrop {
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

        .research-modal-card {
          width: 100%;
          max-width: 780px;
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--color-peach-accent);
          box-shadow: 0 24px 60px rgba(0, 38, 77, 0.25);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          animation: slideDown 0.22s ease-out;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 28px;
          background: linear-gradient(135deg, var(--color-blue-primary) 0%, var(--color-blue-bright) 100%);
          color: var(--color-white);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .modal-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 700;
        }

        .modal-sub {
          font-size: 0.78rem;
          color: #CFE2FE;
        }

        .modal-close {
          color: #FFFFFF;
          padding: 6px;
          border-radius: 50%;
        }

        .modal-content-scroll {
          padding: 28px;
          overflow-y: auto;
        }

        .disciplines-modal-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .disc-modal-card {
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          padding: 16px 20px;
          border-radius: var(--radius-md);
        }

        .disc-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--color-blue-primary);
          margin-bottom: 4px;
        }

        .disc-desc {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-bottom: 8px;
        }

        .disc-leads {
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          text-transform: uppercase;
        }

        .highlight-item-card {
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 14px;
        }

        .hl-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 4px;
        }

        .highlight-item-card h4 {
          font-size: 1.05rem;
          color: var(--color-blue-primary);
          margin-bottom: 6px;
        }

        .highlight-item-card p {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
        }

        .modal-pub-row {
          border-bottom: 1px solid var(--color-border-light);
          padding-bottom: 14px;
          margin-bottom: 14px;
        }

        .pub-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 4px;
        }

        .pub-j {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .pub-impact {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-orange-dark);
        }

        .pub-t {
          font-size: 0.95rem;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .pub-a {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          display: block;
          margin-bottom: 4px;
        }

        .pub-doi {
          font-size: 0.78rem;
          color: var(--color-blue-bright);
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding: 18px 28px;
          background-color: var(--color-canvas);
          border-top: 1px solid var(--color-border-light);
          border-radius: 0 0 var(--radius-lg) var(--radius-lg);
        }

        @media (max-width: 1024px) {
          .research-spotlight-split {
            grid-template-columns: 1fr;
          }
          .facilities-master-card {
            grid-template-columns: 1fr;
          }
          .facilities-sidebar {
            border-right: none;
            border-bottom: 1px solid var(--color-border-light);
          }
        }

        @media (max-width: 640px) {
          .research-quick-cards-grid {
            grid-template-columns: 1fr;
          }
          .journal-cover-frame {
            min-height: auto;
            padding: 24px 16px;
          }
          .journal-frame-inner {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          .journal-meta-badges {
            justify-content: center;
          }
          .journal-book-stage {
            width: 140px;
          }
          .journal-bottom-caption {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .equip-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
