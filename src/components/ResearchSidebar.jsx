import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  Dna, 
  FlaskConical, 
  Globe2, 
  Binary, 
  Atom, 
  BookOpen, 
  Microscope, 
  Sparkles, 
  FileText, 
  CalendarDays,
  ChevronRight,
  Compass
} from 'lucide-react';

export const researchNavList = [
  {
    group: "Academic Departments",
    items: [
      { path: "/biology", label: "Biology", icon: Dna, color: "#16a34a" },
      { path: "/chemistry", label: "Chemistry", icon: FlaskConical, color: "#d97706" },
      { path: "/earth-climate-sciences", label: "Earth & Climate Sciences", icon: Globe2, color: "#0284c7" },
      { path: "/mathematics", label: "Mathematics", icon: Binary, color: "#4f46e5" },
      { path: "/physics", label: "Physics", icon: Atom, color: "#7c3aed" },
      { path: "/humanities-social-sciences", label: "Humanities & Social Sciences", icon: BookOpen, color: "#dc2626" },
    ]
  },
  {
    group: "Centers & Initiatives",
    items: [
      { path: "/research-facilities", label: "Research Facilities", icon: Microscope, color: "#0891b2" },
      { path: "/research-highlights", label: "Research Highlights", icon: Sparkles, color: "#f59e0b" },
      { path: "/publications", label: "Publications", icon: FileText, color: "#2563eb" },
      { path: "/seminar-colloquium", label: "Seminars & Colloquia", icon: CalendarDays, color: "#9333ea" },
    ]
  }
];

export function ResearchSidebar({ activePath }) {
  const location = useLocation();
  const currentPath = activePath || location.pathname;

  return (
    <aside className="research-sidebar" aria-label="Research Navigation">
      <div className="research-sidebar-card">
        <div className="research-sidebar-heading">
          <Compass size={16} />
          <span>Research Divisions</span>
        </div>

        {researchNavList.map((section, sIdx) => (
          <div key={sIdx} className="research-sidebar-group">
            <div className="research-sidebar-type-label">{section.group}</div>
            <ul className="research-sidebar-list">
              {section.items.map((item) => {
                const IconComponent = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`research-sidebar-nav-btn ${isActive ? 'active' : ''}`}
                      style={isActive ? { borderLeftColor: item.color, color: item.color, background: `${item.color}10` } : {}}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        <IconComponent 
                          size={16} 
                          style={{ color: isActive ? item.color : '#64748b' }} 
                        />
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight size={14} className="sidebar-arrow" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            {sIdx < researchNavList.length - 1 && <div className="research-sidebar-divider" />}
          </div>
        ))}
      </div>

      <div className="research-sidebar-help-card" style={{ marginTop: '20px', padding: '18px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <h4 style={{ margin: '0 0 6px', fontSize: '0.88rem', fontWeight: 700, color: '#0f2942' }}>Research Deanery</h4>
        <p style={{ margin: '0 0 10px', fontSize: '0.78rem', color: '#64748b', lineHeight: 1.5 }}>
          Office of the Dean (Research &amp; Development)<br />
          IISER Tirupati, Yerpedu Campus
        </p>
        <a 
          href="mailto:dean_rnd@iisertirupati.ac.in" 
          style={{ fontSize: '0.78rem', color: '#0f3e6d', fontWeight: 700, textDecoration: 'none' }}
        >
          dean_rnd@iisertirupati.ac.in &rarr;
        </a>
      </div>
    </aside>
  );
}

export default ResearchSidebar;
