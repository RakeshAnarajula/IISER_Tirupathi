import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, Download, ArrowRight, ShieldCheck, Mail, Phone, User } from 'lucide-react';
import '../../styles/AdmissionsModal.scss';

export function AdmissionsModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'BS-MS Dual Degree (5-Year)',
    year: '2026',
    query: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleDownloadBrochure = () => {
    const brochureText = `==============================================================================
INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH TIRUPATI
(An Autonomous Institute of National Importance, Ministry of Education, Govt. of India)
Permanent Campus: Srinivasapuram, Yerpedu Mandal, Tirupati District, AP - 517619
Official Portal: In-App Admissions Guidance
==============================================================================

OFFICIAL ADMISSIONS INFORMATION DOSSIER (ACADEMIC YEAR 2026-27)

1. DEGREE PROGRAMS OFFERED:
   - BS-MS Dual Degree (5-Year Interdisciplinary Science Program)
     Majors: Biology, Chemistry, Mathematics, Physics, Earth & Climate Sciences
   - Integrated PhD (I-PhD) in Biological, Chemical, Mathematical, Physical Sciences
   - Doctor of Philosophy (Ph.D.) Frontier Doctoral Research Fellowships
   - Master of Science (M.Sc.) Programs

2. ADMISSION CHANNELS & ELIGIBILITY:
   - IISER Aptitude Test (IAT 2026) - National Computer Based Entrance Test
   - Eligibility: 10+2 with Science stream (Physics, Chemistry, Mathematics/Biology)
   - I-PhD Admissions: JAM / JEST qualified candidates
   - PhD Admissions: CSIR-NET JRF / UGC-JRF / GATE / INSPIRE Fellows

3. FINANCIAL AID & FELLOWSHIPS:
   - 100% Tuition Fee Waiver for SC/ST and PwD candidates.
   - INSPIRE Scholarship support: Rs. 80,000 per annum for eligible BS-MS scholars.
   - Institute fellowship for all full-time Ph.D. scholars: Rs. 37,000 - Rs. 42,000/mo.

4. OFFICIAL CONTACT DESK:
   - Academic Section: academics@iisertirupati.ac.in | +91 (0877) 2166 012
   - Admissions Desk: admissions@iisertirupati.ac.in
==============================================================================`;

    const blob = new Blob([brochureText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'IISER_Tirupati_Admissions_Brochure_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="adm-modal-backdrop" onClick={onClose}>
      <div className="adm-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="adm-modal-header">
          <div className="adm-header-left">
            <div className="adm-header-icon">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="adm-header-title">Admissions Portal 2026</h3>
              <span className="adm-header-sub">Indian Institute of Science Education and Research Tirupati</span>
            </div>
          </div>
          <button type="button" onClick={onClose} className="adm-close-btn" aria-label="Close admissions modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="adm-modal-body">
          {submitted ? (
            <div className="adm-success-state">
              <div className="success-icon-bubble">
                <CheckCircle2 size={44} />
              </div>
              <h4 className="success-title">Application Inquiry Received!</h4>
              <p className="success-desc">
                Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.program}</strong> has been logged in the IISER Tirupati Academic Admissions Registry. Our counselling cell will contact you at <strong>{formData.email}</strong> with application schedules, syllabus, and brochure details.
              </p>
              <div className="success-action-row">
                <button 
                  type="button"
                  onClick={handleDownloadBrochure}
                  className="btn-primary"
                >
                  <Download size={16} />
                  <span>Download Official Brochure</span>
                </button>
                <button type="button" onClick={handleReset} className="btn-secondary">
                  Done / Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="adm-form">
              <div className="form-intro-banner">
                <ShieldCheck size={18} className="shield-icon" />
                <span>
                  Applications for <strong>IAT 2026</strong> and <strong>Autumn Ph.D. Cycle</strong> are currently active. Fill the quick form below to initiate your application or request guidance.
                </span>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <div className="input-with-icon">
                    <User size={16} className="field-icon" />
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Aditi Sharma" 
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <div className="input-with-icon">
                    <Mail size={16} className="field-icon" />
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="aditi@example.com" 
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <div className="input-with-icon">
                    <Phone size={16} className="field-icon" />
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210" 
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Admission Year</label>
                  <select 
                    value={formData.year} 
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    className="form-select"
                  >
                    <option value="2026">2026 Academic Batch</option>
                    <option value="2027">2027 Academic Batch</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Program of Interest *</label>
                <select 
                  value={formData.program} 
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                  className="form-select"
                >
                  <option value="BS-MS Dual Degree (5-Year)">BS-MS Dual Degree (5-Year Integrated Science)</option>
                  <option value="BS in Earth & Climate Sciences">BS in Earth &amp; Climate Sciences (4-Year Honors)</option>
                  <option value="Two-Year MS (Research)">Two-Year Master of Science – Research MS(R)</option>
                  <option value="Integrated Ph.D. Program">Integrated Ph.D. (Post-Bachelor Degree)</option>
                  <option value="Doctor of Philosophy (Ph.D.)">Doctor of Philosophy (Ph.D. Regular)</option>
                  <option value="Joint Ph.D. (Melbourne / BITS)">Joint Ph.D. (Univ of Melbourne / BITS Pilani)</option>
                  <option value="Professional Master's Program">One-Year Professional Master's Program</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Questions or Academic Background (Optional)</label>
                <textarea 
                  rows={3} 
                  value={formData.query}
                  onChange={(e) => setFormData({...formData, query: e.target.value})}
                  placeholder="Mention your qualifying exam (e.g., 12th Board, JEE, JAM, GATE, CSIR-NET) or any specific inquiry..." 
                  className="form-textarea"
                />
              </div>

              <div className="form-footer-actions">
                <button type="submit" className="btn-primary form-submit-btn">
                  <span>Submit Inquiry &amp; Access Brochure</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

