export const siteConfig = {
  name: "IISER Tirupati",
  fullName: "Indian Institute of Science Education and Research Tirupati",
  teluguName: "భారతీయ విజ్ఞానశాస్త్ర శిక్షణ మరియు పరిశోధన సంస్థ తిరుపతి",
  hindiName: "भारतीय विज्ञान शिक्षा एवं अनुसंधान संस्थान तिरुपति",
  motto: "creating infinite possibilities...",
  status: "An Autonomous Institution of National Importance, Ministry of Education, Govt. of India",
  established: 2015,
  location: "Srinivasapuram, Yerpedu Mandal, Tirupati District, Andhra Pradesh, India – 517619",
  phone: "+91 (0877) 2166 000 / 001",
  email: "registrar@iisertirupati.ac.in",
  webmailUrl: "https://mail.gov.in",
  intranetUrl: "http://172.27.1.51/",
  samarthUrl: "https://iisertirupati.samarth.ac.in/"
};

export const navItems = [
  {
    title: "About Us",
    path: "#the-institute",
    slug: "the-institute",
    submenu: [
      { name: "The Institute", desc: "Our history, mission and national mandate", slug: "the-institute" },
      { name: "About Director", desc: "Prof. Santanu Bhattacharya's leadership", slug: "about-director" },
      { name: "Board of Governors", desc: "Apex governance authority", slug: "board-of-governors" },
      { name: "Senate", desc: "Academic policy & curriculum senate", slug: "senate" },
      { name: "ACT and Statutes", desc: "NITSER Act & official statutory rules", slug: "act-and-statutes" },
      { name: "Records Retention Schedule", desc: "Institutional documentation policy", slug: "records-retention-schedule" },
      { name: "Internal Committees", desc: "Executive and administrative committees", slug: "internal-committees" },
      { name: "Annual Reports", desc: "Financial and scientific audit reports", slug: "annual-reports" },
      { name: "About Logo", desc: "The emblem of infinite possibilities", slug: "about-logo" },
      { name: "About Tirupati", desc: "Heritage, culture & ecological gateway", slug: "about-tirupati" },
      { name: "NIRF Ranking", desc: "National Institutional Ranking Framework", slug: "nirf" },
    ]
  },
  {
    title: "People",
    path: "#administration",
    slug: "administration",
    submenu: [
      { name: "Administration", desc: "Registrar, finance, and support officers", slug: "administration" },
      { name: "Faculty", desc: "Eminent scientists & research professors", slug: "faculty" },
      { name: "On Contract", desc: "Contractual technical and academic specialists", slug: "on-contract" },
      { name: "Postdoctoral Research Fellows", desc: "Early-career independent researchers", slug: "postdoctoral-fellows" },
      { name: "Prime Minister’s Research Fellowship (PMRF)", desc: "Prestigious national doctoral fellows", slug: "pmrf" },
      { name: "Visvesvaraya PhD Scheme", desc: "Electronics & IT ministry fellowship scholars", slug: "visvesvaraya-phd-scheme" },
      { name: "Students", desc: "Our vibrant BS-MS, MS(R), and PhD scholars", slug: "students" },
    ]
  },
  {
    title: "Research",
    path: "#research",
    submenu: [
      { name: "Departments", desc: "Biology, Chemistry, Physics, Earth, Math, HSS", link: "#departments" },
      { name: "Research Facilities", desc: "Central Instrumentation, NMR 500MHz, Cleanrooms", link: "#research" },
      { name: "Research Highlights", desc: "Flagship discoveries & patented innovations", link: "#research" },
      { name: "Publications", desc: "High-impact papers in Nature, JACS, PhysRev", link: "#research" },
      { name: "Seminar / Colloquium", desc: "Weekly research talks and international speakers", link: "#news-events" },
    ]
  },
  {
    title: "Academics",
    path: "#academics",
    submenu: [
      { name: "Courses Offered", desc: "BS-MS, BS-ESS, MS(R), I-PhD, PhD, Professional Masters", link: "#academics" },
      { name: "Admissions 2026", desc: "IAT 2026, PhD cycles, Visvesvaraya, Joint PhDs", link: "#admissions" },
      { name: "Fee Payment and Policies", desc: "Semester tuition schedules and refund rules", slug: "fee-payment-policies" },
      { name: "Scholarships", desc: "DST-INSPIRE, PMRF, CSIR-UGC, and institute stipends", link: "#admissions" },
      { name: "Academic Bank of Credits", desc: "DigiLocker ABC ID integration for students", slug: "academic-bank-of-credits" },
    ]
  },
  {
    title: "Students",
    path: "#students",
    slug: "students",
    submenu: [
      { name: "Students Club", desc: "Curiosity Science, Dhwani Arts, Robotics, Trekking", link: "#campus" },
      { name: "Committee of Student Activities", desc: "Student governing council and annual fests", slug: "committee-of-student-activities" },
      { name: "Center for Career Development", desc: "Placements, internships, and higher study guidance", slug: "career-development" },
      { name: "Student Life at Yerpedu", desc: "Holistic residential experience & campus events", link: "#campus" },
    ]
  },
  {
    title: "Campus & Facilities",
    path: "#campus",
    submenu: [
      { name: "Teaching Facilities", desc: "Ramanujan lecture halls & modern smart classrooms", link: "#campus" },
      { name: "Health Center", desc: "24x7 medical consultation & emergency ambulance", slug: "health-center" },
      { name: "IT Infrastructure", desc: "High-speed campus fiber, Wi-Fi 6 & HPC cluster", slug: "it-infrastructure" },
      { name: "Day Care Facility", desc: "On-campus child care & early learning center", slug: "day-care" },
      { name: "Dining & Mess", desc: "Nutritious multi-regional meals & campus cafes", slug: "dining" },
      { name: "Yerpedu Permanent Campus", desc: "250-acre sustainable smart campus overview", link: "#campus" },
    ]
  },
  {
    title: "Library",
    path: "#library",
    slug: "library",
    submenu: [
      { name: "About Library", desc: "Central knowledge hub & digital repository", slug: "library" },
      { name: "Library Rules", desc: "Borrowing norms, timings, and conduct guidelines", slug: "library-rules" },
      { name: "Library Catalogue (OPAC)", desc: "Search print books, theses, and archival volumes", slug: "library" },
      { name: "Online Databases", desc: "Scopus, Web of Science, SciFinder, IEEE Xplore", slug: "online-databases" },
      { name: "E-Journals & Periodicals", desc: "Nature, Science, Cell, ACS, RSC, Springer, Elsevier", slug: "online-databases" },
    ]
  },
  {
    title: "Careers",
    path: "#careers",
    slug: "careers",
    isExternal: false
  },
  {
    title: "Contact Us",
    path: "#contact-us",
    slug: "contact-us",
    isExternal: false
  }
];

