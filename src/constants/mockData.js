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
    imageUrl: "/images/event-admissions.jpg"
  },
  {
    id: "research",
    title: "Research Facilities",
    tag: "World-Class",
    desc: "Explore Central Instrumentation Facility (CIF), 500MHz NMR, and HPC Cluster.",
    badgeColor: "#0056B3",
    icon: "Microscope",
    actionText: "Explore Facilities",
    imageUrl: "/images/event-nmr.jpg"
  },
  {
    id: "faculty",
    title: "Faculty & Fellows",
    tag: "Global Scholars",
    desc: "Distinguished scientists conducting high-impact fundamental and applied investigations.",
    badgeColor: "#E65100",
    icon: "Users",
    actionText: "Browse Directory",
    imageUrl: "/images/event-faculty.jpg"
  },
  {
    id: "campus",
    title: "Yerpedu Campus Tour",
    tag: "New Campus",
    desc: "Experience the 250-acre sustainable smart campus at the foothills of Tirumala.",
    badgeColor: "#003B73",
    icon: "Compass",
    actionText: "Virtual Tour",
    imageUrl: "/images/event-yerpedu.jpg"
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
    title: "IISER Tirupati Researchers Unveil Nanostructured Catalysts for Clean Hydrogen Generation",
    date: "August 14, 2024",
    category: "Research Breakthrough",
    tags: ["News", "Research", "Chemistry"],
    summary: "Faculty researchers at IISER Tirupati have published a breakthrough study in Nature Energy on efficient photoelectrochemical water splitting using earth-abundant nanostructured catalysts.",
    imageUrl: "/journal-cover-1.jpg",
    color: "#1E70BF"
  },
  {
    id: 2,
    title: "New High-Performance Computing (HPC) Supercomputing Cluster Dedicated at Yerpedu Campus",
    date: "August 02, 2024",
    category: "Campus & Infrastructure",
    tags: ["News", "Infrastructure", "Technology"],
    summary: "The institute has commissioned a state-of-the-art multi-GPU HPC cluster capable of petascale computational simulations for quantum chemistry, molecular docking, and climate modeling.",
    imageUrl: "/campus-hero.jpg",
    color: "#1E70BF"
  },
  {
    id: 3,
    title: "DST-SERB Sanctions ₹18.5 Crore Competitive Grants for Advanced Quantum Materials Research",
    date: "July 22, 2024",
    category: "Grants & Honors",
    tags: ["News", "Grants", "Physics"],
    summary: "Department of Science and Technology awards major multi-year research funding to physics and chemistry faculty for exploring topological insulators and superconducting materials.",
    imageUrl: "/card-highlights.jpg",
    color: "#1E70BF"
  },
  {
    id: 4,
    title: "IISER Tirupati Welcomes New Cohort of BS-MS and Doctoral Scholars to Srinivasapuram Campus",
    date: "July 15, 2024",
    category: "Academic Life",
    tags: ["News", "Academics", "Students"],
    summary: "Over 350 aspiring scientists inducted through IAT 2024 and doctoral fellowship programs into the institute's cutting-edge interdisciplinary curriculum.",
    imageUrl: "/convocation-yerpedu.jpg",
    color: "#1E70BF"
  },
  {
    id: 5,
    title: "Faculty Research Featured on Front Cover of Journal of the American Chemical Society (JACS)",
    date: "June 28, 2024",
    category: "Scientific Publications",
    tags: ["News", "Publication", "Chemistry"],
    summary: "The laboratory of bio-organic chemistry achieved cover recognition for synthesizing novel cyclic peptides that selectively inhibit bacterial membrane proteins.",
    imageUrl: "/journal-cover-2.jpg",
    color: "#1E70BF"
  },
  {
    id: 6,
    title: "IISER Tirupati Signs Strategic Research Partnership with International Earth Observation Center",
    date: "June 10, 2024",
    category: "Global Partnerships",
    tags: ["News", "Partnership", "Earth Sciences"],
    summary: "Collaborative agreement establishing real-time satellite data receiving stations for monitoring monsoon dynamics and Eastern Ghats biosphere biodiversity.",
    imageUrl: "/earth-climate-dept.jpg",
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
    tags: ["Event", "Chemistry", "Spectroscopy"],
    imageUrl: "/images/event-chemistry.jpg",
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
    tags: ["Event", "Chemistry", "Workshop"],
    imageUrl: "/images/event-nmr.jpg",
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
    tags: ["Event", "Convocation", "Academic"],
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
    tags: ["Event", "Biology", "Genomics"],
    imageUrl: "/images/event-biology.jpg",
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
    tags: ["Event", "Ecology", "Symposium"],
    imageUrl: "/images/event-ecology.jpg",
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
    tags: ["Event", "Chemistry", "Development"],
    imageUrl: "/images/event-spectroscopy.jpg",
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
    imageUrl: "/images/campus-hostels.jpg"
  },
  {
    title: "Central Library & Knowledge Center",
    badge: "Fully Automated",
    description: "Equipped with automated RFID issue systems, subscriptions to thousands of peer-reviewed e-journals (Nature, Science, Elsevier, IEEE), collaborative study booths, and 24x7 reading halls.",
    imageUrl: "/images/campus-library.jpg"
  },
  {
    title: "Dining & Social Cafeterias",
    badge: "Hygienic & Diverse",
    description: "Spacious student dining halls serving multi-regional nutritious meals managed by an active student-faculty mess council, alongside modern campus cafes.",
    imageUrl: "/images/campus-dining.jpg"
  },
  {
    title: "Sports Complex & Wellness",
    badge: "Active Campus",
    description: "Standard athletics track, floodlit basketball and volleyball courts, indoor badminton courts, gymnasium, table tennis, and yoga studios.",
    imageUrl: "/images/campus-sports.jpg"
  },
  {
    title: "Student Clubs & Culture",
    badge: "Vibrant Community",
    description: "Curiosity Science Club, Dhwani Cultural Society, Trekking & Eco Conservation, Robotics, Literary & Debating Forum, and social outreach initiatives.",
    imageUrl: "/images/event-admissions.jpg"
  }
];

