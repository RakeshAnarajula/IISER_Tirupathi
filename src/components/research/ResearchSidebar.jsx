import React from 'react';
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
      { key: "biology", label: "Biology", icon: Dna, color: "#16a34a" },
      { key: "chemistry", label: "Chemistry", icon: FlaskConical, color: "#d97706" },
      { key: "earth-climate-sciences", label: "Earth & Climate Sciences", icon: Globe2, color: "#0284c7" },
      { key: "mathematics", label: "Mathematics", icon: Binary, color: "#4f46e5" },
      { key: "physics", label: "Physics", icon: Atom, color: "#7c3aed" },
      { key: "humanities-social-sciences", label: "Humanities & Social Sciences", icon: BookOpen, color: "#dc2626" },
    ]
  },
  {
    group: "Centers & Initiatives",
    items: [
      { key: "research-facilities", label: "Research Facilities", icon: Microscope, color: "#0891b2" },
      { key: "research-highlights", label: "Research Highlights", icon: Sparkles, color: "#f59e0b" },
      { key: "publications", label: "Publications", icon: FileText, color: "#2563eb" },
      { key: "seminar-colloquium", label: "Seminars & Colloquia", icon: CalendarDays, color: "#9333ea" },
    ]
  }
];

export function ResearchSidebar({ activeKey, onNavigate, accentColor }) {
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
                const isActive = activeKey === item.key;
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      className={`research-sidebar-nav-btn ${isActive ? 'active' : ''}`}
                      onClick={() => onNavigate(item.key)}
                      style={isActive ? { borderLeftColor: item.color, color: item.color } : {}}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <IconComponent 
                          size={15} 
                          style={{ color: isActive ? item.color : '#64748b' }} 
                        />
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight size={14} className="sidebar-arrow" />
                    </button>
                  </li>
                );
              })}
            </ul>
            {sIdx < researchNavList.length - 1 && <div className="research-sidebar-divider" />}
          </div>
        ))}
      </div>

      <div className="research-sidebar-help-card" style={{ marginTop: '18px', padding: '16px', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
        <h4 style={{ margin: '0 0 6px', fontSize: '0.85rem', fontWeight: 700, color: '#0f2942' }}>Research Deanery</h4>
        <p style={{ margin: '0 0 10px', fontSize: '0.78rem', color: '#64748b', lineHeight: 1.5 }}>
          Office of the Dean (Research &amp; Development)<br />
          IISER Tirupati, Yerpedu Campus
        </p>
        <a 
          href="mailto:dean_rnd@iisertirupati.ac.in" 
          style={{ fontSize: '0.78rem', color: 'var(--color-blue-primary, #0f3e6d)', fontWeight: 600, textDecoration: 'none' }}
        >
          dean_rnd@iisertirupati.ac.in &rarr;
        </a>
      </div>
    </aside>
  );
}
