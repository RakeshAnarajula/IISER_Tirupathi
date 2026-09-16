import React, { useState, useEffect } from 'react';
import { aboutAndPeopleData } from '../constants/aboutAndPeopleData';
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronDown, 
  Download, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  FileText, 
  Award, 
  Users, 
  BookOpen, 
  Sparkles, 
  ShieldCheck,
  Phone,
  Send,
  AlertCircle,
  Clock,
  Plane,
  Train,
  Bus,
  Briefcase,
  ExternalLink
} from 'lucide-react';

function OfficerAvatar({ name, image }) {
  const [errorImg, setErrorImg] = useState(null);
  const hasError = !!image && errorImg === image;

  const cleanName = name ? name.replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.|Lt\s+Cdr\.)\s+/i, '').trim() : 'Staff';
  const initials = cleanName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();

  if (!image || hasError) {
    return (
      <div className="officer-avatar fallback-avatar">
        <span className="officer-initials">{initials || 'ST'}</span>
      </div>
    );
  }

  const safeSrc = encodeURI(image);

  return (
    <div className="officer-avatar">
      <img
        src={safeSrc}
        alt={name}
        className="officer-img"
        onError={() => setErrorImg(image)}
        loading="lazy"
      />
    </div>
  );
}

export function InstitutionalPage({ pageKey, onNavigate, onBack }) {
  const page = aboutAndPeopleData[pageKey] || aboutAndPeopleData["the-institute"];
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [appliedCareerId, setAppliedCareerId] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Academic Section (Admissions)',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      alert('Please fill out Name, Email, and Message before submitting.');
      return;
    }
    setContactSubmitted(true);
  };

  // Filter sibling pages for sidebar
  const siblings = Object.entries(aboutAndPeopleData)
    .filter(([, data]) => data.category === page.category)
    .map(([key, data]) => ({ key, title: data.title }));

  return (
    <div className="inst-page-wrapper">
      {/* 1. Page Header & Breadcrumbs Strip */}
      <div className="inst-page-topbar">
        <div className="site-container-wide topbar-inner">
          <button type="button" onClick={onBack} className="back-btn">
            <ArrowLeft size={16} />
            <span>Back to Homepage</span>
          </button>

          <nav className="inst-breadcrumbs" aria-label="Breadcrumbs">
            {page.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={13} className="crumb-arrow" />}
                <span className={idx === page.breadcrumbs.length - 1 ? "crumb-current" : "crumb-item"}>
                  {crumb}
                </span>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* 2. Hero Banner for Institutional Page */}
      <div className="inst-page-hero">
        <div className="site-container-wide">
          <div className="hero-box">
            <span className="inst-cat-badge">{page.category}</span>
            <h1 className="inst-page-title">{page.title}</h1>
            <p className="inst-page-sub">{page.subtitle}</p>
            <span className="inst-page-tagline">{page.tagline}</span>
          </div>
        </div>
      </div>

      {/* 3. Main Body: Sidebar + Editorial Content */}
      <div className="site-container-wide inst-body-container">
        {/* Mobile Submenu Accordion Toggle */}
        <div className="mobile-category-bar">
          <button 
            type="button" 
            className="mobile-category-toggle"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            aria-expanded={mobileSidebarOpen}
          >
            <div className="toggle-left">
              <BookOpen size={16} className="text-orange" />
              <span>{page.category}: <strong>{page.title}</strong></span>
            </div>
            <ChevronDown size={18} className={`toggle-chevron ${mobileSidebarOpen ? 'rotate' : ''}`} />
          </button>

          {mobileSidebarOpen && (
            <div className="mobile-siblings-dropdown animate-fade">
              {siblings.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={`mobile-sibling-btn ${item.key === pageKey ? 'active' : ''}`}
                  onClick={() => {
                    setMobileSidebarOpen(false);
                    onNavigate(item.key);
                  }}
                >
                  <span>{item.title}</span>
                  {item.key === pageKey && <CheckCircle2 size={14} className="active-icon" />}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="inst-body-grid">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="inst-sidebar">
            <div className="sidebar-card">
              <h2 className="sidebar-heading">
                <BookOpen size={16} />
                <span>{page.category} Menu</span>
              </h2>
              <ul className="sidebar-list">
                {siblings.map((item) => (
                  <li key={item.key}>
                    <button
                      type="button"
                      className={`sidebar-nav-btn ${item.key === pageKey ? 'active' : ''}`}
                      onClick={() => onNavigate(item.key)}
                    >
                      <span>{item.title}</span>
                      <ChevronRight size={14} className="sidebar-arrow" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact & Accreditation Card */}
            <div className="sidebar-meta-card">
              <span className="meta-card-tag">Official Mandate</span>
              <h3 className="meta-card-title">IISER Tirupati</h3>
              <p className="meta-card-text">
                An Autonomous Institute of National Importance under Ministry of Education, Govt. of India.
              </p>
              <div className="meta-campus-loc">
                <MapPin size={14} className="pin-icon" />
                <span>Yerpedu Permanent Campus, Tirupati Dist, AP - 517619</span>
              </div>
            </div>
          </aside>

          {/* Main Editorial Content */}
          <main className="inst-main-content">
            {/* Lead Callout */}
            {page.content.lead && (
              <div className="inst-lead-box">
                <p className="lead-paragraph">{page.content.lead}</p>
              </div>
            )}

            {/* Quick Stats if present */}
            {page.content.quickStats && (
              <div className="inst-stats-strip">
                {page.content.quickStats.map((stat, i) => (
                  <div key={i} className="stat-card">
                    <span className="stat-card-val">{stat.value}</span>
                    <span className="stat-card-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Generic Text Sections (when not containing member cards) */}
            {page.content.sections && !page.content.sections[0]?.members && (
              <div className="inst-text-sections">
                {page.content.sections.map((sec, i) => (
                  <div key={i} className="inst-section-block">
                    {sec.heading && <h2 className="inst-sec-heading">{sec.heading}</h2>}
                    {sec.text && <p className="inst-sec-text">{sec.text}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Staff / Administration Sections (grouped by department/division) */}
            {((page.content.staffSections) || (page.content.sections && page.content.sections[0]?.members)) && (
              <div className="inst-staff-sections-stack">
                {(page.content.staffSections || page.content.sections).map((sec, i) => (
                  <div key={i} className="staff-dept-group">
                    <h2 className="inst-sec-heading staff-sec-heading">{sec.section || sec.heading}</h2>
                    <div className="officers-grid">
                      {sec.members?.map((member, mIdx) => {
                        const rawPhone = member.phone;
                        const displayPhone = rawPhone 
                          ? (rawPhone.startsWith('+') || rawPhone.startsWith('0') 
                              ? rawPhone 
                              : `0877 2500 ${rawPhone}`)
                          : null;
                        const telPhone = rawPhone 
                          ? (rawPhone.startsWith('+') 
                              ? rawPhone 
                              : (rawPhone.startsWith('0') ? `+91${rawPhone.substring(1)}` : `+918772500${rawPhone}`))
                          : null;
                        return (
                          <div key={mIdx} className="officer-card">
                            <OfficerAvatar name={member.name} image={member.image} />
                            <div className="officer-info">
                              <h3 className="officer-name">{member.name}</h3>
                              <span className="officer-role">{member.role}</span>
                              {displayPhone && (
                                <a href={`tel:${telPhone}`} className="officer-phone" title={`Call ${member.name}`}>
                                  <Phone size={13} />
                                  <span>{displayPhone}</span>
                                </a>
                              )}
                              {member.email && (
                                <a href={`mailto:${member.email}`} className="officer-email" title={`Email ${member.name}`}>
                                  <Mail size={13} />
                                  <span>{member.email}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Board of Governors Members Table */}
            {page.content.members && (
              <div className="inst-table-section">
                <h2 className="inst-sec-heading">Governing Council Members</h2>
                <div className="members-table-wrapper">
                  <table className="inst-data-table">
                    <thead>
                      <tr>
                        <th>Role</th>
                        <th>Name</th>
                        <th>Designation / Representation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.content.members.map((m, i) => (
                        <tr key={i}>
                          <td className="bold-role">{m.role}</td>
                          <td className="bold-name">{m.name}</td>
                          <td>{m.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Faculty Department Breakdown */}
            {page.content.departments && (
              <div className="inst-faculty-section">
                <h2 className="inst-sec-heading">Faculty Directory by Department</h2>
                <div className="faculty-dept-stack">
                  {page.content.departments.map((dept, i) => (
                    <div key={i} className="dept-faculty-group">
                      <h3 className="dept-group-title">{dept.dept}</h3>
                      <div className="dept-faculty-grid">
                        {dept.members.map((prof, pIdx) => {
                          const rawPhone = prof.phone ? String(prof.phone).trim() : null;
                          const displayPhone = rawPhone
                            ? (rawPhone.startsWith('+') || rawPhone.startsWith('0')
                                ? rawPhone
                                : (rawPhone.startsWith('8772500')
                                    ? `0877 2500 ${rawPhone.substring(7)}`
                                    : `0877 2500 ${rawPhone}`))
                            : null;
                          const telPhone = rawPhone
                            ? (rawPhone.startsWith('+')
                                ? rawPhone
                                : (rawPhone.startsWith('0')
                                    ? `+91${rawPhone.substring(1)}`
                                    : (rawPhone.startsWith('8772500')
                                        ? `+91${rawPhone}`
                                        : `+918772500${rawPhone}`)))
                            : null;
                          const email = prof.email
                            ? (prof.email.includes('@') ? prof.email : `${prof.email}@iisertirupati.ac.in`)
                            : null;

                          return (
                            <div key={pIdx} className="faculty-card-mini">
                              <OfficerAvatar name={prof.name} image={prof.image} />
                              <div className="fac-details">
                                <h4 className="fac-prof-name">{prof.name}</h4>
                                <span className="fac-prof-role">{prof.role}</span>
                                {prof.area && <span className="fac-prof-area">Focus: {prof.area}</span>}
                                {(displayPhone || email) && (
                                  <div className="fac-contact-row">
                                    {displayPhone && (
                                      <a href={`tel:${telPhone}`} className="fac-contact-link" title={`Call ${prof.name}`}>
                                        <Phone size={12} />
                                        <span>{displayPhone}</span>
                                      </a>
                                    )}
                                    {email && (
                                      <a href={`mailto:${email}`} className="fac-contact-link" title={`Email ${prof.name}`}>
                                        <Mail size={12} />
                                        <span>{email}</span>
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Administration Officers */}
            {page.content.officers && (
              <div className="inst-officers-section">
                <h2 className="inst-sec-heading">Executive &amp; Academic Administration</h2>
                <div className="officers-grid">
                  {page.content.officers.map((off, i) => {
                    const rawPhone = off.phone;
                    const displayPhone = rawPhone 
                      ? (rawPhone.startsWith('+') || rawPhone.startsWith('0') 
                          ? rawPhone 
                          : `0877 2500 ${rawPhone}`)
                      : null;
                    const telPhone = rawPhone 
                      ? (rawPhone.startsWith('+') 
                          ? rawPhone 
                          : (rawPhone.startsWith('0') ? `+91${rawPhone.substring(1)}` : `+918772500${rawPhone}`))
                      : null;
                    return (
                      <div key={i} className="officer-card">
                        <OfficerAvatar name={off.name} image={off.image} />
                        <div className="officer-info">
                          <h3 className="officer-name">{off.name}</h3>
                          <span className="officer-role">{off.role}</span>
                          {displayPhone && (
                            <a href={`tel:${telPhone}`} className="officer-phone" title={`Call ${off.name}`}>
                              <Phone size={13} />
                              <span>{displayPhone}</span>
                            </a>
                          )}
                          {off.email && (
                            <a href={`mailto:${off.email}`} className="officer-email" title={`Email ${off.name}`}>
                              <Mail size={13} />
                              <span>{off.email}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Postdoctoral Fellows */}
            {page.content.fellows && (
              <div className="inst-fellows-section">
                <h2 className="inst-sec-heading">Postdoctoral Scholars &amp; Research Fellows</h2>
                <div className="fellows-grid">
                  {page.content.fellows.map((fel, i) => (
                    <div key={i} className="fellow-card">
                      <OfficerAvatar name={fel.name} image={fel.image} />
                      <div className="fellow-info">
                        <div className="fellow-header">
                          <h3 className="fellow-name">{fel.name}</h3>
                          {fel.department && <span className="fellow-dept-badge">{fel.department}</span>}
                        </div>
                        <span className="fellow-designation">{fel.designation || fel.role}</span>
                        {fel.mentor && (
                          <span className="fellow-mentor">Mentor: <strong>{fel.mentor}</strong></span>
                        )}
                        {fel.domain && (
                          <span className="fellow-domain">{fel.domain}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PMRF Scholars */}
            {(page.content.scholars || page.content.currentScholars) && (
              <div className="inst-pmrf-section">
                <h2 className="inst-sec-heading">PMRF Doctoral Fellows at IISER Tirupati</h2>
                
                {page.content.links && page.content.links.length > 0 && (
                  <div className="pmrf-links-strip">
                    {page.content.links.map((lnk, lIdx) => lnk.url ? (
                      <a key={lIdx} href={lnk.url} target="_blank" rel="noreferrer" className="pmrf-resource-btn">
                        <ExternalLink size={14} />
                        <span>{lnk.label}</span>
                      </a>
                    ) : null)}
                  </div>
                )}

                <div className="pmrf-grid">
                  {(page.content.scholars || page.content.currentScholars).map((sch, i) => (
                    <div key={i} className="pmrf-card">
                      <OfficerAvatar name={sch.name} image={sch.image} />
                      <div className="pmrf-info">
                        <div className="pmrf-header">
                          <h3 className="pmrf-name">{sch.name}</h3>
                          {(sch.department || sch.dept) && (
                            <span className="pmrf-dept-badge">{sch.department || sch.dept}</span>
                          )}
                        </div>

                        {(sch.rollNo || sch.yearOfJoining) && (
                          <div className="pmrf-pills-row">
                            {sch.rollNo && <span className="pmrf-pill">Roll: {sch.rollNo}</span>}
                            {sch.yearOfJoining && <span className="pmrf-pill">Joined: {sch.yearOfJoining}</span>}
                          </div>
                        )}

                        {(sch.broadArea || sch.topic) && (sch.broadArea !== '—') && (
                          <div className="pmrf-meta-item">
                            <strong>Research:</strong> {sch.broadArea || sch.topic}
                          </div>
                        )}

                        {sch.advisor && (
                          <div className="pmrf-meta-item">
                            <strong>Advisor:</strong> {sch.advisor}
                          </div>
                        )}

                        {sch.email && (
                          <a href={`mailto:${sch.email}`} className="pmrf-email-link" title={`Email ${sch.name}`}>
                            <Mail size={12} />
                            <span>{sch.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents & Reports List */}
            {page.content.reports && (
              <div className="inst-reports-section">
                <h2 className="inst-sec-heading">Downloadable Institutional Reports</h2>
                <div className="reports-stack">
                  {page.content.reports.map((rep, i) => (
                    <div key={i} className="report-row">
                      <div className="report-icon">
                        <FileText size={20} />
                      </div>
                      <div className="report-meta">
                        <h3 className="report-title">{rep.year}</h3>
                        <span className="report-sub">{rep.highlights} • {rep.size}</span>
                      </div>
                      <a href="#" className="btn-peach report-dl-btn" onClick={(e) => { e.preventDefault(); alert(`Downloading ${rep.year}...`); }}>
                        <Download size={14} />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NIRF Metrics Breakdown */}
            {page.content.metrics && (
              <div className="inst-nirf-section">
                <h2 className="inst-sec-heading">NIRF Institutional Scores</h2>
                <div className="nirf-cards-stack">
                  {page.content.metrics.map((m, i) => (
                    <div key={i} className="nirf-metric-card">
                      <div className="nirf-param-title">{m.parameter}</div>
                      <div className="nirf-score-badge">{m.score}</div>
                      <div className="nirf-note">{m.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Senate Functions */}
            {page.content.functions && (
              <div className="inst-functions-section">
                <h2 className="inst-sec-heading">Key Powers and Responsibilities</h2>
                <div className="functions-grid">
                  {page.content.functions.map((fn, i) => (
                    <div key={i} className="function-card">
                      <CheckCircle2 size={20} className="check-icon" />
                      <p className="function-text">{fn}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ACT & Statutes Documents */}
            {page.content.documents && (
              <div className="inst-documents-section">
                <h2 className="inst-sec-heading">Statutory Enactments &amp; Gazette Records</h2>
                <div className="docs-list">
                  {page.content.documents.map((doc, i) => (
                    <div key={i} className="doc-item-row">
                      <div className="doc-icon-box">
                        <FileText size={22} />
                      </div>
                      <div className="doc-details">
                        <h3 className="doc-title">{doc.title}</h3>
                        <span className="doc-date">{doc.date}</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => alert(`Viewing ${doc.title}`)} 
                        className="btn-peach doc-action-btn"
                      >
                        <Download size={14} />
                        <span>View Document</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Records Retention Schedule Categories */}
            {page.content.categories && (
              <div className="inst-retention-section">
                <h2 className="inst-sec-heading">Record Categories &amp; Retention Norms</h2>
                <div className="retention-table-wrapper">
                  <table className="inst-data-table">
                    <thead>
                      <tr>
                        <th>Record Classification</th>
                        <th>Mandatory Retention Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.content.categories.map((c, i) => (
                        <tr key={i}>
                          <td className="bold-name">{c.cat}</td>
                          <td className="bold-role">{c.period}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Internal Committees */}
            {page.content.committees && (
              <div className="inst-committees-section">
                <h2 className="inst-sec-heading">Statutory &amp; Institutional Oversight Committees</h2>
                <div className="committees-grid">
                  {page.content.committees.map((com, i) => (
                    <div key={i} className="committee-card">
                      <div className="comm-header">
                        <ShieldCheck size={20} className="shield-icon" />
                        <h3 className="comm-title">{com.name}</h3>
                      </div>
                      <p className="comm-desc">{com.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Logo Elements Breakdown */}
            {page.content.elements && (
              <div className="inst-logo-section">
                <h2 className="inst-sec-heading">Emblem Architecture &amp; Meaning</h2>
                <div className="logo-showcase-box">
                  <div className="emblem-center-display">
                    <img 
                      src="/tirupati-logo-icon.png" 
                      alt="IISER Tirupati Emblem" 
                      className="showcase-logo-img" 
                    />
                    <span className="logo-caption">Official Emblem of IISER Tirupati</span>
                  </div>
                  <div className="elements-stack">
                    {page.content.elements.map((el, i) => (
                      <div key={i} className="element-item">
                        <Sparkles size={18} className="element-sparkle" />
                        <div>
                          <h4 className="element-title">{el.title}</h4>
                          <p className="element-text">{el.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Highlights (About Tirupati & PMRF) */}
            {page.content.highlights && (
              <div className="inst-highlights-section">
                <h2 className="inst-sec-heading">Core Highlights &amp; Features</h2>
                <div className="highlights-grid">
                  {page.content.highlights.map((h, i) => (
                    <div key={i} className="highlight-box">
                      {typeof h === 'string' ? (
                        <div className="highlight-simple">
                          <CheckCircle2 size={18} className="check-icon" />
                          <p>{h}</p>
                        </div>
                      ) : (
                        <div>
                          <h3 className="highlight-title">{h.title}</h3>
                          <p className="highlight-text">{h.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contract Specialists */}
            {page.content.specialists && (
              <div className="inst-specialists-section">
                <h2 className="inst-sec-heading">Scientific &amp; Technical Officers</h2>
                <div className="specialists-grid">
                  {page.content.specialists.map((sp, i) => (
                    <div key={i} className="specialist-card">
                      <div className="spec-avatar">
                        <Users size={18} />
                      </div>
                      <div className="spec-info">
                        <h3 className="spec-name">{sp.name}</h3>
                        <span className="spec-role">{sp.role}</span>
                        <span className="spec-facility">Facility: {sp.facility}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visvesvaraya PhD Fellowship Details */}
            {page.content.fellowshipDetails && (
              <div className="inst-fellowship-section">
                <h2 className="inst-sec-heading">Fellowship Provisions &amp; Benefits</h2>
                <div className="fellowship-list">
                  {page.content.fellowshipDetails.map((det, i) => (
                    <div key={i} className="fellowship-item">
                      <Award size={20} className="award-icon" />
                      <p className="fellowship-text">{det}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Students Demographics & Initiatives */}
            {page.content.demographics && (
              <div className="inst-demographics-section">
                <h2 className="inst-sec-heading">Current Student Enrolment</h2>
                <div className="demographics-grid">
                  {page.content.demographics.map((demo, i) => (
                    <div key={i} className="demo-card">
                      <span className="demo-count">{demo.count}</span>
                      <span className="demo-label">{demo.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {page.content.initiatives && (
              <div className="inst-initiatives-section">
                <h2 className="inst-sec-heading">Active Student Initiatives &amp; Bodies</h2>
                <div className="initiatives-stack">
                  {page.content.initiatives.map((init, i) => (
                    <div key={i} className="initiative-item">
                      <CheckCircle2 size={18} className="check-icon" />
                      <p>{init}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info (e.g. Director's Office) */}
            {page.content.contactInfo && (
              <div className="inst-contact-box">
                <h3 className="contact-box-heading">Official Contact</h3>
                <div className="contact-lines">
                  <div className="contact-line">
                    <Mail size={16} className="contact-icon" />
                    <span>Email: <a href={`mailto:${page.content.contactInfo.email}`}>{page.content.contactInfo.email}</a></span>
                  </div>
                  <div className="contact-line">
                    <MapPin size={16} className="contact-icon" />
                    <span>Office: {page.content.contactInfo.office}</span>
                  </div>
                </div>
              </div>
            )}

            {/* CONTACT US DEDICATED SECTION */}
            {page.content.isContactPage && (
              <div className="contact-page-content">
                {/* 1. Address & Interactive Form Grid */}
                <div className="contact-main-grid">
                  {/* Left: Official Campus Headquarters Card */}
                  <div className="contact-details-card">
                    <span className="section-tag blue-tag">Campus Headquarters</span>
                    <h2 className="contact-card-title">{page.content.addressInfo.campusName}</h2>
                    <p className="contact-address-text">
                      <strong>{page.content.addressInfo.line1}</strong><br />
                      {page.content.addressInfo.line2}<br />
                      {page.content.addressInfo.cityStatePin}
                    </p>

                    <div className="contact-info-list">
                      <div className="contact-info-item">
                        <Phone size={18} className="contact-info-icon" />
                        <div>
                          <span className="contact-info-label">General Enquiries (Reception)</span>
                          <a href={`tel:${page.content.addressInfo.phone}`} className="contact-info-val">
                            {page.content.addressInfo.phone}
                          </a>
                        </div>
                      </div>

                      <div className="contact-info-item">
                        <Mail size={18} className="contact-info-icon" />
                        <div>
                          <span className="contact-info-label">Registrar Official Email</span>
                          <a href={`mailto:${page.content.addressInfo.generalEmail}`} className="contact-info-val">
                            {page.content.addressInfo.generalEmail}
                          </a>
                        </div>
                      </div>

                      <div className="contact-info-item">
                        <Mail size={18} className="contact-info-icon" />
                        <div>
                          <span className="contact-info-label">Admissions Helpdesk</span>
                          <a href={`mailto:${page.content.addressInfo.admissionsEmail}`} className="contact-info-val">
                            {page.content.addressInfo.admissionsEmail}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* 24x7 Emergency Helplines Callout Banner */}
                    <div className="emergency-alert-card">
                      <div className="emergency-header">
                        <AlertCircle size={20} className="alert-icon" />
                        <span className="emergency-title">24x7 Campus Emergency &amp; Health</span>
                      </div>
                      <p className="emergency-desc">
                        For immediate on-campus medical emergencies, ambulance, and security assistance:
                      </p>
                      <a href={`tel:${page.content.addressInfo.emergencyHelpline}`} className="emergency-call-btn">
                        <Phone size={16} />
                        <span>Helpline: {page.content.addressInfo.emergencyHelpline}</span>
                      </a>
                    </div>
                  </div>

                  {/* Right: Interactive Communication & Inquiry Form */}
                  <div className="contact-form-card">
                    <span className="section-tag">Direct Communication</span>
                    <h2 className="contact-card-title">Send Us an Official Inquiry</h2>
                    <p className="contact-form-subtitle">
                      Your query will be routed to the appropriate academic or administrative section.
                    </p>

                    {contactSubmitted ? (
                      <div className="contact-success-banner animate-fade">
                        <div className="success-icon-box">
                          <CheckCircle2 size={36} />
                        </div>
                        <h3 className="success-title">Inquiry Submitted Successfully!</h3>
                        <p className="success-message">
                          Thank you, <strong>{contactForm.name}</strong>. Your inquiry regarding <strong>{contactForm.subject || contactForm.department}</strong> has been received by the IISER Tirupati Administrative Desk.
                        </p>
                        <div className="success-ref-box">
                          <span>Reference Docket:</span>
                          <code>#IISERT-2026-{Math.floor(100000 + Math.random() * 900000)}</code>
                        </div>
                        <p className="success-note">
                          A confirmation and formal response will be dispatched to <strong>{contactForm.email}</strong> shortly.
                        </p>
                        <button 
                          type="button" 
                          onClick={() => {
                            setContactSubmitted(false);
                            setContactForm({
                              name: '',
                              email: '',
                              phone: '',
                              department: 'Academic Section (Admissions)',
                              subject: '',
                              message: ''
                            });
                          }}
                          className="btn-peach"
                          style={{ marginTop: '16px' }}
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="contact-actual-form">
                        <div className="form-row-2">
                          <div className="form-group">
                            <label htmlFor="contact-name">Full Name *</label>
                            <input 
                              id="contact-name"
                              type="text" 
                              required
                              placeholder="e.g. Dr. Rajesh Kumar"
                              value={contactForm.name}
                              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                              className="inst-input"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="contact-email">Email Address *</label>
                            <input 
                              id="contact-email"
                              type="email" 
                              required
                              placeholder="you@domain.com"
                              value={contactForm.email}
                              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                              className="inst-input"
                            />
                          </div>
                        </div>

                        <div className="form-row-2">
                          <div className="form-group">
                            <label htmlFor="contact-phone">Contact Phone</label>
                            <input 
                              id="contact-phone"
                              type="tel" 
                              placeholder="+91 98765 43210"
                              value={contactForm.phone}
                              onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                              className="inst-input"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="contact-department">Department / Desk</label>
                            <select 
                              id="contact-department"
                              value={contactForm.department}
                              onChange={(e) => setContactForm({ ...contactForm, department: e.target.value })}
                              className="inst-select"
                            >
                              <option value="Academic Section (Admissions)">Academic Section (Admissions)</option>
                              <option value="Central Instrumentation Facility (CIF)">Central Instrumentation Facility (CIF)</option>
                              <option value="Dean of Student Affairs (Hostels)">Dean of Student Affairs (Hostels)</option>
                              <option value="Placement & Training (CCPD)">Placement &amp; Training (CCPD)</option>
                              <option value="Registrar & Administration">Registrar &amp; Administration</option>
                              <option value="General Campus Inquiries">General Campus Inquiries</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="contact-subject">Subject / Reference</label>
                          <input 
                            id="contact-subject"
                            type="text" 
                            placeholder="Brief subject of your query"
                            value={contactForm.subject}
                            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                            className="inst-input"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="contact-message">Your Message *</label>
                          <textarea 
                            id="contact-message"
                            rows={4}
                            required
                            placeholder="Please state your inquiry, application roll number, or institutional query..."
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            className="inst-textarea"
                          />
                        </div>

                        <button type="submit" className="btn-primary contact-submit-btn">
                          <Send size={16} />
                          <span>Submit Official Inquiry</span>
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* 2. Departmental Telephone & Email Directory */}
                {page.content.departmentsContact && (
                  <div className="contact-directory-section">
                    <h2 className="inst-sec-heading">Official Departmental Directory</h2>
                    <p className="directory-desc">
                      Direct contact points for specific academic, administrative, and research facilities at IISER Tirupati.
                    </p>

                    <div className="table-responsive">
                      <table className="inst-data-table">
                        <thead>
                          <tr>
                            <th>Section / Institutional Desk</th>
                            <th>Official Email</th>
                            <th>Telephone Extension</th>
                          </tr>
                        </thead>
                        <tbody>
                          {page.content.departmentsContact.map((dept, i) => (
                            <tr key={i}>
                              <td className="bold-name">{dept.desk}</td>
                              <td>
                                <a href={`mailto:${dept.email}`} className="dept-email-link">
                                  <Mail size={13} className="inline-icon" />
                                  <span>{dept.email}</span>
                                </a>
                              </td>
                              <td>
                                <a href={`tel:${dept.phone}`} className="dept-phone-link">
                                  <Phone size={13} className="inline-icon" />
                                  <span>{dept.phone}</span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 3. Yerpedu Campus Transit & Location Guide */}
                {page.content.transitGuides && (
                  <div className="transit-guide-section">
                    <h2 className="inst-sec-heading">How to Reach the Yerpedu Campus</h2>
                    <p className="transit-desc">
                      The permanent campus of IISER Tirupati is situated at Srinivasapuram, Yerpedu Mandal along NH 716.
                    </p>

                    <div className="transit-cards-grid">
                      {page.content.transitGuides.map((guide, i) => (
                        <div key={i} className="transit-card">
                          <div className="transit-card-top">
                            <div className="transit-mode-badge">
                              {guide.mode === 'By Air' && <Plane size={18} />}
                              {guide.mode === 'By Train' && <Train size={18} />}
                              {guide.mode === 'By Road' && <Bus size={18} />}
                              <span>{guide.mode}</span>
                            </div>
                            <span className="transit-distance">{guide.distance}</span>
                          </div>
                          <h3 className="transit-terminal">{guide.terminal}</h3>
                          <p className="transit-directions">{guide.directions}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* CAREERS DEDICATED SECTION */}
            {page.content.isCareersPage && (
              <div className="careers-page-content">
                <h2 className="inst-sec-heading">Current Opportunities &amp; Openings</h2>
                <div className="careers-cards-stack">
                  {page.content.openings.map((job) => (
                    <div key={job.id} className="career-opening-card">
                      <div className="career-card-header">
                        <div>
                          <span className="career-type-pill">{job.type}</span>
                          <h3 className="career-title">{job.title}</h3>
                          <span className="career-dept">{job.department}</span>
                        </div>
                        <span className={`career-status-tag ${job.status.toLowerCase()}`}>
                          {job.status}
                        </span>
                      </div>

                      <div className="career-card-footer">
                        <div className="career-deadline">
                          <Clock size={15} />
                          <span>Deadline: <strong>{job.deadline}</strong></span>
                        </div>

                        <button 
                          type="button" 
                          onClick={() => setAppliedCareerId(job.id)}
                          className="btn-primary apply-career-btn"
                        >
                          <Briefcase size={15} />
                          <span>{appliedCareerId === job.id ? "Application Initiated" : "Apply via Samarth"}</span>
                        </button>
                      </div>

                      {appliedCareerId === job.id && (
                        <div className="career-apply-notice animate-fade">
                          <CheckCircle2 size={16} className="text-orange" />
                          <span>
                            To complete submission for <strong>{job.title}</strong>, please log in to your registered account on the official Samarth Recruitment Portal or write to <strong>recruitment@iisertirupati.ac.in</strong> with your CV.
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {page.content.guidelines && (
                  <div className="career-guidelines-box">
                    <h3 className="guidelines-heading">General Recruitment Guidelines</h3>
                    <ul className="guidelines-list">
                      {page.content.guidelines.map((g, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="check-icon" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Actions Row */}
            <div className="inst-bottom-bar">
              <button type="button" onClick={onBack} className="btn-secondary">
                <ArrowLeft size={16} />
                <span>Return to Homepage</span>
              </button>

              <button 
                type="button" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="btn-peach"
              >
                <span>Back to Top of Page</span>
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .inst-page-wrapper {
          background-color: var(--color-canvas);
          min-height: 100vh;
          padding-bottom: 80px;
        }

        /* Top Bar */
        .inst-page-topbar {
          background-color: var(--color-white);
          border-bottom: 1px solid var(--color-border-light);
          padding: 12px 0;
        }

        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-blue-primary);
          font-size: 0.88rem;
          font-weight: 700;
          transition: color var(--transition-fast);
        }

        .back-btn:hover {
          color: var(--color-orange-primary);
        }

        .inst-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
        }

        .crumb-item {
          color: var(--color-text-muted);
        }

        .crumb-arrow {
          color: var(--color-peach-accent);
        }

        .crumb-current {
          color: var(--color-orange-dark);
          font-weight: 700;
        }

        /* Hero Banner */
        .inst-page-hero {
          background: linear-gradient(180deg, #FFFFFF 0%, var(--color-peach-light) 100%);
          border-bottom: 1.5px solid var(--color-peach-border);
          padding: 44px 0 36px;
        }

        .hero-box {
          max-width: 920px;
        }

        .inst-cat-badge {
          display: inline-block;
          font-family: var(--font-accent);
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-blue-primary);
          background-color: var(--color-blue-light);
          padding: 3px 12px;
          border-radius: var(--radius-pill);
          margin-bottom: 12px;
        }

        .inst-page-title {
          font-family: var(--font-serif);
          font-size: 2.85rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          line-height: 1.18;
          margin-bottom: 10px;
        }

        .inst-page-sub {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-orange-dark);
          margin-bottom: 6px;
        }

        .inst-page-tagline {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        /* Body Grid */
        .inst-body-container {
          padding-top: 40px;
        }

        .inst-body-grid {
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        /* Sidebar */
        .inst-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: sticky;
          top: 130px;
        }

        .sidebar-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 20px;
          box-shadow: var(--shadow-sm);
        }

        .sidebar-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-accent);
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-blue-primary);
          padding-bottom: 12px;
          border-bottom: 2px solid var(--color-peach-accent);
          margin-bottom: 14px;
        }

        .sidebar-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sidebar-nav-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-align: left;
          transition: all var(--transition-fast);
        }

        .sidebar-nav-btn:hover {
          background-color: var(--color-peach-light);
          color: var(--color-orange-dark);
          transform: translateX(3px);
        }

        .sidebar-nav-btn.active {
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
          border-left: 3px solid var(--color-orange-primary);
        }

        .sidebar-arrow {
          color: var(--color-text-muted);
        }

        .sidebar-nav-btn.active .sidebar-arrow {
          color: var(--color-orange-primary);
        }

        .sidebar-meta-card {
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-lg);
          padding: 18px;
        }

        .meta-card-tag {
          font-family: var(--font-accent);
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-orange-dark);
        }

        .meta-card-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin: 4px 0 8px;
        }

        .meta-card-text {
          font-size: 0.78rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin-bottom: 12px;
        }

        .meta-campus-loc {
          display: flex;
          gap: 6px;
          font-size: 0.74rem;
          color: var(--color-blue-deep);
          font-weight: 600;
        }

        .pin-icon {
          color: var(--color-orange-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Main Content */
        .inst-main-content {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-xl);
          padding: 44px 40px;
          box-shadow: var(--shadow-sm);
        }

        .inst-lead-box {
          background-color: var(--color-peach-light);
          border-left: 4px solid var(--color-orange-primary);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          padding: 22px 24px;
          margin-bottom: 34px;
        }

        .lead-paragraph {
          font-size: 1.15rem;
          color: var(--color-text-primary);
          line-height: 1.7;
          font-weight: 500;
        }

        .inst-stats-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 36px;
          padding: 20px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .stat-card-val {
          font-family: var(--font-accent);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .stat-card-lbl {
          font-size: 0.76rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .inst-sec-heading {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin: 32px 0 14px;
          padding-bottom: 8px;
          border-bottom: 1.5px solid var(--color-border-subtle);
        }

        .inst-sec-text {
          font-size: 1.02rem;
          color: var(--color-text-secondary);
          line-height: 1.75;
          margin-bottom: 20px;
        }

        /* Table */
        .inst-table-section {
          margin-top: 30px;
        }

        .members-table-wrapper {
          overflow-x: auto;
          margin-top: 14px;
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
        }

        .inst-data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
          text-align: left;
        }

        .inst-data-table th {
          background-color: var(--color-blue-primary);
          color: var(--color-white);
          padding: 12px 16px;
          font-weight: 700;
        }

        .inst-data-table td {
          padding: 12px 16px;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .inst-data-table tr:nth-child(even) {
          background-color: var(--color-blue-tint);
        }

        .bold-role {
          font-weight: 700;
          color: var(--color-orange-dark);
        }

        .bold-name {
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        /* Faculty Grid */
        .faculty-dept-stack {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 20px;
        }

        .dept-group-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          margin-bottom: 12px;
        }

        .dept-faculty-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .faculty-card-mini {
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: all var(--transition-fast);
        }

        .faculty-card-mini:hover {
          border-color: var(--color-blue-bright);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .fac-details {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }

        .fac-prof-name {
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .fac-prof-role {
          font-size: 0.78rem;
          color: var(--color-orange-dark);
          font-weight: 600;
        }

        .fac-prof-area {
          font-size: 0.74rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        .fac-contact-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 8px;
          padding-top: 6px;
          border-top: 1px dashed var(--color-border-light);
        }

        .fac-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: var(--color-blue-bright);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
          word-break: break-all;
        }

        .fac-contact-link:hover {
          color: var(--color-orange-dark);
          text-decoration: underline;
        }

        /* Officers Grid */
        .officers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 16px;
        }

        .officer-card {
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .officer-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          border: 2px solid var(--color-peach-accent);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .officer-avatar.fallback-avatar {
          background: linear-gradient(135deg, var(--color-blue-primary), #1e5282);
          color: #ffffff;
        }

        .officer-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .officer-initials {
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #ffffff;
        }

        .officer-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .officer-role {
          font-size: 0.78rem;
          color: var(--color-orange-dark);
          font-weight: 600;
          display: block;
        }

        .officer-phone {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--color-blue-bright);
          font-weight: 600;
          margin-top: 4px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .officer-phone:hover {
          color: var(--color-orange-dark);
          text-decoration: underline;
        }

        .officer-email {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.76rem;
          color: var(--color-text-muted);
          margin-top: 3px;
          text-decoration: none;
        }

        .officer-email:hover {
          color: var(--color-orange-dark);
          text-decoration: underline;
        }

        .staff-dept-group {
          margin-bottom: 32px;
        }

        .staff-sec-heading {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          border-bottom: 2px solid var(--color-peach-base);
          padding-bottom: 8px;
          margin-bottom: 16px;
        }

        /* Postdoctoral Fellows */
        .fellows-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 16px;
        }

        .fellow-card {
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: all var(--transition-fast);
        }

        .fellow-card:hover {
          border-color: var(--color-blue-bright);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .fellow-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
          gap: 4px;
        }

        .fellow-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }

        .fellow-name {
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin: 0;
        }

        .fellow-dept-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
        }

        .fellow-designation {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-blue-bright);
        }

        .fellow-mentor {
          font-size: 0.76rem;
          color: var(--color-text-secondary);
        }

        .fellow-domain {
          font-size: 0.74rem;
          color: var(--color-text-muted);
        }

        /* PMRF Scholars Section */
        .pmrf-links-strip {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .pmrf-resource-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background-color: var(--color-peach-light);
          color: var(--color-orange-dark);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .pmrf-resource-btn:hover {
          background-color: var(--color-orange-primary);
          color: var(--color-white);
          border-color: var(--color-orange-primary);
        }

        .pmrf-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 16px;
        }

        .pmrf-card {
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: all var(--transition-fast);
        }

        .pmrf-card:hover {
          border-color: var(--color-blue-bright);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .pmrf-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
          gap: 5px;
        }

        .pmrf-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pmrf-name {
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin: 0;
        }

        .pmrf-dept-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-orange-dark);
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          text-transform: capitalize;
        }

        .pmrf-pills-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 0.74rem;
          color: var(--color-text-muted);
        }

        .pmrf-pill {
          background-color: var(--color-canvas-subtle, rgba(0,0,0,0.03));
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--color-border-light);
        }

        .pmrf-meta-item {
          font-size: 0.78rem;
          color: var(--color-text-secondary);
          line-height: 1.4;
        }

        .pmrf-meta-item strong {
          color: var(--color-text-primary);
        }

        .pmrf-email-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          color: var(--color-blue-bright);
          text-decoration: none;
          font-weight: 500;
          margin-top: 4px;
          word-break: break-all;
        }

        .pmrf-email-link:hover {
          color: var(--color-orange-dark);
          text-decoration: underline;
        }

        /* Reports Stack */
        .reports-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
        }

        .report-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          gap: 16px;
        }

        .report-icon {
          color: var(--color-blue-primary);
          flex-shrink: 0;
        }

        .report-meta {
          flex: 1;
        }

        .report-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .report-sub {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        /* NIRF Stack */
        .nirf-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
        }

        .nirf-metric-card {
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .nirf-param-title {
          font-weight: 700;
          color: var(--color-blue-primary);
          font-size: 0.95rem;
          flex: 1;
        }

        .nirf-score-badge {
          font-family: var(--font-accent);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-orange-dark);
          background-color: var(--color-white);
          border: 1px solid var(--color-peach-accent);
          padding: 4px 12px;
          border-radius: var(--radius-pill);
        }

        .nirf-note {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          flex: 1;
          text-align: right;
        }

        /* Functions Section */
        .functions-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
        }

        .function-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px 18px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
        }

        .check-icon {
          color: var(--color-orange-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .function-text {
          font-size: 0.95rem;
          color: var(--color-text-primary);
          line-height: 1.55;
        }

        /* Documents List */
        .docs-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
        }

        .doc-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          gap: 16px;
        }

        .doc-icon-box {
          color: var(--color-blue-primary);
        }

        .doc-details {
          flex: 1;
        }

        .doc-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .doc-date {
          font-size: 0.78rem;
          color: var(--color-text-muted);
        }

        .doc-action-btn {
          font-size: 0.8rem;
          padding: 6px 14px;
        }

        /* Committees */
        .committees-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 16px;
        }

        .committee-card {
          padding: 18px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
        }

        .comm-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .shield-icon {
          color: var(--color-blue-primary);
        }

        .comm-title {
          font-size: 0.94rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .comm-desc {
          font-size: 0.84rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
        }

        /* Logo Showcase */
        .logo-showcase-box {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 30px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-top: 16px;
          align-items: center;
        }

        .emblem-center-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }

        .showcase-logo-img {
          width: 140px;
          height: 140px;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0, 59, 115, 0.15));
        }

        .logo-caption {
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          text-transform: uppercase;
        }

        .elements-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .element-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .element-sparkle {
          color: var(--color-orange-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .element-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .element-text {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin-top: 2px;
        }

        /* Highlights */
        .highlights-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 16px;
        }

        .highlight-box {
          padding: 16px 20px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
        }

        .highlight-simple {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .highlight-title {
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-bottom: 4px;
        }

        .highlight-text {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        /* Specialists */
        .specialists-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 16px;
        }

        .specialist-card {
          padding: 16px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .spec-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--color-peach-base);
          color: var(--color-orange-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .spec-name {
          font-size: 0.94rem;
          font-weight: 700;
          color: var(--color-blue-primary);
        }

        .spec-role {
          font-size: 0.78rem;
          color: var(--color-orange-dark);
          font-weight: 600;
          display: block;
        }

        .spec-facility {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        /* Fellowship */
        .fellowship-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
        }

        .fellowship-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px 18px;
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-md);
        }

        .award-icon {
          color: var(--color-orange-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .fellowship-text {
          font-size: 0.92rem;
          color: var(--color-text-primary);
          line-height: 1.5;
        }

        /* Demographics */
        .demographics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 16px;
        }

        .demo-card {
          padding: 18px;
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .demo-count {
          font-family: var(--font-accent);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-blue-primary);
        }

        .demo-label {
          font-size: 0.78rem;
          color: var(--color-text-secondary);
          font-weight: 600;
          margin-top: 4px;
        }

        .initiatives-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }

        .initiative-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 12px 16px;
          background-color: var(--color-canvas);
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: var(--color-text-secondary);
        }

        /* Contact Box */
        .inst-contact-box {
          margin-top: 32px;
          padding: 20px;
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-lg);
        }

        .contact-box-heading {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-bottom: 10px;
        }

        .contact-lines {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-line {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.86rem;
          color: var(--color-text-primary);
        }

        .contact-icon {
          color: var(--color-orange-primary);
        }

        /* Bottom Bar */
        .inst-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--color-border-light);
          flex-wrap: wrap;
          gap: 14px;
        }

        /* Mobile Category Bar (Hidden on Desktop) */
        .mobile-category-bar {
          display: none;
          margin-bottom: 20px;
        }

        .mobile-category-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--color-white);
          border: 1.5px solid var(--color-peach-accent);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          color: var(--color-blue-primary);
          box-shadow: var(--shadow-sm);
        }

        .toggle-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .text-orange {
          color: var(--color-orange-primary);
        }

        .toggle-chevron {
          color: var(--color-text-muted);
          transition: transform var(--transition-base);
        }

        .toggle-chevron.rotate {
          transform: rotate(180deg);
          color: var(--color-orange-primary);
        }

        .mobile-siblings-dropdown {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          margin-top: 8px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .mobile-sibling-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--color-border-subtle);
          font-size: 0.88rem;
          color: var(--color-text-primary);
          text-align: left;
          background: none;
        }

        .mobile-sibling-btn:last-child {
          border-bottom: none;
        }

        .mobile-sibling-btn.active {
          background-color: var(--color-peach-light);
          color: var(--color-orange-dark);
          font-weight: 700;
        }

        .active-icon {
          color: var(--color-orange-primary);
        }

        /* Contact Page Styling */
        .contact-page-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 28px;
          align-items: start;
        }

        .contact-details-card,
        .contact-form-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 30px;
          box-shadow: var(--shadow-sm);
        }

        .contact-card-title {
          font-family: var(--font-serif);
          font-size: 1.55rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin: 10px 0 12px;
        }

        .contact-address-text {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .contact-info-icon {
          color: var(--color-orange-primary);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .contact-info-label {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .contact-info-val {
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--color-blue-bright);
        }

        .emergency-alert-card {
          background-color: var(--color-peach-base);
          border: 1.5px solid var(--color-peach-accent);
          border-radius: var(--radius-md);
          padding: 18px;
        }

        .emergency-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-orange-dark);
          margin-bottom: 6px;
        }

        .emergency-title {
          font-size: 0.95rem;
          font-weight: 700;
        }

        .emergency-desc {
          font-size: 0.84rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .emergency-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-orange-primary);
          color: var(--color-white);
          padding: 9px 16px;
          border-radius: var(--radius-pill);
          font-size: 0.88rem;
          font-weight: 700;
          transition: background-color var(--transition-fast);
        }

        .emergency-call-btn:hover {
          background-color: var(--color-orange-dark);
          color: var(--color-white);
        }

        /* Contact Form */
        .contact-form-subtitle {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
        }

        .contact-actual-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .inst-input,
        .inst-select,
        .inst-textarea {
          width: 100%;
          padding: 10px 14px;
          border: 1.5px solid var(--color-border-light);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--color-text-primary);
          background-color: var(--color-canvas);
          transition: all var(--transition-fast);
        }

        .inst-input:focus,
        .inst-select:focus,
        .inst-textarea:focus {
          border-color: var(--color-orange-primary);
          background-color: var(--color-white);
          box-shadow: 0 0 0 3px var(--color-orange-glow);
          outline: none;
        }

        .contact-submit-btn {
          margin-top: 8px;
          padding: 12px 26px;
          font-size: 0.95rem;
          cursor: pointer;
        }

        .contact-success-banner {
          background-color: var(--color-peach-light);
          border: 1.5px solid var(--color-peach-accent);
          border-radius: var(--radius-md);
          padding: 28px;
          text-align: center;
        }

        .success-icon-box {
          color: #2E7D32;
          margin-bottom: 12px;
        }

        .success-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: var(--color-blue-primary);
          margin-bottom: 10px;
        }

        .success-message {
          font-size: 0.94rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .success-ref-box {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-white);
          border: 1px dashed var(--color-orange-primary);
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .success-ref-box code {
          color: var(--color-orange-dark);
          font-weight: 700;
        }

        .success-note {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        /* Table Responsive */
        .table-responsive {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin: 16px 0;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
        }

        .table-responsive .inst-data-table {
          width: 100%;
          min-width: 600px;
          margin: 0;
        }

        .dept-email-link,
        .dept-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-blue-bright);
          font-size: 0.88rem;
          font-weight: 500;
        }

        .dept-email-link:hover,
        .dept-phone-link:hover {
          color: var(--color-orange-primary);
          text-decoration: underline;
        }

        .inline-icon {
          color: var(--color-orange-primary);
        }

        /* Transit Cards Grid */
        .transit-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 18px;
        }

        .transit-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 22px;
          transition: transform var(--transition-fast);
        }

        .transit-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-peach-accent);
        }

        .transit-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .transit-mode-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-peach-light);
          color: var(--color-orange-dark);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
          font-weight: 700;
        }

        .transit-distance {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .transit-terminal {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-bottom: 8px;
        }

        .transit-directions {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        /* Careers Page */
        .careers-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 20px 0 32px;
        }

        .career-opening-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 22px;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }

        .career-opening-card:hover {
          border-color: var(--color-peach-accent);
          box-shadow: var(--shadow-md);
        }

        .career-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }

        .career-type-pill {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
          padding: 3px 8px;
          border-radius: var(--radius-pill);
          margin-bottom: 6px;
        }

        .career-title {
          font-family: var(--font-serif);
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-bottom: 4px;
        }

        .career-dept {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
        }

        .career-status-tag {
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          text-transform: uppercase;
        }

        .career-status-tag.active {
          background-color: #E8F5E9;
          color: #2E7D32;
        }

        .career-status-tag.open {
          background-color: var(--color-peach-light);
          color: var(--color-orange-dark);
        }

        .career-status-tag.new {
          background-color: #E3F2FD;
          color: #0277BD;
        }

        .career-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid var(--color-border-subtle);
          flex-wrap: wrap;
          gap: 12px;
        }

        .career-deadline {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .apply-career-btn {
          padding: 8px 18px;
          font-size: 0.88rem;
        }

        .career-apply-notice {
          margin-top: 14px;
          padding: 12px 16px;
          background-color: var(--color-peach-light);
          border: 1px solid var(--color-peach-border);
          border-radius: var(--radius-sm);
          font-size: 0.86rem;
          color: var(--color-text-primary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .career-guidelines-box {
          background-color: var(--color-canvas);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 24px;
        }

        .guidelines-heading {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-blue-primary);
          margin-bottom: 12px;
        }

        .guidelines-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .guidelines-list li {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          font-size: 0.88rem;
          color: var(--color-text-secondary);
        }

        /* Responsive Breakpoints for Institutional Page */
        @media (max-width: 1024px) {
          .inst-body-grid {
            grid-template-columns: 1fr;
          }
          .inst-sidebar {
            display: none;
          }
          .mobile-category-bar {
            display: block;
          }
          .contact-main-grid {
            grid-template-columns: 1fr;
          }
          .transit-cards-grid {
            grid-template-columns: 1fr;
          }
          .dept-faculty-grid, .officers-grid, .fellows-grid, .pmrf-grid {
            grid-template-columns: 1fr;
          }
          .inst-stats-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .inst-main-content {
            padding: 20px 14px;
          }
          .inst-page-title {
            font-size: 1.85rem;
          }
          .inst-page-sub {
            font-size: 0.95rem;
          }
          .contact-details-card,
          .contact-form-card {
            padding: 20px 16px;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .inst-stats-strip {
            grid-template-columns: 1fr;
          }
          .career-card-header {
            flex-direction: column;
          }
          .career-card-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .apply-career-btn {
            width: 100%;
          }
          .inst-bottom-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .inst-bottom-bar button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