export const featuredEvents = [
  {
    id: "feat-1",
    title: "The Department of Chemistry is set to announce the 4th SDP program on...",
    category: "Department of Chemistry",
    date: "2026",
    time: "Full-day Workshop",
    venue: "Department of Chemistry, Main Campus",
    summary: "The Department of Chemistry is set to announce the 4th Skill Development Program (SDP-4) on Spectroscopic Techniques: From Basic Science to Advanced Applications.",
    description: "The Department of Chemistry is set to announce the 4th SDP program on Spectroscopic Techniques: From Basic Science to Advanced Applications. The program covers UV-Vis, FTIR, Fluorescence, NMR, EPR, Mass spectrometry and XRD for researchers and students across India.",
    imageUrl: "/chemistry-dept.jpg",
    readMoreLink: "#"
  },
  {
    id: "feat-2",
    title: "Skill Development program on NMR spectroscopy",
    category: "Department of Chemistry",
    date: "2026",
    time: "10:00 AM - 5:00 PM",
    venue: "Central Instrumentation Facility (CIF)",
    summary: "Skill Development program on Nuclear Magnetic Resonance (NMR) spectroscopy principles, operations and high-resolution structural elucidation.",
    description: "Hands-on training and theoretical sessions on high-field NMR spectroscopy (500 MHz), pulse sequences, multi-dimensional NMR analysis, and biomolecular characterization conducted by CIF scientific specialists.",
    imageUrl: "/card-facilities.jpg",
    readMoreLink: "#"
  }
];

