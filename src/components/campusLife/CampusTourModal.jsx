import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Compass, MapPin } from 'lucide-react';
import '../../styles/CampusTourModal.module.scss';

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
    </div>
  );
}

