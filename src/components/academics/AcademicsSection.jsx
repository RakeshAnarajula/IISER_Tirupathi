import React, { useState } from 'react';
import { academicPrograms, departments } from '../../constants/mockData';
import { 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Atom, 
  FlaskConical, 
  Dna, 
  Globe2, 
  Binary, 
  BookOpenCheck,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import styles from '../../styles/AcademicsSection.module.scss';

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

  const filteredPrograms = academicPrograms.filter(prog => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ug') return prog.level === 'Undergraduate';
    if (activeTab === 'pg') return prog.level === 'Postgraduate' || prog.level === 'Professional';
    if (activeTab === 'phd') return prog.level === 'Doctoral' || prog.level === 'Integrated Doctoral';
    return true;
  });

  return (
    <section id="academics" className={styles.academicsSection} aria-label="Academics and Degree Programs">
      <div className="site-container">
        {/* Section Header */}
        <div className={styles.sectionHeadCenter}>
          <span className={styles.sectionTag}>
            <BookOpen size={14} />
            Academic Excellence
          </span>
          <h2 className={styles.sectionTitle}>
            Rigorous Science Education, <br />
            <span className={styles.accentOrange}>Boundless Curiosity</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            IISER Tirupati's pedagogical framework seamlessly blends classroom inquiry with active lab benches from the very first semester, preparing future scientific leaders.
          </p>

          {/* Program Tabs */}
          <div className={styles.programsTabBar}>
            <button 
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.active : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Degree Programs
            </button>
            <button 
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'ug' ? styles.active : ''}`}
              onClick={() => setActiveTab('ug')}
            >
              Undergraduate (BS-MS)
            </button>
            <button 
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'pg' ? styles.active : ''}`}
              onClick={() => setActiveTab('pg')}
            >
              Master's &amp; Professional
            </button>
            <button 
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'phd' ? styles.active : ''}`}
              onClick={() => setActiveTab('phd')}
            >
              Doctoral (I-PhD &amp; PhD)
            </button>
          </div>
        </div>

        {/* Programs Cards Grid */}
        <div className={styles.programsCardsGrid}>
          {filteredPrograms.map((prog) => (
            <div key={prog.id} className={styles.programCard}>
              <div className={styles.programCardHeader}>
                <span className={styles.progLevelBadge}>{prog.level}</span>
                <span className={styles.progDuration}>
                  <Clock size={13} />
                  {prog.duration}
                </span>
              </div>

              <h3 className={styles.progTitle}>{prog.title}</h3>
              <p className={styles.progOverview}>{prog.overview}</p>

              <div className={styles.progAdmissionBox}>
                <span className={styles.admLabel}>Admission:</span>
                <span className={styles.admVal}>{prog.admissionVia}</span>
              </div>

              <div className={styles.progHighlightsBox}>
                <span className={styles.hlTitle}>Key Highlights:</span>
                <ul className={styles.hlList}>
                  {prog.highlights.map((hl, i) => (
                    <li key={i}>
                      <CheckCircle2 size={13} />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.progCardFooter}>
                <button 
                  type="button" 
                  onClick={onOpenAdmissions}
                  className={styles.progCtaBtn}
                >
                  <span>Apply / Eligibility</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Department Explorer Section */}
        <div id="departments" className={styles.departmentsBlock}>
          <div className={styles.deptHeaderRow}>
            <div>
              <span className={styles.sectionTag}>
                <Atom size={14} />
                Academic Departments
              </span>
              <h3 className={styles.sectionTitle}>
                Six Core Disciplines, <br />
                <span className={styles.accentOrange}>Infinite Intersections</span>
              </h3>
            </div>
            <p className={styles.deptHeaderDesc}>
              Cross-disciplinary synergy allows faculty and students to investigate biological questions with quantum optics, and tackle environmental challenges with synthetic molecular frameworks.
            </p>
          </div>

          <div className={styles.departmentsGrid}>
            {departments.map((dept) => {
              const IconComp = deptIcons[dept.id] || Atom;
              return (
                <div key={dept.id} className={styles.deptCard}>
                  <div className={styles.deptCardTop}>
                    <div className={styles.deptIconBox}>
                      <IconComp size={24} />
                    </div>
                    <div className={styles.deptMetaPills}>
                      <span className={styles.deptPill}>{dept.facultyCount}</span>
                      <span className={`${styles.deptPill} ${styles.peach}`}>{dept.studentsCount}</span>
                    </div>
                  </div>

                  <h4 className={styles.deptName}>{dept.name}</h4>
                  <p className={styles.deptDesc}>{dept.description}</p>

                  <div className={styles.deptSpecsBox}>
                    <span className={styles.specsLabel}>Specializations:</span>
                    <div className={styles.specsTagCloud}>
                      {dept.specializations.map((spec, sIdx) => (
                        <span key={sIdx} className={styles.specTag}>{spec}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.deptCifBox}>
                    <span className={styles.cifLabel}>Core Lab Equipment:</span>
                    <span className={styles.cifVal}>{dept.cifTools}</span>
                  </div>

                  <div className={styles.deptFooter}>
                    <span className={styles.deptHeadTxt}>Head: <strong>{dept.head}</strong></span>
                    <a href="#admissions" className={styles.deptLink} onClick={onOpenAdmissions}>
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
    </section>
  );
}

export default AcademicsSection;