export const allRemainingEvents = [
  // Page 1 (Items 1 - 6)
  {
    id: "evt-1",
    page: 1,
    title: "Pre-Summit Activities for AI Impact Summit 2026 India AI Mission",
    category: "India AI Mission",
    date: "January 2026",
    venue: "Auditorium & Virtual Stream",
    summary: "Pre-summit hackathons and research roundtables evaluating generative AI, foundation models in science, and AI-driven scientific discovery.",
    description: "Organized as part of the India AI Mission, IISER Tirupati is hosting high-level panel discussions and hackathons highlighting AI applications in scientific discovery, climate modeling, and molecular biology.",
    imageUrl: "/campus-hero.jpg"
  },
  {
    id: "evt-2",
    page: 1,
    title: "Crafting Women Leaders in STEM",
    category: "Leadership & Diversity",
    date: "On 30-31 January 2026",
    venue: "C.V. Raman Hall, IISER Tirupati",
    summary: "Interactive leadership workshop designed to empower, mentor, and foster early-career and senior women scientists in STEM fields.",
    description: "A flagship conference featuring visionary women researchers, academicians, and industry leaders sharing mentorship, career journeys, leadership strategies, and institutional diversity roadmaps.",
    imageUrl: "/card-highlights.jpg"
  },
  {
    id: "evt-3",
    page: 1,
    title: "Inter IISER NISER Chemistry Meet (IINCM 2026)",
    category: "Chemistry",
    date: "January 2026",
    venue: "Lecture Hall Complex (LHC-1)",
    summary: "Annual flagship meet uniting top chemistry faculty and graduate scholars across all IISERs and NISER Bhubaneswar.",
    description: "Three-day premier national chemical sciences symposium featuring oral presentations, keynote talks by national laureates, and collaborative inter-institute research exchanges.",
    imageUrl: "/chemistry-dept.jpg"
  },
  {
    id: "evt-4",
    page: 1,
    title: "IISER Tirupati is pleased to announce “Anusandhan-2026” Symposium",
    category: "Symposium",
    date: "January 2026",
    venue: "Main Institute Auditorium",
    summary: "Institute-wide annual research symposium celebrating doctoral and postdoctoral scientific achievements across disciplines.",
    description: "Anusandhan-2026 brings together cross-departmental research scholars to showcase cutting-edge breakthroughs in biological, chemical, physical, mathematical, and earth sciences.",
    imageUrl: "/convocation-yerpedu.jpg"
  },
  {
    id: "evt-5",
    page: 1,
    title: "NATIONAL CONFERENCE ON CHEMISTRY FOR SUSTAINABILITY:...",
    category: "CSTT Conference",
    date: "July 2025",
    venue: "Department of Chemistry",
    summary: "National Conference on Chemistry for Sustainability: Today and Tomorrow (CSTT-2025).",
    description: "Dedicated to green chemistry, carbon-neutral syntheses, energy storage devices, bio-inspired catalysis, and environmental remediation technologies.",
    imageUrl: "/journal-cover-1.jpg"
  },
  {
    id: "evt-6",
    page: 1,
    title: "National Conference on “Chemistry for Sustainability: Today and Tomorrow...",
    category: "CSTT-2025",
    date: "July 2025",
    venue: "Yerpedu Campus",
    summary: "Scientific sessions and poster presentations highlighting sustainability in modern chemistry.",
    description: "National forum exploring clean chemical technologies, sustainable polymer materials, and renewable energy conversion mechanisms with participating delegates from across India.",
    imageUrl: "/journal-cover-2.jpg"
  },

  // Page 2 (Items 7 - 12)
  {
    id: "evt-7",
    page: 2,
    title: "CAMOST's Fourth Anniversary Event",
    category: "CAMOST",
    date: "2024",
    venue: "Center for Advanced Molecular Science and Technology",
    summary: "Celebrating four years of breakthrough multi-omics, spectroscopy, and advanced molecular sciences at CAMOST.",
    description: "Annual foundation lectures, facility showcases, and presentations of high-impact publications and industrial collaborations developed under CAMOST.",
    imageUrl: "/card-facilities.jpg"
  },
  {
    id: "evt-8",
    page: 2,
    title: "5th Convocation of IISER Tirupati",
    category: "Convocation",
    date: "12th July, 2024",
    venue: "Permanent Campus Auditorium, Yerpedu",
    summary: "Conferment of degrees to graduating BS-MS, MS(R), and PhD candidates with eminent chief guests.",
    description: "The 5th Annual Convocation of IISER Tirupati celebrating graduating batches, institute gold medalists, and visionary addresses by leading scientific leaders.",
    imageUrl: "/convocation-yerpedu.jpg"
  },
  {
    id: "evt-9",
    page: 2,
    title: "National Science Day IISER Tirupati",
    category: "Celebration",
    date: "28 February 2024",
    venue: "IISER Tirupati Campus",
    summary: "Open day celebration for school and college students commemorating the discovery of the Raman Effect.",
    description: "Live science demonstrations, laboratory visits, interactive quiz competitions, and keynote lecture on indigenous scientific technologies for Viksit Bharat.",
    imageUrl: "/physics-dept.jpg"
  },
  {
    id: "evt-10",
    page: 2,
    title: "Inauguration of IISER Tirupati",
    category: "Institutional Milestone",
    date: "2024",
    venue: "Permanent Campus, Srinivasapuram, Yerpedu",
    summary: "Historic dedication and formal inauguration of the state-of-the-art permanent campus facilities.",
    description: "Formal dedication of academic complexes, residential hostel buildings, central instrumentation facility, and digital infrastructure by government dignitaries.",
    imageUrl: "/moe-emblem.png"
  },
  {
    id: "evt-11",
    page: 2,
    title: "WORKSHOP ON IPR AND ENTREPRENEURSHIP DEVELOPMENT",
    category: "Innovation & IPR",
    date: "17th February, 2024",
    venue: "Lecture Hall Complex",
    summary: "Comprehensive workshop on patent filings, IP portfolio development, and scientific startup incubation.",
    description: "Guidance by patent attorneys and startup founders on transforming lab-scale research discoveries into intellectual property and deep-tech commercial ventures.",
    imageUrl: "/card-highlights.jpg"
  },
  {
    id: "evt-12",
    page: 2,
    title: "Biology Day Event 2024",
    category: "Biology",
    date: "January 2024",
    venue: "Department of Biology",
    summary: "Annual biological sciences colloquium highlighting genomics, neurobiology, ecology, and structural biology.",
    description: "A day filled with scientific talks, research poster sessions, and interactive workshops showcasing the department's cutting-edge life science investigations.",
    imageUrl: "/biology-dept.jpg"
  },

  // Page 3 (Items 13 - 18)
  {
    id: "evt-13",
    page: 3,
    title: "Inter-IISER Ecology Meet 2024",
    category: "Ecology & Wildlife",
    date: "2024",
    venue: "IISER Tirupati & Seshachalam Biosphere",
    summary: "Collaborative field and academic meet on biodiversity monitoring, climate impact, and evolutionary ecology.",
    description: "Field expeditions, workshops on wildlife tracking and remote sensing, and symposia addressing environmental conservation across Indian biomes.",
    imageUrl: "/earth-climate-dept.jpg"
  },
  {
    id: "evt-14",
    page: 3,
    title: "Meet the Editors : Indian Institute of Science Education and Research (IISE...",
    category: "Scholarly Publishing",
    date: "2023",
    venue: "Central Seminar Hall",
    summary: "Exclusive interactive session with chief editors of top international journals (RSC, ACS, Springer-Nature).",
    description: "Insights into peer-review standards, scientific manuscript preparation, publication ethics, and emerging open-access models.",
    imageUrl: "/journal-cover-3.jpg"
  },
  {
    id: "evt-15",
    page: 3,
    title: "SPIC MACAY Heritage Club @ IISER Tirupati",
    category: "Culture & Arts",
    date: "28th September 2023",
    venue: "Open Air Theatre, Yerpedu",
    summary: "Vibrant classical music and dance performance celebrating India's rich cultural heritage.",
    description: "Special rendition by renowned classical artists under SPIC MACAY, fostering cultural appreciation and mindfulness among students and faculty.",
    imageUrl: "/image_1.png"
  },
  {
    id: "evt-16",
    page: 3,
    title: "Yusuf Hamid Chemistry Camp 28th -30th July, 2023",
    category: "Outreach & Camp",
    date: "July 28th - 30th, 2023",
    venue: "Department of Chemistry",
    summary: "Royal Society of Chemistry & Yusuf Hamied inspiring residential chemistry camp for 9th grade students.",
    description: "Three-day immersive hands-on laboratory experience designed to kindle curiosity in chemical sciences among talented school students.",
    imageUrl: "/chemistry-dept.jpg"
  },
  {
    id: "evt-17",
    page: 3,
    title: "Fourth Annual Convocation",
    category: "Convocation",
    date: "2023",
    venue: "Main Campus Auditorium",
    summary: "Conferment of degrees to the graduating class of 2023 at IISER Tirupati.",
    description: "Distinguished gathering recognizing academic excellence, conferring BS-MS and doctoral degrees, and celebrating campus achievements.",
    imageUrl: "/convocation-yerpedu.jpg"
  },
  {
    id: "evt-18",
    page: 3,
    title: "SAAMARTHYA – Career Development Workshop",
    category: "Career & Training",
    date: "2023",
    venue: "Center for Career Development",
    summary: "Intensive career development workshop for higher studies, competitive fellowships, and industry placements.",
    description: "Resume workshops, mock technical interviews, fellowship application masterclasses, and alumni networking panels.",
    imageUrl: "/card-disciplines.jpg"
  },

  // Page 4 (Items 19 - 24)
  {
    id: "evt-19",
    page: 4,
    title: "8th Foundation Day",
    category: "Foundation Day",
    date: "2022",
    venue: "IISER Tirupati Auditorium",
    summary: "Celebration marking 8 years of excellence in science education and fundamental research.",
    description: "Foundation day address by esteemed national scientists, distribution of institute awards to students and staff, and review of academic growth.",
    imageUrl: "/campus-hero.jpg"
  },
  {
    id: "evt-20",
    page: 4,
    title: "Chemistry Day 2022",
    category: "Chemistry",
    date: "October 29, 2022",
    venue: "C. V. Raman Hall",
    summary: "Departmental symposium on Chemistry for Sustainable Development and Chemical Innovation.",
    description: "Lectures by eminent chemists, laboratory demonstrations, research scholar poster presentations, and interactive chemistry exhibitions.",
    imageUrl: "/chemistry-dept.jpg"
  },
  {
    id: "evt-21",
    page: 4,
    title: "Nobel Evening 2022 at IISER Tirupati on October 27, 2022",
    category: "Colloquium",
    date: "October 27, 2022",
    venue: "Yerpedu Campus Seminar Hall",
    summary: "Special colloquium explaining the breakthrough discoveries honored by the 2022 Nobel Prizes.",
    description: "Faculty experts decoded the Nobel Prizes in Physics (Quantum Entanglement), Chemistry (Click Chemistry), and Physiology/Medicine (Neanderthal Genomics).",
    imageUrl: "/card-highlights.jpg"
  },
  {
    id: "evt-22",
    page: 4,
    title: "Department of Physics presents Physics Day 2022",
    category: "Physics",
    date: "November 2022",
    venue: "Permanent Campus, IISER Tirupati",
    summary: "Gravitational lensing of gravitational waves and modern frontiers in quantum optics and astrophysics.",
    description: "Special keynote lectures, astrophysics observatory demonstrations, and graduate research presentations organized by the Department of Physics.",
    imageUrl: "/physics-dept.jpg"
  },
  {
    id: "evt-23",
    page: 4,
    title: "iGEM IISER Tirupati organizes a 3K Walk on PCOS to create awareness",
    category: "Social Awareness",
    date: "September 17, 2022",
    venue: "Transit & Permanent Campus",
    summary: "Community 3K walkathon raising public and campus awareness on Polycystic Ovary Syndrome (PCOS).",
    description: "Organized by the iGEM student team with faculty support to foster women's health awareness, clinical discussions, and open dialogue.",
    imageUrl: "/image_2.png"
  },
  {
    id: "evt-24",
    page: 4,
    title: "Biology Day 2022",
    eventDateBadge: "🗓 Event Date - 05/11/2022",
    category: "Biology",
    date: "05/11/2022",
    venue: "C. V. Raman Hall",
    summary: "Celebration in remembrance of Prof. Edavalath Kakkat Janaki Ammal: A scientist who sweetened the sugarcane.",
    description: "Commemorative memorial lecture celebrating botanical genetics pioneer E. K. Janaki Ammal, paired with biology symposia and student presentations.",
    imageUrl: "/biology-dept.jpg"
  }
];

