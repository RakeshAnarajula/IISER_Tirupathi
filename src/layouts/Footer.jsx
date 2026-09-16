import React from 'react';
import { siteConfig } from '../constants/mockData';
import {
  Phone,
  Mail
} from 'lucide-react';

export function Footer({ onSelectPage }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-academic-blue-footer" aria-label="Official Institutional Footer">
      {/* 1. Main 6-Column Layout */}
      <div className="site-container-wide footer-columns-container">
        <div className="footer-six-grid">

          {/* Column 1: Other Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Other Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#about-announcements" className="footer-nav-btn">Announcements</a>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('admissions-info')} className="footer-nav-btn">
                  IISER Admissions
                </button>
              </li>
              <li>
                <a href="https://www.i-stem.gov.in" target="_blank" rel="noreferrer" className="footer-nav-btn">
                  I-STEM
                </a>
              </li>
              <li>
                <a href="https://www.education.gov.in" target="_blank" rel="noreferrer" className="footer-nav-btn">
                  MOE
                </a>
              </li>
              <li>
                <a href="https://scholarships.gov.in" target="_blank" rel="noreferrer" className="footer-nav-btn">
                  National Scholarship
                </a>
              </li>
              <li>
                <a href="https://www.nirfindia.org" target="_blank" rel="noreferrer" className="footer-nav-btn">
                  NIRF
                </a>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('the-institute')} className="footer-nav-btn">
                  Rajbhasha
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: News & Events & Tenders */}
          <div className="footer-col">
            <h4 className="footer-heading">News &amp; Events</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#news-events" className="footer-nav-btn">All News</a>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('events')} className="footer-nav-btn">
                  All Events
                </button>
              </li>
            </ul>

            <h4 className="footer-heading" style={{ marginTop: '18px' }}>Tender &amp; EOI</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('tenders')} className="footer-nav-btn">
                  Tenders
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('annual-reports')} className="footer-nav-btn">
                  Procurement Plan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: National Emblem */}
          <div className="footer-col emblem-col">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center' }}>
              <div style={{ background: '#FFFFFF', padding: '10px 16px', borderRadius: '12px' }}>
                <img
                  src="/moe-emblem.png"
                  alt="Ministry of Education, Government of India"
                  style={{ height: '70px', objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFE0D3', letterSpacing: '0.04em' }}>
                Institute of National Importance
              </span>
            </div>
          </div>

          {/* Column 4: Important Links & RTI */}
          <div className="footer-col">
            <h4 className="footer-heading">Important Links</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('anti-ragging')} className="footer-nav-btn">
                  Anti-Ragging
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('the-institute')} className="footer-nav-btn">
                  Guest House
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('the-institute')} className="footer-nav-btn">
                  IISER Brochure
                </button>
              </li>
            </ul>

            <h4 className="footer-heading" style={{ marginTop: '18px' }}>RTI</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('grievance')} className="footer-nav-btn">
                  Grievance Portal
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('icc')} className="footer-nav-btn">
                  Internal Complaints Committee
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('rti')} className="footer-nav-btn">
                  RTI Information
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Joint Initiatives */}
          <div className="footer-col">
            <h4 className="footer-heading">Joint Initiatives</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('the-institute')} className="footer-nav-btn">
                  GNM 2024
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('mou-partnerships')} className="footer-nav-btn">
                  MoU &amp; Partnerships
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectPage && onSelectPage('the-institute')} className="footer-nav-btn">
                  AMST 2024
                </button>
              </li>
            </ul>
          </div>

          {/* Column 6: Contact Us */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-block">
              <p style={{ margin: 0, fontSize: '0.84rem', lineHeight: 1.5, color: '#D6E4F5' }}>
                <strong style={{ color: '#FFFFFF' }}>Srinivasapuram, Yerpedu Mandal,</strong><br />
                Tirupati District, Andhra Pradesh,<br />
                PIN - 517619
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                <div className="footer-contact-item">
                  <Phone size={14} />
                  <span>{siteConfig.phone}</span>
                </div>
                <div className="footer-contact-item">
                  <Mail size={14} />
                  <span>{siteConfig.email}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="site-container-wide bottom-bar-grid">
          {/* Left: Copyright */}
          <div className="bottom-bar-left">
            <p className="footer-copy">
              Copyright &copy; {currentYear} IISER Tirupati — All Rights Reserved
            </p>
          </div>

          {/* Center: Social Media Icons + Exact Visitor Count */}
          <div className="bottom-bar-center">
            <div className="footer-social-row">
              <a
                href="https://www.facebook.com/iisertirupatiofficial"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn facebook-btn"
                title="IISER Tirupati Facebook"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFFFFF"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://twitter.com/IISERTirupati"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn x-btn"
                title="IISER Tirupati X (Twitter)"
                aria-label="X (formerly Twitter)"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#FFFFFF"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/iisertirupatiofficial/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn instagram-btn"
                title="IISER Tirupati Instagram"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFFFFF"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a
                href="https://www.youtube.com/c/iisertirupatiofficial"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn youtube-btn"
                title="IISER Tirupati YouTube Channel"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFFFFF"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/school/iiser-tirupati/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn linkedin-btn"
                title="IISER Tirupati LinkedIn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#FFFFFF"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>

            <div className="visitor-count-badge">
              <span>Visitors Count: <strong>2,111,032</strong></span>
            </div>
          </div>

          {/* Right: Legal Links */}
          <div className="bottom-bar-right">
            <div className="footer-legal-links">
              <button type="button" onClick={() => onSelectPage && onSelectPage('privacy-policy')} className="legal-btn">
                Privacy Policy
              </button>
              <span className="legal-bullet">•</span>
              <button type="button" onClick={() => onSelectPage && onSelectPage('disclaimer')} className="legal-btn">
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

