import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  FileCheck2, 
  CreditCard, 
  BookOpen, 
  ArrowRight, 
  Download, 
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';

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
    <section id="admissions" className="academic-section bg-white" aria-label="Admissions 2026 Roadmap">
      <div className="site-container">
        {/* Stanford-Style Framed Academic Card */}
        <div className="admissions-master-card">
          <div className="admissions-badge-row">
            <span className="section-tag">
              <GraduationCap size={14} />
              Admissions Portal 2026
            </span>
            <div className="countdown-pill">
              <Clock size={14} className="clock-icon" />
              <span>BS-MS, MS(R), &amp; Ph.D. Applications Open</span>
            </div>
          </div>

          <div className="admissions-header-content">
            <h2 className="admissions-headline">
              Begin Your Journey of Scientific Discovery at <span className="accent-orange">IISER Tirupati</span>
            </h2>
            <p className="admissions-subtext">
              Join an elite cohort of aspiring scientists and researchers. Benefit from world-class laboratories, faculty mentorship, interdisciplinary flexibility, and generous national scholarships.
            </p>
          </div>

          {/* 4-Step Roadmap Grid */}
          <div className="admission-steps-grid">
            {steps.map((item, idx) => (
              <div key={idx} className="step-card">
                <div className="step-number-bubble">
                  <span>{item.step}</span>
                </div>
                <div className="step-time-tag">{item.date}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Scholarship & Funding Highlight Strip */}
          <div className="scholarship-strip">
            <div className="scholarship-info">
              <span className="scholarship-title">Scholarships &amp; Research Fellowships:</span>
              <p className="scholarship-desc">
                Eligible BS-MS students receive <strong>DST-INSPIRE</strong> scholarships (₹80,000/year). Ph.D. scholars receive full institute fellowship or <strong>PMRF</strong> (up to ₹80,000/month).
              </p>
            </div>
            <div className="scholarship-tags">
              <span className="sch-pill">DST-INSPIRE</span>
              <span className="sch-pill">PMRF Scheme</span>
              <span className="sch-pill">Visvesvaraya</span>
              <span className="sch-pill">CSIR-JRF</span>
            </div>
          </div>

          {/* CTA Footer Actions */}
          <div className="admissions-action-footer">
            <button 
              type="button" 
              onClick={onOpenAdmissions}
              className="btn-primary adm-primary-btn"
            >
              <span>Apply Online (IAT 2026 Portal)</span>
              <ArrowRight size={17} />
            </button>

            <button 
              type="button"
              onClick={() => onSelectPage && onSelectPage('fee-payment-policies')} 
              className="btn-secondary adm-sec-btn"
            >
              <CreditCard size={16} />
              <span>Fee Structure &amp; Policies</span>
            </button>

            <button 
              type="button" 
              onClick={onOpenAdmissions}
              className="btn-peach adm-brochure-btn"
            >
              <Download size={16} />
              <span>Download Admissions Brochure (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .admissions-master-card {
          background: linear-gradient(180deg, #FFFDFB 0%, var(--color-peach-light) 100%);
          border: 1.5px solid var(--color-peach-accent);
          border-radius: var(--radius-xl);
          padding: 48px 44px;
          box-shadow: 0 12px 36px rgba(255, 87, 34, 0.08);
          position: relative;
        }

        .admissions-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .countdown-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-white);
          border: 1px solid var(--color-peach-accent);
          color: var(--color-orange-dark);
          padding: 5px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 700;
        }

        .clock-icon {
          color: var(--color-orange-primary);
        }

        .admissions-header-content {
          max-width: 820px;
          margin-bottom: 38px;
        }

        .admissions-headline {
          font-family: var(--font-serif);
          font-size: 2.35rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .admissions-subtext {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
        }

        /* 4-Step Grid */
        .admission-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 34px;
        }

        .step-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 24px 20px;
          box-shadow: var(--shadow-sm);
          position: relative;
          transition: all var(--transition-base);
        }

        .step-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-orange-primary);
          box-shadow: var(--shadow-md);
        }

        .step-number-bubble {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--color-peach-base);
          color: var(--color-orange-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-accent);
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .step-time-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-blue-bright);
          margin-bottom: 6px;
        }

        .step-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .step-desc {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        /* Scholarship Strip */
        .scholarship-strip {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 16px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 34px;
          flex-wrap: wrap;
        }

        .scholarship-title {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-right: 6px;
        }

        .scholarship-desc {
          font-size: 0.84rem;
          color: var(--color-text-secondary);
          display: inline;
        }

        .scholarship-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .sch-pill {
          font-size: 0.72rem;
          font-weight: 700;
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
        }

        /* Action Footer */
        .admissions-action-footer {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .adm-primary-btn {
          padding: 13px 26px;
          font-size: 0.96rem;
        }

        .adm-sec-btn {
          padding: 12px 22px;
          font-size: 0.92rem;
        }

        .adm-brochure-btn {
          padding: 12px 20px;
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 1080px) {
          .admission-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .admissions-master-card {
            padding: 28px 20px;
          }
          .admissions-headline {
            font-size: 1.85rem;
          }
          .admission-steps-grid {
            grid-template-columns: 1fr;
          }
          .scholarship-strip {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
