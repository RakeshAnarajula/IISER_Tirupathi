import React from 'react';
import { 
  GraduationCap, 
  CreditCard, 
  ArrowRight, 
  Download, 
  Clock
} from 'lucide-react';
import styles from '../../styles/AdmissionsBanner.module.scss';

export function AdmissionsBanner({ onOpenAdmissions, onSelectPage }) {
  const steps = [
    {
      step: "01",
      title: "IAT 2026 Application",
      date: "Spring Cycle",
      desc: "Register online for the computer-based IISER Aptitude Test (IAT) across all major test centers in India."
    },
    {
      step: "02",
      title: "Results & Merit Allocation",
      date: "Summer Cycle",
      desc: "Centralized counselling rounds with preferred IISER choice filling and seat allotment."
    },
    {
      step: "03",
      title: "Acceptance & Fee Deposit",
      date: "Mid July",
      desc: "Confirm seat offer through the Samarth-eGov portal and secure hostel allocation."
    },
    {
      step: "04",
      title: "Yerpedu Campus Reporting",
      date: "Early September",
      desc: "Physical document verification, welcome orientation, and formal start of semester lectures."
    }
  ];

  return (
    <section id="admissions" className={styles.admissionsSection} aria-label="Admissions 2026 Roadmap">
      <div className="site-container">
        <div className={styles.admissionsMasterCard}>
          <div className={styles.admissionsBadgeRow}>
            <span className={styles.sectionTag}>
              <GraduationCap size={14} />
              Admissions Portal 2026
            </span>
            <div className={styles.countdownPill}>
              <Clock size={14} className={styles.clockIcon} />
              <span>BS-MS, MS(R), &amp; Ph.D. Applications Open</span>
            </div>
          </div>

          <div className={styles.admissionsHeaderContent}>
            <h2 className={styles.admissionsHeadline}>
              Begin Your Journey of Scientific Discovery at <span className={styles.accentOrange}>IISER Tirupati</span>
            </h2>
            <p className={styles.admissionsSubtext}>
              Join an elite cohort of aspiring scientists and researchers. Benefit from world-class laboratories, faculty mentorship, interdisciplinary flexibility, and generous national scholarships.
            </p>
          </div>

          {/* 4-Step Roadmap Grid */}
          <div className={styles.admissionStepsGrid}>
            {steps.map((item, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepNumberBubble}>
                  <span>{item.step}</span>
                </div>
                <div className={styles.stepTimeTag}>{item.date}</div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Scholarship & Funding Highlight Strip */}
          <div className={styles.scholarshipStrip}>
            <div className={styles.scholarshipInfo}>
              <span className={styles.scholarshipTitle}>Scholarships &amp; Research Fellowships:</span>
              <p className={styles.scholarshipDesc}>
                Eligible BS-MS students receive <strong>DST-INSPIRE</strong> scholarships (₹80,000/year). Ph.D. scholars receive full institute fellowship or <strong>PMRF</strong> (up to ₹80,000/month).
              </p>
            </div>
            <div className={styles.scholarshipTags}>
              <span className={styles.schPill}>DST-INSPIRE</span>
              <span className={styles.schPill}>PMRF Scheme</span>
              <span className={styles.schPill}>Visvesvaraya</span>
              <span className={styles.schPill}>CSIR-JRF</span>
            </div>
          </div>

          {/* CTA Footer Actions */}
          <div className={styles.admissionsActionFooter}>
            <button 
              type="button" 
              onClick={onOpenAdmissions}
              className={styles.btnPrimary}
            >
              <span>Apply Online (IAT 2026 Portal)</span>
              <ArrowRight size={17} />
            </button>

            <button 
              type="button" 
              onClick={() => onSelectPage && onSelectPage('admissions-info')} 
              className={styles.btnSecondary}
            >
              <CreditCard size={16} />
              <span>Fee Structure &amp; Policies</span>
            </button>

            <button 
              type="button" 
              onClick={onOpenAdmissions}
              className={styles.btnPeach}
            >
              <Download size={16} />
              <span>Download Admissions Brochure (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsBanner;