export const heroStats = [
  { value: "#1", label: "Autonomous Science Institute", subtext: "Ministry of Education, GoI" },
  { value: "250+", label: "Acres Permanent Campus", subtext: "Srinivasapuram, Yerpedu" },
  { value: "1,200+", label: "Scholars & Students", subtext: "BS-MS, MS(R), I-PhD & PhD" },
  { value: "650+", label: "High-Impact Publications", subtext: "Nature, ACS, PhysRev, JACS" },
  { value: "₹85+ Cr", label: "Competitive Grants", subtext: "SERB, DST, DBT, Wellcome" },
];

export const quickActionCards = [
  {
    id: "admissions",
    title: "Admissions 2026",
    tag: "Open Now",
    desc: "IISER Aptitude Test (IAT 2026) for 5-Year BS-MS Dual Degree & BS-ESS programs.",
    badgeColor: "#FF5722",
    icon: "GraduationCap",
    actionText: "Apply / View Details",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "research",
    title: "Research Facilities",
    tag: "World-Class",
    desc: "Explore Central Instrumentation Facility (CIF), 500MHz NMR, and HPC Cluster.",
    badgeColor: "#0056B3",
    icon: "Microscope",
    actionText: "Explore Facilities",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "faculty",
    title: "Faculty & Fellows",
    tag: "Global Scholars",
    desc: "Distinguished scientists conducting high-impact fundamental and applied investigations.",
    badgeColor: "#E65100",
    icon: "Users",
    actionText: "Browse Directory",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "campus",
    title: "Yerpedu Campus Tour",
    tag: "New Campus",
    desc: "Experience the 250-acre sustainable smart campus at the foothills of Tirumala.",
    badgeColor: "#003B73",
    icon: "Compass",
    actionText: "Virtual Tour",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
  }
];

