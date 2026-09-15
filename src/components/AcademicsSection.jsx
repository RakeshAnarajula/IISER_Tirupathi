import React, { useState } from 'react';
import { academicPrograms, departments } from '../data/mockData';
import { 
  GraduationCap, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Atom, 
  FlaskConical, 
  Dna, 
  Globe2, 
  Binary, 
  BookOpenCheck,
  ChevronRight,
  Download
} from 'lucide-react';

const deptIcons = {
  biology: Dna,
  chemistry: FlaskConical,
  physics: Atom,
  earth: Globe2,
  math: Binary,
  hss: BookOpenCheck
};

export function AcademicsSection({ onOpenAdmissions }) {
  const [activeTab, setActiveTab] = useState('all');
  const [activeDeptTab, setActiveDeptTab] = useState('all');

  const filteredPrograms = academicPrograms.filter(prog => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ug') return prog.level === 'Undergraduate';
    if (activeTab === 'pg') return prog.level === 'Postgraduate' || prog.level === 'Professional';
    if (activeTab === 'phd') return prog.level === 'Doctoral' || prog.level === 'Integrated Doctoral';
    return true;
  });

  return (
    <section id="academics" className="academic-section bg-white" aria-label="Academics and Degree Programs">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-head-center">
          <span className="section-tag blue-tag">
            <BookOpen size={14} />
            Academic Excellence
          </span>
          <h2 className="section-title">
            Rigorous Science Education, <br />
            <span className="accent-orange">Boundless Curiosity</span>
          </h2>
          <p className="section-subtitle">
            IISER Tirupati's pedagogical framework seamlessly blends classroom inquiry with active lab benches from the very first semester, preparing future scientific leaders.
          </p>

          {/* Program Tabs */}
          <div className="programs-tab-bar">
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Degree Programs
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'ug' ? 'active' : ''}`}
              onClick={() => setActiveTab('ug')}
            >
              Undergraduate (BS-MS)
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'pg' ? 'active' : ''}`}
              onClick={() => setActiveTab('pg')}
            >
              Master's &amp; Professional
            </button>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'phd' ? 'active' : ''}`}
              onClick={() => setActiveTab('phd')}
            >
              Doctoral (I-PhD &amp; PhD)
            </button>
          </div>
        </div>

        {/* Programs Cards Grid */}
        <div className="programs-cards-grid">
          {filteredPrograms.map((prog) => (
            <div key={prog.id} className="program-card">
              <div className="program-card-header">
                <span className="prog-level-badge">{prog.level}</span>
                <span className="prog-duration">
                  <Clock size={13} />
                  {prog.duration}
                </span>
              </div>

              <h3 className="prog-title">{prog.title}</h3>
              <p className="prog-overview">{prog.overview}</p>

              <div className="prog-admission-box">
                <span className="adm-label">Admission Channel:</span>
                <span className="adm-val">{prog.admissionVia}</span>
              </div>

              <div className="prog-highlights-box">
                <span className="hl-title">Key Highlights:</span>
                <ul className="hl-list">
                  {prog.highlights.map((hl, i) => (
                    <li key={i}>
                      <CheckCircle2 size={13} className="check-icon" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="prog-card-footer">
                <button 
                  type="button" 
                  onClick={onOpenAdmissions}
                  className="btn-peach prog-cta-btn"
                >
                  <span>Apply / Eligibility</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Department Explorer Section */}
        <div id="departments" className="departments-block">
          <div className="dept-header-row">
            <div>
              <span className="section-tag">
                <Atom size={14} />
                Academic Departments
              </span>
              <h3 className="section-title">
                Six Core Disciplines, <br />
                <span className="accent-orange">Infinite Intersections</span>
              </h3>
            </div>
            <p className="dept-header-desc">
              Cross-disciplinary synergy allows faculty and students to investigate biological questions with quantum optics, and tackle environmental challenges with synthetic molecular frameworks.
            </p>
          </div>

          <div className="departments-grid">
            {departments.map((dept) => {
              const IconComp = deptIcons[dept.id] || Atom;
              return (
                <div key={dept.id} className="dept-card">
                  <div className="dept-card-top">
                    <div className="dept-icon-box">
                      <IconComp size={24} />
                    </div>
                    <div className="dept-meta-pills">
                      <span className="dept-pill">{dept.facultyCount}</span>
                      <span className="dept-pill peach">{dept.studentsCount}</span>
                    </div>
                  </div>

                  <h4 className="dept-name">{dept.name}</h4>
                  <p className="dept-desc">{dept.description}</p>

                  <div className="dept-specs-box">
                    <span className="specs-label">Specializations:</span>
                    <div className="specs-tag-cloud">
                      {dept.specializations.map((spec, sIdx) => (
                        <span key={sIdx} className="spec-tag">{spec}</span>
                      ))}
                    </div>
                  </div>

                  <div className="dept-cif-box">
                    <span className="cif-label">Core Lab Equipment:</span>
                    <span className="cif-val">{dept.cifTools}</span>
                  </div>

                  <div className="dept-footer">
                    <span className="dept-head-txt">Head: <strong>{dept.head}</strong></span>
                    <a href="#admissions" className="dept-link" onClick={onOpenAdmissions}>
                      <span>Explore Dept</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .section-head-center {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
        }

        .section-head-center .section-subtitle {
          margin-left: auto;
          margin-right: auto;
        }

        /* Program Tabs */
        .programs-tab-bar {
          display: inline-flex;
          align-items: center;
          background-color: var(--color-blue-tint);
          border: 1px solid var(--color-border-light);
          padding: 6px;
          border-radius: var(--radius-pill);
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tab-btn {
          padding: 9px 20px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-blue-primary);
          border-radius: var(--radius-pill);
          transition: all var(--transition-fast);
        }

        .tab-btn:hover {
          color: var(--color-orange-primary);
        }

        .tab-btn.active {
          background-color: var(--color-white);
          color: var(--color-orange-dark);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-peach-accent);
        }

        /* Programs Cards Grid */
        .programs-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 80px;
        }

        .program-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: all var(--transition-base);
          position: relative;
        }

        .program-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 59, 115, 0.08);
          border-color: var(--color-peach-accent);
        }

        .program-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .prog-level-badge {
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: var(--radius-pill);
        }

        .prog-duration {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .prog-title {
          font-family: var(--font-serif);
          font-size: 1.38rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .prog-overview {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .prog-admission-box {
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          margin-bottom: 16px;
          display: flex;
          align-items: baseline;
          gap: 6px;
          font-size: 0.8rem;
        }

        .adm-label {
          color: var(--color-orange-dark);
          font-weight: 700;
        }

        .adm-val {
          color: var(--color-text-primary);
          font-weight: 600;
        }

        .prog-highlights-box {
          flex: 1;
          margin-bottom: 22px;
        }

        .hl-title {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-blue-deep);
          margin-bottom: 8px;
          display: block;
        }

        .hl-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hl-list li {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          color: var(--color-text-secondary);
        }

        .check-icon {
          color: var(--color-orange-primary);
          flex-shrink: 0;
        }

        .prog-card-footer {
          margin-top: auto;
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 16px;
        }

        .prog-cta-btn {
          width: 100%;
          justify-content: space-between;
        }

        /* 2. Departments Block */
        .departments-block {
          background: linear-gradient(180deg, var(--color-peach-light) 0%, #FFFFFF 100%);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-xl);
          padding: 50px 40px;
        }

        .dept-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 40px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--color-peach-accent);
        }

        .dept-header-desc {
          max-width: 480px;
          font-size: 0.98rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .departments-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .dept-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 24px 20px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: all var(--transition-base);
        }

        .dept-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 59, 115, 0.08);
          border-color: var(--color-blue-bright);
        }

        .dept-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .dept-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dept-meta-pills {
          display: flex;
          gap: 6px;
        }

        .dept-pill {
          font-size: 0.7rem;
          font-weight: 700;
          background-color: var(--color-canvas);
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border-light);
          padding: 3px 8px;
          border-radius: var(--radius-pill);
        }

        .dept-pill.peach {
          background-color: var(--color-peach-base);
          color: var(--color-orange-dark);
          border-color: var(--color-peach-accent);
        }

        .dept-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-bottom: 8px;
        }

        .dept-desc {
          font-size: 0.84rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .dept-specs-box {
          margin-bottom: 14px;
          flex: 1;
        }

        .specs-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-text-muted);
          display: block;
          margin-bottom: 6px;
        }

        .specs-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .spec-tag {
          font-size: 0.72rem;
          background-color: var(--color-blue-tint);
          color: var(--color-blue-primary);
          padding: 2px 7px;
          border-radius: 4px;
        }

        .dept-cif-box {
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          padding: 6px 10px;
          font-size: 0.75rem;
          margin-bottom: 16px;
        }

        .cif-label {
          font-weight: 700;
          color: var(--color-text-secondary);
          display: block;
        }

        .cif-val {
          color: var(--color-text-muted);
        }

        .dept-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid var(--color-border-subtle);
        }

        .dept-head-txt {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .dept-link {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-blue-bright);
        }

        /* Responsive */
        @media (max-width: 1080px) {
          .programs-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .departments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dept-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .programs-cards-grid,
          .departments-grid {
            grid-template-columns: 1fr;
          }
          .departments-block {
            padding: 30px 18px;
          }
        }
      `}</style>
    </section>
  );
}
