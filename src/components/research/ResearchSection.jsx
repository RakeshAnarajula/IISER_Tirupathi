import React, { useState, useEffect } from 'react';
import { publications } from '../../constants/mockData';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Atom,
  Sparkles,
  BookOpen,
  FileText
} from 'lucide-react';
import styles from '../../styles/ResearchSection.module.scss';

export function ResearchSection({ onSelectPage }) {
  const [activeCoverIdx, setActiveCoverIdx] = useState(0);
  const [activeModalCategory, setActiveModalCategory] = useState(null);

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
      gradient: "linear-gradient(135deg, #002B54 0%, #003B73 100%)",
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
      gradient: "linear-gradient(135deg, #00264D 0%, #003B73 60%, #FF5722 100%)",
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
      gradient: "linear-gradient(135deg, #002042 0%, #003B73 100%)",
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
      gradient: "linear-gradient(135deg, #002B54 0%, #0056B3 100%)",
      doi: "https://doi.org/10.1038/s41467-024-47291-x"
    }
  ];

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

  return (
    <section id="research" className={styles.researchSection} aria-label="Research and Innovation Hub">
      <div className="site-container">
        <div className="section-head-center">
          <h2 className="section-title">Research</h2>
        </div>

        <div className={styles.researchSpotlightSplit}>

          {/* Left: Journal Cover Spotlight Carousel */}
          <div className={styles.journalSpotlightBox}>
            <div
              className={styles.journalCoverFrame}
              style={{ background: currentCover.gradient }}
            >
              <div className={styles.journalFrameInner}>
                <div className={styles.journalBookStage}>
                  <img
                    key={currentCover.id}
                    src={currentCover.image}
                    alt={currentCover.journal}
                    className={styles.journalCoverImg}
                    loading="lazy"
                  />
                </div>

                <div className={styles.journalDetailsCol}>
                  <div className={styles.journalMetaBadges}>
                    <span className={styles.journalBadge}>{currentCover.badge}</span>
                    <span className={styles.journalVolTag}>{currentCover.volume} • {currentCover.year}</span>
                  </div>

                  <h4 className={styles.journalNameTitle}>{currentCover.journal}</h4>
                  <h3 className={styles.paperHighlightHeadline}>{currentCover.title}</h3>

                  <p className={styles.paperAuthorsTag}>
                    <span>Authors:</span> {currentCover.authors}
                  </p>
                </div>
              </div>

              {/* Carousel Arrows */}
              <button
                type="button"
                onClick={prevCover}
                className={`${styles.coverNavArrow} ${styles.left}`}
                aria-label="Previous publication spotlight"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={nextCover}
                className={`${styles.coverNavArrow} ${styles.right}`}
                aria-label="Next publication spotlight"
              >
                <ChevronRight size={22} />
              </button>

              {/* Indicator Dots */}
              <div className={styles.coverDotsBar}>
                {spotlightCovers.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveCoverIdx(idx)}
                    className={`${styles.coverDot} ${idx === activeCoverIdx ? styles.active : ''}`}
                    aria-label={`Jump to cover frame ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: 4 Cards in 2x2 Grid */}
          <div className={styles.researchRightCol}>
            <div className={styles.researchQuickCardsGrid}>

              {/* Card 1: Disciplines */}
              <div
                className={styles.stanfordQuickCard}
                onClick={() => setActiveModalCategory('disciplines')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModalCategory('disciplines')}
              >
                <div className={styles.cardThumbBox}>
                  <img
                    src="/card-disciplines.jpg"
                    alt="Disciplines"
                    className={styles.cardThumbImg}
                  />
                  <div className={styles.cardThumbOverlay} />
                  <div className={styles.cardFloatingIcon}>
                    <Atom size={20} />
                  </div>
                </div>
                <div className={styles.quickCardInfo}>
                  <h3 className={styles.quickCardTitle}>Disciplines</h3>
                </div>
              </div>

              {/* Card 2: Research Facilities */}
              <div
                className={styles.stanfordQuickCard}
                onClick={() => onSelectPage ? onSelectPage('research-facilities') : setActiveModalCategory('facilities')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && (onSelectPage ? onSelectPage('research-facilities') : setActiveModalCategory('facilities'))}
              >
                <div className={styles.cardThumbBox}>
                  <img
                    src="/card-facilities.jpg"
                    alt="Research Facilities"
                    className={styles.cardThumbImg}
                  />
                  <div className={styles.cardThumbOverlay} />
                  <div className={styles.cardFloatingIcon}>
                    <Sparkles size={20} />
                  </div>
                </div>
                <div className={styles.quickCardInfo}>
                  <h3 className={styles.quickCardTitle}>Research Facilities</h3>
                </div>
              </div>

              {/* Card 3: Research Highlights */}
              <div
                className={styles.stanfordQuickCard}
                onClick={() => onSelectPage ? onSelectPage('research-highlights') : setActiveModalCategory('highlights')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && (onSelectPage ? onSelectPage('research-highlights') : setActiveModalCategory('highlights'))}
              >
                <div className={styles.cardThumbBox}>
                  <img
                    src="/card-highlights.jpg"
                    alt="Research Highlights"
                    className={styles.cardThumbImg}
                  />
                  <div className={styles.cardThumbOverlay} />
                  <div className={styles.cardFloatingIcon}>
                    <BookOpen size={20} />
                  </div>
                </div>
                <div className={styles.quickCardInfo}>
                  <h3 className={styles.quickCardTitle}>Research Highlights</h3>
                </div>
              </div>

              {/* Card 4: Publications */}
              <div
                className={styles.stanfordQuickCard}
                onClick={() => onSelectPage ? onSelectPage('publications') : setActiveModalCategory('publications')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && (onSelectPage ? onSelectPage('publications') : setActiveModalCategory('publications'))}
              >
                <div className={styles.cardThumbBox}>
                  <img
                    src="/card-publications.jpg"
                    alt="Publications"
                    className={styles.cardThumbImg}
                  />
                  <div className={styles.cardThumbOverlay} />
                  <div className={styles.cardFloatingIcon}>
                    <FileText size={20} />
                  </div>
                </div>
                <div className={styles.quickCardInfo}>
                  <h3 className={styles.quickCardTitle}>Publications</h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Modal for Disciplines, Highlights, Publications */}
      {activeModalCategory && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModalCategory(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h3 className={styles.modalTitle}>
                  {activeModalCategory === 'disciplines' && 'Core Academic Disciplines'}
                  {activeModalCategory === 'highlights' && 'Research Breakthroughs & Patents'}
                  {activeModalCategory === 'publications' && 'Flagship Scientific Publications'}
                </h3>
                <span className={styles.modalSub}>IISER Tirupati Frontier Science &amp; Engineering</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCategory(null)}
                className={styles.modalClose}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.disciplinesModalGrid}>
              {activeModalCategory === 'disciplines' && (
                <>
                  {[
                    { name: "Biological Sciences", desc: "Molecular biology, epigenetics, infectious disease dynamics, neurobiology, and synthetic genetics.", leads: "18 Faculty labs" },
                    { name: "Chemical Sciences", desc: "Catalysis, organometallics, materials chemistry, polymer synthesis, and medicinal nanomedicine.", leads: "22 Faculty labs" },
                    { name: "Physical Sciences", desc: "Quantum materials, condensed matter theory, astrophysics, nanophotonics, and gravitational physics.", leads: "20 Faculty labs" },
                    { name: "Mathematical Sciences", desc: "Algebraic geometry, number theory, partial differential equations, and scientific computing.", leads: "15 Faculty labs" },
                    { name: "Earth & Climate Sciences", desc: "Atmospheric aerosols, monsoonal dynamics, geophysics, mantle geodynamics, and hydrology.", leads: "12 Faculty labs" }
                  ].map((d, i) => (
                    <div key={i} className={styles.discModalCard}>
                      <h4 className={styles.discTitle}>{d.name}</h4>
                      <p className={styles.discDesc}>{d.desc}</p>
                      <span className={styles.discLeads}>{d.leads}</span>
                    </div>
                  ))}
                </>
              )}

              {activeModalCategory === 'highlights' && (
                <div className={styles.highlightsList}>
                  <div className={styles.highlightItemCard}>
                    <span className={styles.hlTag}>PATENT GRANTED 2024</span>
                    <h4>Non-invasive Optical Diagnostic Sensor for Early Pathogen Detection</h4>
                    <p>Inventors: Department of Biology &amp; Chemistry. Rapid optical sensing platform deployed for biomedical applications.</p>
                  </div>
                  <div className={styles.highlightItemCard}>
                    <span className={styles.hlTag}>NATIONAL FELLOWSHIP</span>
                    <h4>Prime Minister’s Research Fellowship (PMRF) Recipients</h4>
                    <p>Over 18 Ph.D. scholars from IISER Tirupati currently hold prestigious PMRF fellowships for doctoral investigations.</p>
                  </div>
                  <div className={styles.highlightItemCard}>
                    <span className={styles.hlTag}>HIGH PERFORMANCE COMPUTING</span>
                    <h4>Param Savitri HPC Tier Supercomputing Cluster</h4>
                    <p>Over 250 Teraflops hybrid CPU/GPU architecture running ab-initio simulations and planetary climate modelling.</p>
                  </div>
                </div>
              )}

              {activeModalCategory === 'publications' && (
                <div className={styles.highlightsList}>
                  {publications.slice(0, 4).map((p, idx) => (
                    <div key={idx} className={styles.highlightItemCard}>
                      <span className={styles.hlTag}>{p.journal} • {p.impact}</span>
                      <h4>{p.title}</h4>
                      <p>{p.authors}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ResearchSection;