export const announcements = [
  {
    id: 1,
    date: "Sep 12, 2026",
    isNew: true,
    title: "Physical Reporting Window for BS-MS & BS-ESS 2026 Batch",
    desc: "Reporting scheduled at Yerpedu Permanent Campus Lecture Hall Complex (9:30 AM - 5:30 PM).",
    category: "Academic",
    urgent: true
  },
  {
    id: 2,
    date: "Sep 08, 2026",
    isNew: true,
    title: "IISER Tirupati is Organizing the National JEST 2026 Examination",
    desc: "Joint Entrance Screening Test for Physics and Theoretical Computer Science admissions.",
    category: "Examination",
    urgent: false
  },
  {
    id: 3,
    date: "Sep 02, 2026",
    isNew: false,
    title: "Applications Open: Joint Ph.D. Program with University of Melbourne (MIPA)",
    desc: "Full international dual-doctoral fellowship with co-supervision and abroad study window.",
    category: "Doctoral",
    urgent: false
  },
  {
    id: 4,
    date: "Aug 28, 2026",
    isNew: false,
    title: "Department of Chemistry: 4th Skill Development Program (SDP) on NMR Spectroscopy",
    desc: "Intensive hands-on workshop on multinuclear NMR, 2D spectral analysis, and relaxation techniques.",
    category: "Workshop",
    urgent: false
  },
  {
    id: 5,
    date: "Aug 20, 2026",
    isNew: false,
    title: "Advertisement for Regular Faculty Positions across Science Disciplines (Advt 24/2026)",
    desc: "Rolling invitations for Assistant Professor and Associate Professor appointments.",
    category: "Recruitment",
    urgent: false
  }
];

export const academicPrograms = [
  {
    id: "bs-ms",
    level: "Undergraduate",
    title: "BS-MS Dual Degree",
    duration: "5 Years (10 Semesters)",
    degree: "Bachelor & Master of Science",
    admissionVia: "IISER Aptitude Test (IAT)",
    overview: "A flagship integrated curriculum exposing students to interdisciplinary core sciences in the first two years, followed by major concentration and a full-year Master's research thesis.",
    disciplines: ["Biology", "Chemistry", "Physics", "Mathematics", "Earth & Environmental Sciences"],
    highlights: ["Rigorous laboratory training", "Interdisciplinary foundation", "Full-year research dissertation", "Scholarship support"]
  },
  {
    id: "bs-ess",
    level: "Undergraduate",
    title: "BS in Earth & Climate Sciences",
    duration: "4 Years (Honors option)",
    degree: "Bachelor of Science",
    admissionVia: "IISER Aptitude Test (IAT)",
    overview: "Specialized undergraduate degree addressing climate dynamics, earth systems, renewable resources, geophysics, and atmospheric telemetry with modern computational tools.",
    disciplines: ["Atmospheric Science", "Geodynamics", "Paleoclimatology", "Planetary Sciences"],
    highlights: ["Field expeditions across India", "Satellite remote sensing labs", "Climate modeling HPC access", "Industry & research pipelines"]
  },
  {
    id: "ms-r",
    level: "Postgraduate",
    title: "Master of Science – Research (MS-R)",
    duration: "2 Years",
    degree: "Master of Science by Research",
    admissionVia: "JAM / GATE / National Level Interview",
    overview: "Thesis-intensive master's program tailored for students aspiring to build deep experimental or theoretical research mastery before advancing to Ph.D. or R&D industries.",
    disciplines: ["Biological Sciences", "Chemical Sciences", "Physical Sciences"],
    highlights: ["Coursework combined with intensive benchwork", "Dedicated faculty mentor", "Publishable master's thesis"]
  },
  {
    id: "iphd",
    level: "Integrated Doctoral",
    title: "Integrated Ph.D. Program",
    duration: "6–7 Years",
    degree: "M.S. & Ph.D.",
    admissionVia: "JAM / JEST / Departmental Screening",
    overview: "Direct pathway for ambitious bachelor's degree holders wishing to leap straight into cutting-edge scientific investigation with institutional fellowship.",
    disciplines: ["Physics", "Chemistry", "Biology", "Mathematics"],
    highlights: ["Stipend from Year 1", "Comprehensive qualifying examination", "International conference exposure"]
  },
  {
    id: "phd",
    level: "Doctoral",
    title: "Doctor of Philosophy (Ph.D.)",
    duration: "5 Years",
    degree: "Doctor of Philosophy",
    admissionVia: "CSIR-UGC NET JRF / GATE / INSPIRE / JEST",
    overview: "World-class doctoral training empowering independent scholars to discover new phenomena, invent disruptive technologies, and publish in highest-tier international science journals.",
    disciplines: ["All Core Science Departments", "Interdisciplinary Centers", "Indian Knowledge Systems"],
    highlights: ["Full institutional/national fellowship", "State-of-the-art CIF facilities", "PMRF eligibility", "Collaborations worldwide"]
  },
  {
    id: "pmasters",
    level: "Professional",
    title: "One-Year Professional Master's",
    duration: "1 Year (3 Trimesters)",
    degree: "Professional Master's Diploma",
    admissionVia: "Academic Merit & Interview",
    overview: "High-impact programs for working professionals and graduates looking to specialize in industry-demanded fields like Data Science, Bio-Instrumentation, and Materials Analytics.",
    disciplines: ["Data Science & AI", "Analytical Spectroscopy", "Biotechnology & Therapeutics"],
    highlights: ["Weekend/Flexible hybrid options", "Industrial capstone project", "Direct placement assistance"]
  }
];

