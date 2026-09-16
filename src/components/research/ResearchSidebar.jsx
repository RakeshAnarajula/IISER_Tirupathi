import React from 'react';
import { useLocation, Link } from 'react-router-dom';
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
import styles from '../../styles/ResearchSidebar.module.scss';

const researchNavList = [
  {
    group: "Academic Departments",
    items: [
      { path: "/biology", label: "Biology", icon: Dna, color: "#0056B3" },
      { path: "/chemistry", label: "Chemistry", icon: FlaskConical, color: "#FF5722" },
      { path: "/earth-climate-sciences", label: "Earth & Climate Sciences", icon: Globe2, color: "#003B73" },
      { path: "/mathematics", label: "Mathematics", icon: Binary, color: "#0D6EFD" },
      { path: "/physics", label: "Physics", icon: Atom, color: "#0056B3" },
      { path: "/humanities-social-sciences", label: "Humanities & Social Sciences", icon: BookOpen, color: "#F26419" },
    ]
  },
  {
    group: "Centers & Initiatives",
    items: [
      { path: "/research-facilities", label: "Research Facilities", icon: Microscope, color: "#003B73" },
      { path: "/research-highlights", label: "Research Highlights", icon: Sparkles, color: "#FF5722" },
      { path: "/publications", label: "Publications", icon: FileText, color: "#0056B3" },
      { path: "/seminar-colloquium", label: "Seminars & Colloquia", icon: CalendarDays, color: "#F26419" },
    ]
  }
];

export function ResearchSidebar({ activePath }) {
  const location = useLocation();
  const currentPath = activePath || location.pathname;

  return (
    <aside className={styles.sidebar} aria-label="Research Navigation">
      <div className={styles.sidebarCard}>
        <div className={styles.sidebarHeading}>
          <Compass size={16} />
          <span>Research Divisions</span>
        </div>

        {researchNavList.map((section, sIdx) => (
          <div key={sIdx} className={styles.group}>
            <div className={styles.typeLabel}>{section.group}</div>
            <ul className={styles.navList}>
              {section.items.map((item) => {
                const IconComponent = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`${styles.navBtn} ${isActive ? styles.active : ''}`}
                    >
                      <span className={styles.navLabel}>
                        <IconComponent 
                          size={16} 
                          style={{ color: isActive ? item.color : '#4A5B75' }} 
                        />
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight size={14} className={styles.arrow} />
                    </Link>
                  </li>
                );
              })}
            </ul>
            {sIdx < researchNavList.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>

      <div className={styles.helpCard}>
        <h4 className={styles.helpTitle}>Research Deanery</h4>
        <p className={styles.helpText}>
          Office of the Dean (Research &amp; Development)<br />
          IISER Tirupati, Yerpedu Campus
        </p>
        <a 
          href="mailto:dean_rnd@iisertirupati.ac.in" 
          className={styles.helpLink}
        >
          dean_rnd@iisertirupati.ac.in &rarr;
        </a>
      </div>
    </aside>
  );
}

export default ResearchSidebar;

