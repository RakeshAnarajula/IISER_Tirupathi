import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Compass, MapPin, Maximize2 } from 'lucide-react';

export function CampusTourModal({ isOpen, onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: "Main Academic & Administrative Complex",
      location: "Central Zone, Yerpedu Permanent Campus",
      desc: "An architectural marvel combining modern terracotta solar facades with smart glass atriums. Houses the Director's Office, Deaneries, and core interdisciplinary research labs.",
      image: "/campus-hero.jpg"
    },
    {
      title: "Central Instrumentation Facility (CIF)",
      location: "Science Complex Bay B",
      desc: "State-of-the-art facility accommodating single-crystal XRD, field-emission scanning electron microscope (FE-SEM), confocal microscopes, and high-vacuum cleanrooms.",
      image: "/campus-hero.jpg"
    },
    {
      title: "Ramanujan Lecture Hall Complex (LHC)",
      location: "Academic Quadrangle",
      desc: "Equipped with stepped acoustically treated auditoriums, multi-camera interactive streaming for hybrid seminars, and high-fidelity AV presentation suites.",
      image: "/campus-hero.jpg"
    },
    {
      title: "Central Science Library & Knowledge Hub",
      location: "Knowledge Boulevard",
      desc: "Multi-level quiet study zones, 24x7 automated RFID book issue kiosks, and seamless high-speed connectivity to global science repositories.",
      image: "/campus-hero.jpg"
    },
    {
      title: "Residential Hostels & Seshachalam Vistas",
      location: "Student Residential Sector",
      desc: "Comfortable single and shared accommodations surrounded by indigenous flora, bicycle trails, solar water heating, and modern sports courts.",
      image: "/campus-hero.jpg"
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const current = slides[activeSlide];

  return (
    <div className="tour-modal-backdrop" onClick={onClose}>
      <div className="tour-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="tour-modal-header">
          <div className="tour-title-wrap">
            <Compass size={22} className="tour-icon" />
            <div>
              <h3 className="tour-heading">Yerpedu Permanent Campus Virtual Tour</h3>
              <span className="tour-sub">250 Acres Smart Campus • Tirupati District, Andhra Pradesh</span>
            </div>
          </div>
          <button type="button" onClick={onClose} className="tour-close-btn" aria-label="Close tour modal">
            <X size={20} />
          </button>
        </div>

        {/* Visual Gallery View */}
        <div className="tour-viewport">
          <img src={current.image} alt={current.title} className="tour-main-img" />

          {/* Navigation Overlay Arrows */}
          <button type="button" onClick={prevSlide} className="tour-arrow-btn left" aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button type="button" onClick={nextSlide} className="tour-arrow-btn right" aria-label="Next slide">
            <ChevronRight size={24} />
          </button>

          {/* Caption Overlay */}
          <div className="tour-caption-overlay">
            <div className="tour-caption-meta">
              <span className="slide-counter">Location {activeSlide + 1} of {slides.length}</span>
              <span className="loc-tag">
                <MapPin size={12} />
                {current.location}
              </span>
            </div>
            <h4 className="slide-title">{current.title}</h4>
            <p className="slide-desc">{current.desc}</p>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="tour-thumb-strip">
          {slides.map((s, idx) => (
            <button
              key={idx}
              type="button"
              className={`tour-thumb-btn ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => setActiveSlide(idx)}
            >
              <span className="thumb-num">0{idx + 1}</span>
              <span className="thumb-label">{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .tour-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 38, 77, 0.7);
          backdrop-filter: blur(8px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .tour-modal-card {
          width: 100%;
          max-width: 920px;
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          border: 1.5px solid var(--color-peach-accent);
          box-shadow: 0 24px 60px rgba(0, 38, 77, 0.3);
          overflow: hidden;
          animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tour-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          background: linear-gradient(135deg, var(--color-blue-primary) 0%, var(--color-blue-bright) 100%);
          color: var(--color-white);
        }

        .tour-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tour-icon {
          color: #FFE5D4;
        }

        .tour-heading {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .tour-sub {
          font-size: 0.76rem;
          color: #CFE2FE;
        }

        .tour-close-btn {
          color: #FFFFFF;
          padding: 6px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .tour-close-btn:hover {
          background-color: var(--color-orange-primary);
        }

        .tour-viewport {
          position: relative;
          height: 440px;
          background-color: var(--color-canvas);
          overflow: hidden;
        }

        .tour-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tour-arrow-btn {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.85);
          color: var(--color-blue-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all var(--transition-fast);
        }

        .tour-arrow-btn:hover {
          background-color: var(--color-orange-primary);
          color: var(--color-white);
          transform: translateY(-50%) scale(1.08);
        }

        .tour-arrow-btn.left {
          left: 16px;
        }

        .tour-arrow-btn.right {
          right: 16px;
        }

        .tour-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 38, 77, 0.92) 100%);
          padding: 30px 24px 18px;
          color: var(--color-white);
        }

        .tour-caption-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }

        .slide-counter {
          font-family: var(--font-accent);
          font-size: 0.72rem;
          font-weight: 700;
          color: #FFB088;
          text-transform: uppercase;
        }

        .loc-tag {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: #E2EBF5;
        }

        .slide-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 6px;
        }

        .slide-desc {
          font-size: 0.88rem;
          color: #CFE2FE;
          line-height: 1.5;
          max-width: 720px;
        }

        /* Thumb Strip */
        .tour-thumb-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          background-color: var(--color-peach-light);
          border-top: 1px solid var(--color-peach-border);
        }

        .tour-thumb-btn {
          padding: 12px 10px;
          border: none;
          background: none;
          text-align: left;
          border-right: 1px solid var(--color-peach-border);
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .tour-thumb-btn:last-child {
          border-right: none;
        }

        .tour-thumb-btn:hover {
          background-color: var(--color-white);
        }

        .tour-thumb-btn.active {
          background-color: var(--color-white);
          border-bottom: 3px solid var(--color-orange-primary);
        }

        .thumb-num {
          font-family: var(--font-accent);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-orange-dark);
        }

        .thumb-label {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--color-blue-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 768px) {
          .tour-viewport {
            height: 320px;
          }
          .slide-title {
            font-size: 1.15rem;
          }
          .tour-thumb-strip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