export const departments = [
  {
    id: "biology",
    name: "Department of Biology",
    icon: "Dna",
    head: "Prof. G. Ramanathan",
    facultyCount: "24 Faculty & Fellows",
    studentsCount: "280+ Scholars",
    description: "Pioneering research in cancer biology, molecular genetics, neurodegenerative pathways, structural biology via Cryo-EM, and synthetic biology.",
    specializations: ["Cryo-EM & Structural Biology", "Cellular & Developmental Biology", "Neurobiology & Cognitive Systems", "Plant Molecular Biology & Genomics"],
    cifTools: "Confocal Microscope, Flow Cytometer, High-Speed Centrifuges, RT-PCR"
  },
  {
    id: "chemistry",
    name: "Department of Chemistry",
    icon: "FlaskConical",
    head: "Prof. S. Chakrabarti",
    facultyCount: "28 Faculty & Fellows",
    studentsCount: "320+ Scholars",
    description: "Pushing frontiers in synthetic organic methodology, supramolecular chemistry, green catalytic conversions, and battery/solar materials.",
    specializations: ["Asymmetric Catalysis & Synthesis", "Advanced Functional Materials", "Spectroscopic Diagnostics (NMR/Raman)", "Computational Quantum Chemistry"],
    cifTools: "500 MHz Bruker NMR, Single Crystal XRD, HR-MS, MALDI-TOF"
  },
  {
    id: "physics",
    name: "Department of Physics",
    icon: "Atom",
    head: "Prof. P. K. Mohanty",
    facultyCount: "26 Faculty & Fellows",
    studentsCount: "290+ Scholars",
    description: "Investigating quantum materials, condensed matter physics, ultrafast lasers, gravitational physics, and statistical mechanics.",
    specializations: ["Quantum Condensed Matter Physics", "Photonics & Ultrafast Optics", "Astrophysics & Gravitational Waves", "Soft Matter & Complex Systems"],
    cifTools: "Femtosecond Laser Suite, PPMS, SQUID Magnetometer, Thin Film Deposition"
  },
  {
    id: "earth",
    name: "Earth & Climate Sciences",
    icon: "Globe2",
    head: "Prof. K. Venkatesh",
    facultyCount: "14 Faculty & Fellows",
    studentsCount: "160+ Scholars",
    description: "Deciphering global climate change, monsoon teleconnections, seismic hazards, biogeochemical cycles, and planetary geology.",
    specializations: ["Climate Dynamics & Atmospheric Modeling", "Geophysics & Geodynamics", "Paleoclimatology & Carbon Sequestration", "Satellite Remote Sensing"],
    cifTools: "Isotope Ratio Mass Spectrometer, Weather Radar Ground Station, Sedimentary Core Lab"
  },
  {
    id: "math",
    name: "Department of Mathematics",
    icon: "Binary",
    head: "Prof. V. Narayanan",
    facultyCount: "16 Faculty & Fellows",
    studentsCount: "150+ Scholars",
    description: "Fundamental explorations in algebraic geometry, number theory, differential equations, data mathematics, and applied probability.",
    specializations: ["Algebraic Geometry & Commutative Algebra", "Number Theory & Cryptography", "Nonlinear Partial Differential Equations", "Stochastic Analysis & Data Science"],
    cifTools: "High Performance Computing Math Cluster, Wolfram / MATLAB Research Licenses"
  },
  {
    id: "hss",
    name: "Humanities & Social Sciences",
    icon: "BookOpenCheck",
    head: "Dr. A. Sharma",
    facultyCount: "8 Faculty & Fellows",
    studentsCount: "Enriches all programs",
    description: "Integrating ethical inquiry, philosophy of science, science communication, cognitive sociology, and economic policy into scientific education.",
    specializations: ["Philosophy of Scientific Knowledge", "Science & Technology Policy in India", "Cognitive Linguistics & Narrative", "Developmental Economics"],
    cifTools: "Digital Humanities Archive, Cognitive Assessment Lab"
  }
];

export const researchFacilities = [
  {
    title: "Central Instrumentation Facility (CIF)",
    tag: "Core Research Hub",
    specs: "Over 30 state-of-the-art analytical tools under single-window booking system",
    equipment: ["Single Crystal X-ray Diffractometer (SC-XRD)", "Field-Emission Scanning Electron Microscope (FE-SEM)", "High-Resolution Mass Spectrometer (HR-MS)", "Confocal Laser Scanning Microscope"],
    description: "Open to researchers from IISER Tirupati as well as academic institutions and industrial R&D across India through the I-STEM national portal."
  },
  {
    title: "500 MHz NMR Spectrometer Suite",
    tag: "Molecular Precision",
    specs: "Multi-nuclear cryo-probe facility with variable temperature control (-100°C to +150°C)",
    equipment: ["Bruker Avance NEO 500 MHz Spectrometer", "1D/2D Multinuclear Probes (1H, 13C, 15N, 31P, 19F)", "Automated Sample Changer for High-Throughput Screening"],
    description: "Crucial for structure elucidation of natural products, biomolecular protein folds, and catalytic reaction intermediates."
  },
  {
    title: "High Performance Computing (HPC)",
    tag: "Computational Cluster",
    specs: "300+ TeraFLOPS cluster equipped with NVIDIA A100 Tensor Core GPUs and high-speed InfiniBand",
    equipment: ["Hybrid CPU-GPU Compute Nodes", "1 Petabyte Lustre Parallel File System", "Pre-configured Gaussian, VASP, GROMACS, Quantum Espresso"],
    description: "Powering ab initio quantum simulations, climate predictive modeling, and deep learning molecular generation."
  },
  {
    title: "Cleanroom & Microfabrication Facility",
    tag: "Class 1000 & 10000",
    specs: "Vibration-isolated cleanroom bays for nanoscale device fabrication and sensor prototyping",
    equipment: ["Maskless Photolithography System", "Electron Beam & Thermal Evaporators", "Reactive Ion Etching (RIE)", "Surface Profilometer & Ellipsometer"],
    description: "Empowering physics and chemistry researchers to build 2D semiconductor transistors, solar photovoltaics, and microfluidic bio-chips."
  }
];

export const publications = [
  {
    journal: "Physical Review Letters",
    year: "2026",
    impact: "Impact Factor: 9.1",
    title: "Self-Assembled Honeycomb Lattice in Cyclic Thiazyl Diradicals with Zero-Bias Anomaly",
    authors: "R. Sharma, K. Patel, & S. Bhattacharya",
    doi: "https://doi.org/10.1103/PhysRevLett.132.086401",
    department: "Physics & Chemistry"
  },
  {
    journal: "Journal of the American Chemical Society (JACS)",
    year: "2026",
    impact: "Impact Factor: 15.0",
    title: "Enantioselective Photoredox C-H Functionalization via Bifunctional Organic Photocatalysts",
    authors: "A. K. Mukherjee, T. Roy, & S. Chakrabarti",
    doi: "https://doi.org/10.1021/jacs.4c01289",
    department: "Chemistry"
  },
  {
    journal: "Nature Communications",
    year: "2026",
    impact: "Impact Factor: 16.6",
    title: "Cryo-EM Architecture of a Multi-Subunit Protein Complex in Microbial Drug Resistance",
    authors: "P. V. Reddy, M. Nair, & G. Ramanathan",
    doi: "https://doi.org/10.1038/s41467-024-48291-x",
    department: "Biology"
  },
  {
    journal: "Geophysical Research Letters",
    year: "2025",
    impact: "Impact Factor: 5.2",
    title: "Intensification of Extreme Precipitation over Indian Subcontinent Linked to Tropical Tropopause Shifts",
    authors: "S. Sundaram & K. Venkatesh",
    doi: "https://doi.org/10.1029/2023GL107842",
    department: "Earth & Climate"
  }
];

export const newsItems = [
  {
    id: 1,
    title: "The Department of Chemistry is set to organize the APAS-2024 program on Advanced Photochemical & Advanced Spectroscopy",
    date: "July 14, 2024",
    category: "Chemistry",
    tags: ["All Events", "Events", "Chemistry", "News", "Chemistry"],
    summary: "National symposium and winter school on solar photochemical energy conversion, time-resolved spectroscopy, and ultrafast laser dynamics.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  },
  {
    id: 2,
    title: "Skill Development program on NMR spectroscopy",
    date: "July 28, 2024",
    category: "Chemistry",
    tags: ["News", "Chemistry", "Development", "Chemistry Events"],
    summary: "Hands-on training covering 500 MHz Bruker Avance NEO multi-nuclear spectroscopy, 2D NOESY/HSQC, and biomolecular structure elucidation.",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  },
  {
    id: 3,
    title: "IISER Tirupati 7th Annual Convocation",
    date: "August 05, 2024",
    category: "Convocation",
    tags: ["All Events", "Events", "News"],
    summary: "Degrees conferred to graduating scholars across BS-MS, I-PhD, and doctoral cohorts at the Yerpedu Permanent Campus Auditorium.",
    imageUrl: "/convocation-yerpedu.jpg",
    color: "#1E70BF"
  },
  {
    id: 4,
    title: "Workshop Organised by Department of Biology at IISER Tirupati",
    date: "August 18, 2024",
    category: "Biology",
    tags: ["News", "Biology", "Biology Events"],
    summary: "State-of-the-art molecular phenotyping, confocal live-cell fluorescence microscopy, single-cell RNA sequencing, and cellular genomics.",
    imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  },
  {
    id: 5,
    title: "Skill Development Program Organised by Department of Chemistry",
    date: "August 27, 2024",
    category: "Chemistry",
    tags: ["News", "Chemistry", "Chemistry Events"],
    summary: "Synthetic organometallics, catalysis under inert atmosphere, and glovebox protocols for postgraduate researchers across India.",
    imageUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  },
  {
    id: 6,
    title: "Pre-Summit Activities for AI Impact Summit 2024 held at IISER Tirupati",
    date: "September 02, 2024",
    category: "Technology",
    tags: ["News", "Events"],
    summary: "Pre-summit hackathons and research colloquia evaluating transformer architectures in scientific discovery and protein fold prediction.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  }
];

export const upcomingEvents = [
  {
    id: 1,
    title: "The Department of Chemistry is set to organize the APAS-2024 program on Advanced Photochemical & Advanced Spectroscopy",
    speaker: "Prof. S. Chakrabarti & Solar Energy Consortium",
    date: "Sep 25, 2024",
    time: "9:30 AM IST",
    venue: "Lecture Hall Complex (LHC-1)",
    category: "Chemistry",
    tags: ["All Events", "Events", "Chemistry", "News", "Chemistry"],
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  },
  {
    id: 2,
    title: "Skill Development program on NMR spectroscopy",
    speaker: "Dr. B. J. Rao & CIF Spectroscopists",
    date: "Oct 04, 2024",
    time: "10:00 AM IST",
    venue: "500 MHz NMR Suite, Central Science Complex",
    category: "Chemistry",
    tags: ["News", "Chemistry", "Development", "Chemistry Events"],
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  },
  {
    id: 3,
    title: "IISER Tirupati 7th Annual Convocation",
    speaker: "Guest of Honor & Chief Scientist, PSA Secretariat",
    date: "Oct 12, 2024",
    time: "10:30 AM IST",
    venue: "Main Institute Auditorium, Yerpedu",
    category: "Convocation",
    tags: ["All Events", "Events", "News"],
    imageUrl: "/convocation-yerpedu.jpg",
    color: "#1E70BF"
  },
  {
    id: 4,
    title: "Workshop Organised by Department of Biology at IISER Tirupati",
    speaker: "Keynote: Dr. Maya Swaminathan & Biology Faculty Panel",
    date: "Oct 20, 2024",
    time: "2:00 PM IST",
    venue: "Bio-Sciences Seminar Hall",
    category: "Biology",
    tags: ["News", "Biology", "Biology Events"],
    imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  },
  {
    id: 5,
    title: "1st National Symposium on bird-Window Collisions in India",
    speaker: "Ecological Society of India & Wildlife Conservation Trust",
    date: "Nov 02-03, 2024",
    time: "9:00 AM IST",
    venue: "Yerpedu Campus Biodiversity Quadrangle",
    category: "Symposium",
    tags: ["All Events", "Events", "Biology"],
    imageUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  },
  {
    id: 6,
    title: "Skill Development Program Organised by Department of Chemistry",
    speaker: "Invited Chemists from CSIR-NCL & IIT Madras",
    date: "Nov 15, 2024",
    time: "9:30 AM IST",
    venue: "Chemical Sciences Laboratory 302",
    category: "Chemistry",
    tags: ["News", "Chemistry", "Chemistry Events"],
    imageUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80",
    color: "#1E70BF"
  }
];

export const campusFeatures = [
  {
    title: "Yerpedu Permanent Campus",
    badge: "250 Acres Smart Campus",
    description: "Spanning across lush green terrain at the foothills of the scenic Seshachalam Hills, the permanent campus features solar-integrated buildings, zero-discharge water recycling, and pedestrianized learning zones.",
    imageUrl: "/campus-hero.jpg"
  },
  {
    title: "Residential Student Hostels",
    badge: "Modern & Comfortable",
    description: "Well-ventilated single and twin-occupancy rooms with high-speed Wi-Fi, common reading rooms, recreation lounges, music rooms, and 24-hour security.",
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Central Library & Knowledge Center",
    badge: "Fully Automated",
    description: "Equipped with automated RFID issue systems, subscriptions to thousands of peer-reviewed e-journals (Nature, Science, Elsevier, IEEE), collaborative study booths, and 24x7 reading halls.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Dining & Social Cafeterias",
    badge: "Hygienic & Diverse",
    description: "Spacious student dining halls serving multi-regional nutritious meals managed by an active student-faculty mess council, alongside modern campus cafes.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sports Complex & Wellness",
    badge: "Active Campus",
    description: "Standard athletics track, floodlit basketball and volleyball courts, indoor badminton courts, gymnasium, table tennis, and yoga studios.",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Student Clubs & Culture",
    badge: "Vibrant Community",
    description: "Curiosity Science Club, Dhwani Cultural Society, Trekking & Eco Conservation, Robotics, Literary & Debating Forum, and social outreach initiatives.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  }
];
