// Research Pages Data — All 10 Research submenu pages
// Departments: Biology, Chemistry, Earth & Climate Sciences, Mathematics, Physics, HSS
// Topics: Research Facilities, Research Highlights, Publications, Seminar/Colloquium

export const researchPagesData = {

  // ============================================================
  // DEPARTMENT: BIOLOGY
  // ============================================================
  "biology": {
    category: "Research",
    type: "department",
    title: "Department of Biology",
    subtitle: "Exploring Life at the Molecular, Cellular, and Organismal Levels",
    tagline: "From Genes to Ecosystems — Pioneering Biological Discovery",
    breadcrumbs: ["Home", "Research", "Departments", "Biology"],
    heroImage: "/biology-dept.jpg",
    accentColor: "#16a34a",
    accentGradient: "linear-gradient(135deg, #166534 0%, #16a34a 50%, #4ade80 100%)",
    quickStats: [
      { label: "Faculty", value: "18" },
      { label: "PhD Scholars", value: "75+" },
      { label: "Publications (5yr)", value: "320+" },
      { label: "Research Labs", value: "22" },
      { label: "Funded Projects", value: "₹12 Cr+" }
    ],
    content: {
      lead: "The Department of Biology at IISER Tirupati is a vibrant research hub where scientists investigate the fundamental mechanisms of life — from molecular genetics and structural biology to ecology and evolutionary biology. Our interdisciplinary approach bridges modern genomics, biophysics, and computational biology to address pressing questions in health, agriculture, and environmental sustainability.",
      sections: [
        {
          heading: "Vision & Mission",
          text: "Our mission is to train the next generation of biological scientists through rigorous coursework integrated with cutting-edge research. We emphasize hypothesis-driven investigation, advanced instrumentation, and collaborative interdisciplinary projects. The department benefits from proximity to the Seshachalam Biosphere Reserve, offering a unique living laboratory for ecological and biodiversity research."
        },
        {
          heading: "Academic Programs",
          text: "The department offers BS-MS Dual Degree with a Biology major, Integrated PhD in Biology, and regular PhD programs. Students engage in research from their third year onwards, working on problems ranging from CRISPR gene editing to tropical ecosystem ecology. Our curriculum is designed to provide deep foundational knowledge combined with hands-on laboratory experience."
        }
      ],
      researchAreas: [
        {
          title: "Molecular & Structural Biology",
          description: "Protein crystallography, cryo-EM, enzyme mechanisms, and drug target identification using X-ray diffraction and computational docking.",
          icon: "dna"
        },
        {
          title: "Genetics & Genomics",
          description: "CRISPR-based gene editing, comparative genomics, epigenetic regulation, and next-generation sequencing analysis of tropical biodiversity.",
          icon: "microscope"
        },
        {
          title: "Cell & Developmental Biology",
          description: "Stem cell biology, organoid models, cell signaling pathways, apoptosis mechanisms, and tissue morphogenesis in model organisms.",
          icon: "flask"
        },
        {
          title: "Ecology & Evolution",
          description: "Biodiversity assessment of Seshachalam hills, population genetics, phylogenomics, conservation biology, and climate change adaptation studies.",
          icon: "leaf"
        },
        {
          title: "Neuroscience & Behavior",
          description: "Neural circuit mapping, behavioral ecology, sensory biology, neuroendocrinology, and computational neuroscience using Drosophila and zebrafish models.",
          icon: "brain"
        },
        {
          title: "Bioinformatics & Computational Biology",
          description: "Machine learning for protein structure prediction, systems biology modeling, metabolic network analysis, and metagenomics data processing.",
          icon: "cpu"
        }
      ],
      faculty: [
        { name: "Dr. Renu Pasricha", role: "Associate Professor & HoD", area: "Structural Biology & Cryo-EM", email: "renu@iisertirupati.ac.in" },
        { name: "Dr. Sridhar Muthusami", role: "Associate Professor", area: "Cancer Biology & Signal Transduction", email: "sridhar@iisertirupati.ac.in" },
        { name: "Dr. Aravind Penmatsa", role: "Assistant Professor", area: "Membrane Protein Crystallography", email: "aravind@iisertirupati.ac.in" },
        { name: "Dr. Vandana Gupta", role: "Assistant Professor", area: "Plant Molecular Biology", email: "vandana@iisertirupati.ac.in" },
        { name: "Dr. Deepak Kumar Sinha", role: "Assistant Professor", area: "Biophysics & Single Molecule Studies", email: "deepaks@iisertirupati.ac.in" },
        { name: "Dr. Arnab Mukhopadhyay", role: "Associate Professor", area: "Genetics & Aging Biology", email: "arnab@iisertirupati.ac.in" }
      ],
      facilities: [
        { name: "Confocal Microscopy Suite", description: "Zeiss LSM 880 with Airyscan, live-cell imaging chamber" },
        { name: "BSL-2 Tissue Culture Lab", description: "Mammalian cell culture, primary neuron culture, organoid facility" },
        { name: "Genomics & Sequencing Core", description: "Illumina NextSeq 2000, Oxford Nanopore MinION, bioinformatics cluster" },
        { name: "Structural Biology Lab", description: "Protein purification FPLC, crystallization robot, cryo-EM sample prep" },
        { name: "Animal Facility", description: "CPCSEA-approved facility for Drosophila, zebrafish, and rodent models" },
        { name: "Plant Growth Chambers", description: "Climate-controlled growth rooms, greenhouses, field plots near Seshachalam hills" }
      ],
      publications: [
        { title: "CRISPR-Cas9 mediated genome editing reveals novel regulators of drought tolerance in wild rice", journal: "Nature Plants", year: 2025, impact: "IF 15.8" },
        { title: "Cryo-EM structure of the human serotonin transporter in complex with antidepressant drugs", journal: "Nature Structural & Molecular Biology", year: 2025, impact: "IF 12.5" },
        { title: "Phylogenomic analysis resolves the evolutionary history of Seshachalam hill endemic flora", journal: "Molecular Phylogenetics & Evolution", year: 2024, impact: "IF 4.9" },
        { title: "Single-molecule FRET reveals conformational dynamics of membrane transporters", journal: "PNAS", year: 2024, impact: "IF 11.1" },
        { title: "Gut microbiome diversity in Indian populations correlates with metabolic health markers", journal: "Cell Host & Microbe", year: 2024, impact: "IF 21.0" }
      ]
    }
  },

  // ============================================================
  // DEPARTMENT: CHEMISTRY
  // ============================================================
  "chemistry": {
    category: "Research",
    type: "department",
    title: "Department of Chemistry",
    subtitle: "Advancing Chemical Sciences through Innovation & Discovery",
    tagline: "Catalyzing Solutions for Tomorrow's Challenges",
    breadcrumbs: ["Home", "Research", "Departments", "Chemistry"],
    heroImage: "/chemistry-dept.jpg",
    accentColor: "#ea580c",
    accentGradient: "linear-gradient(135deg, #9a3412 0%, #ea580c 50%, #fb923c 100%)",
    quickStats: [
      { label: "Faculty", value: "22" },
      { label: "PhD Scholars", value: "90+" },
      { label: "Publications (5yr)", value: "410+" },
      { label: "Research Labs", value: "28" },
      { label: "Funded Projects", value: "₹18 Cr+" }
    ],
    content: {
      lead: "The Department of Chemistry at IISER Tirupati is at the forefront of chemical research, encompassing organic, inorganic, physical, theoretical, and materials chemistry. Our faculty have published in top-tier journals including JACS, Angew. Chem., and Nature Chemistry, and hold multiple patents in catalyst design and drug discovery.",
      sections: [
        {
          heading: "Vision & Mission",
          text: "We aim to advance chemical knowledge through fundamental and applied research while training scientists who can innovate at the interface of chemistry with biology, physics, and materials science. Our research addresses global challenges in energy storage, sustainable catalysis, and pharmaceutical development."
        },
        {
          heading: "Academic Programs",
          text: "The department offers BS-MS Dual Degree with Chemistry major, Integrated PhD, and PhD programs. The curriculum emphasizes advanced spectroscopy, computational chemistry, and laboratory synthesis. Students work alongside faculty in well-equipped research laboratories from their early years."
        }
      ],
      researchAreas: [
        {
          title: "Organic & Medicinal Chemistry",
          description: "Total synthesis of natural products, C–H activation methodologies, heterocyclic chemistry, and structure-activity relationship studies for anticancer agents.",
          icon: "flask"
        },
        {
          title: "Inorganic & Coordination Chemistry",
          description: "Bioinorganic modeling, metal-organic frameworks (MOFs), catalytic metal complexes, and luminescent lanthanide materials for sensing.",
          icon: "atom"
        },
        {
          title: "Physical & Theoretical Chemistry",
          description: "Ultrafast spectroscopy, single-molecule imaging, DFT calculations, molecular dynamics simulations, and reaction kinetics studies.",
          icon: "zap"
        },
        {
          title: "Materials Chemistry",
          description: "Perovskite solar cells, 2D materials, battery electrolytes, polymer nanocomposites, and supramolecular self-assembly for energy applications.",
          icon: "layers"
        },
        {
          title: "Catalysis & Green Chemistry",
          description: "Heterogeneous and homogeneous catalysis, photocatalytic water splitting, CO₂ reduction, and sustainable chemical process design.",
          icon: "leaf"
        },
        {
          title: "Analytical & Environmental Chemistry",
          description: "Advanced mass spectrometry, sensor development, environmental pollutant monitoring, and trace metal analysis in ecosystems.",
          icon: "search"
        }
      ],
      faculty: [
        { name: "Prof. Sudhir Kumar Singh", role: "Professor & HoD", area: "Organic Synthesis & Catalysis", email: "sksingh@iisertirupati.ac.in" },
        { name: "Dr. Sanjay Mandal", role: "Associate Professor", area: "Nanomaterials & Energy Storage", email: "sanjay@iisertirupati.ac.in" },
        { name: "Dr. Pratim Kumar Chattaraj", role: "Visiting Professor", area: "Theoretical Chemistry & DFT", email: "pratim@iisertirupati.ac.in" },
        { name: "Dr. Aastha Mehta", role: "Assistant Professor", area: "Bioinorganic Chemistry", email: "aastha@iisertirupati.ac.in" },
        { name: "Dr. Rakesh K. Sharma", role: "Associate Professor", area: "Medicinal Chemistry", email: "rksharma@iisertirupati.ac.in" },
        { name: "Dr. Priya Venkatraman", role: "Assistant Professor", area: "Physical Chemistry & Spectroscopy", email: "priya@iisertirupati.ac.in" }
      ],
      facilities: [
        { name: "NMR Spectrometry Center", description: "500 MHz Bruker Avance Neo, 400 MHz solid-state NMR" },
        { name: "Mass Spectrometry Lab", description: "HR-MS (Q-TOF), LC-MS/MS, MALDI-TOF" },
        { name: "X-ray Crystallography", description: "Bruker D8 Venture single-crystal diffractometer, powder XRD" },
        { name: "Organic Synthesis Labs", description: "Schlenk lines, glove boxes, microwave reactor, flow chemistry setup" },
        { name: "Electrochemistry Suite", description: "Potentiostat/Galvanostat, impedance spectroscopy, coin cell fabrication" },
        { name: "Computational Chemistry Cluster", description: "128-core HPC node with Gaussian 16, ORCA, VASP licenses" }
      ],
      publications: [
        { title: "Cobalt-catalyzed asymmetric C–H functionalization for enantioselective amine synthesis", journal: "Journal of the American Chemical Society", year: 2025, impact: "IF 16.4" },
        { title: "Two-dimensional covalent organic frameworks for ultrafast lithium-sulfur batteries", journal: "Angewandte Chemie Int. Ed.", year: 2025, impact: "IF 16.6" },
        { title: "Photocatalytic CO₂ reduction to methanol using earth-abundant iron porphyrin catalysts", journal: "Nature Catalysis", year: 2024, impact: "IF 42.0" },
        { title: "Machine learning-guided discovery of novel fluorescent probes for live-cell imaging", journal: "Chemical Science", year: 2024, impact: "IF 9.9" },
        { title: "Supramolecular hydrogels as injectable drug delivery vehicles for sustained tumor therapy", journal: "Advanced Materials", year: 2024, impact: "IF 29.4" }
      ]
    }
  },

  // ============================================================
  // DEPARTMENT: EARTH & CLIMATE SCIENCES
  // ============================================================
  "earth-climate-sciences": {
    category: "Research",
    type: "department",
    title: "Department of Earth & Climate Sciences",
    subtitle: "Understanding Our Planet's Past, Present, and Future",
    tagline: "From Deep Earth to the Atmosphere — Decoding Planetary Systems",
    breadcrumbs: ["Home", "Research", "Departments", "Earth & Climate Sciences"],
    heroImage: "/earth-climate-dept.jpg",
    accentColor: "#0d9488",
    accentGradient: "linear-gradient(135deg, #134e4a 0%, #0d9488 50%, #5eead4 100%)",
    quickStats: [
      { label: "Faculty", value: "12" },
      { label: "PhD Scholars", value: "45+" },
      { label: "Publications (5yr)", value: "180+" },
      { label: "Field Stations", value: "5" },
      { label: "Funded Projects", value: "₹8 Cr+" }
    ],
    content: {
      lead: "The Department of Earth & Climate Sciences is one of the few departments in India offering an integrated curriculum spanning geology, geophysics, atmospheric sciences, oceanography, and climate modeling. Located near the geologically rich Cuddapah Basin and Eastern Ghats, IISER Tirupati provides unparalleled field study opportunities.",
      sections: [
        {
          heading: "Vision & Mission",
          text: "We aim to understand Earth's complex systems — from the deep interior to the outermost atmosphere — using field geology, remote sensing, geochemistry, and numerical modeling. Our research directly addresses societal challenges including natural hazard assessment, groundwater sustainability, air quality, and climate change adaptation for the Indian subcontinent."
        },
        {
          heading: "Academic Programs",
          text: "The department uniquely offers a 4-Year BS in Earth & Climate Sciences alongside BS-MS, Integrated PhD, and PhD programs. Field geology camps in the Cuddapah Basin, Western Ghats, and Himalayan foothills are integral components. Students gain proficiency in GIS/Remote Sensing, geochemical analysis, and climate data science."
        }
      ],
      researchAreas: [
        {
          title: "Solid Earth Geophysics",
          description: "Seismology, magnetotellurics, gravity surveys, and deep crustal imaging of the Dharwar Craton and Eastern Ghats Mobile Belt.",
          icon: "globe"
        },
        {
          title: "Climate Science & Modeling",
          description: "Indian monsoon dynamics, climate variability, CMIP6 model analysis, extreme weather event attribution, and urban heat island studies.",
          icon: "cloud"
        },
        {
          title: "Geochemistry & Petrology",
          description: "Isotope geochemistry, metamorphic P-T-t paths, mantle xenolith studies, and dating of Precambrian terrains using U-Pb and Sm-Nd.",
          icon: "gem"
        },
        {
          title: "Hydrogeology & Water Resources",
          description: "Groundwater modeling, aquifer recharge assessment, water quality monitoring in Rayalaseema region, and isotopic tracer studies.",
          icon: "droplet"
        },
        {
          title: "Remote Sensing & GIS",
          description: "Satellite-based land use mapping, InSAR for crustal deformation, NDVI vegetation monitoring, and drone-based geological surveys.",
          icon: "satellite"
        },
        {
          title: "Paleoclimate & Sedimentology",
          description: "Speleothem climate records, lake sediment cores, Quaternary paleoenvironment reconstructions, and paleomonsoon variability studies.",
          icon: "mountain"
        }
      ],
      faculty: [
        { name: "Prof. Kalpna Gahalaut", role: "Professor & HoD", area: "Seismology & Tectonics", email: "kalpna@iisertirupati.ac.in" },
        { name: "Dr. Syed Rafatullah", role: "Associate Professor", area: "Climate Modeling & Monsoon Dynamics", email: "rafat@iisertirupati.ac.in" },
        { name: "Dr. Priyanka Singh", role: "Assistant Professor", area: "Geochemistry & Isotope Studies", email: "priyankas@iisertirupati.ac.in" },
        { name: "Dr. Anoop Ambili", role: "Associate Professor", area: "Paleoclimate & Quaternary Science", email: "anoop@iisertirupati.ac.in" },
        { name: "Dr. Reshma KN", role: "Assistant Professor", area: "Hydrogeology & Water Resources", email: "reshma@iisertirupati.ac.in" },
        { name: "Dr. Vineet Gahalaut", role: "Visiting Professor", area: "Geodesy & Crustal Deformation", email: "vineet@iisertirupati.ac.in" }
      ],
      facilities: [
        { name: "Seismology Observatory", description: "Broadband seismometer network, accelerometers, GNSS stations" },
        { name: "Geochemistry Lab", description: "ICP-OES, XRF, stable isotope ratio mass spectrometer" },
        { name: "Climate Data Center", description: "High-resolution WRF model runs, AWS network, reanalysis data archive" },
        { name: "GIS & Remote Sensing Lab", description: "ArcGIS Pro, ENVI, Google Earth Engine workstations, drone fleet" },
        { name: "Thin Section & Petrography Lab", description: "Polarizing microscopes, rock cutting/polishing, mineral identification" },
        { name: "Field Equipment Store", description: "GPR, resistivity meters, magnetic susceptibility meters, field sampling kits" }
      ],
      publications: [
        { title: "Monsoon variability over the Indian subcontinent during the last 5000 years from speleothem records", journal: "Nature Geoscience", year: 2025, impact: "IF 18.3" },
        { title: "Crustal thickness map of Peninsular India from joint inversion of receiver functions and gravity", journal: "Journal of Geophysical Research", year: 2025, impact: "IF 4.4" },
        { title: "Groundwater arsenic contamination in Rayalaseema: Sources, mobilization, and health impacts", journal: "Environmental Science & Technology", year: 2024, impact: "IF 11.4" },
        { title: "Attribution of the 2023 Chennai extreme rainfall event to anthropogenic climate change", journal: "Geophysical Research Letters", year: 2024, impact: "IF 5.6" },
        { title: "Metamorphic evolution of the Eastern Ghats Belt from U-Pb zircon and monazite geochronology", journal: "Precambrian Research", year: 2024, impact: "IF 3.8" }
      ]
    }
  },

  // ============================================================
  // DEPARTMENT: MATHEMATICS
  // ============================================================
  "mathematics": {
    category: "Research",
    type: "department",
    title: "Department of Mathematics",
    subtitle: "Pure & Applied Mathematics — The Language of the Universe",
    tagline: "Elegance in Abstraction, Power in Application",
    breadcrumbs: ["Home", "Research", "Departments", "Mathematics"],
    heroImage: "/mathematics-dept.jpg",
    accentColor: "#7c3aed",
    accentGradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a78bfa 100%)",
    quickStats: [
      { label: "Faculty", value: "15" },
      { label: "PhD Scholars", value: "55+" },
      { label: "Publications (5yr)", value: "250+" },
      { label: "Seminars/Year", value: "80+" },
      { label: "Funded Projects", value: "₹6 Cr+" }
    ],
    content: {
      lead: "The Department of Mathematics at IISER Tirupati cultivates mathematical thought at the highest level, with active research groups in algebra, analysis, geometry, topology, number theory, combinatorics, and applied mathematics. Our faculty regularly publish in top mathematical journals and collaborate with leading institutions worldwide.",
      sections: [
        {
          heading: "Vision & Mission",
          text: "We strive to be a center of mathematical excellence in southern India, producing researchers who push the boundaries of pure mathematics while also contributing to applications in data science, cryptography, mathematical physics, and computational methods. We emphasize proof-based learning and mathematical maturity from the undergraduate level."
        },
        {
          heading: "Academic Programs",
          text: "Students can pursue BS-MS Dual Degree with Mathematics major, Integrated PhD, or regular PhD in Mathematics. The curriculum covers real and complex analysis, abstract algebra, topology, differential geometry, and specialized electives in algebraic geometry, representation theory, and PDEs."
        }
      ],
      researchAreas: [
        {
          title: "Algebra & Number Theory",
          description: "Algebraic number theory, automorphic forms, modular representations, arithmetic geometry, and computational algebra.",
          icon: "hash"
        },
        {
          title: "Analysis & PDEs",
          description: "Functional analysis, harmonic analysis, nonlinear PDEs, spectral theory, and operator algebras on Hilbert spaces.",
          icon: "activity"
        },
        {
          title: "Geometry & Topology",
          description: "Algebraic topology, differential geometry, Riemannian geometry, symplectic geometry, and knot invariants.",
          icon: "hexagon"
        },
        {
          title: "Combinatorics & Graph Theory",
          description: "Extremal combinatorics, algebraic graph theory, Ramsey theory, enumerative combinatorics, and network optimization.",
          icon: "git-branch"
        },
        {
          title: "Probability & Statistics",
          description: "Stochastic processes, random matrix theory, Bayesian inference, high-dimensional statistics, and mathematical finance.",
          icon: "bar-chart"
        },
        {
          title: "Applied & Computational Mathematics",
          description: "Numerical methods for PDEs, optimization theory, machine learning theory, mathematical biology, and fluid dynamics modeling.",
          icon: "cpu"
        }
      ],
      faculty: [
        { name: "Prof. Anand Sawant", role: "Professor & HoD", area: "Algebraic Geometry & Motives", email: "anands@iisertirupati.ac.in" },
        { name: "Dr. Keshab Chandra Bakshi", role: "Associate Professor", area: "Operator Algebras & Subfactor Theory", email: "keshab@iisertirupati.ac.in" },
        { name: "Dr. Soumya Das", role: "Associate Professor", area: "Number Theory & Automorphic Forms", email: "soumya@iisertirupati.ac.in" },
        { name: "Dr. Charu Goel", role: "Assistant Professor", area: "Real Algebraic Geometry & Optimization", email: "charu@iisertirupati.ac.in" },
        { name: "Dr. Amit Hogadi", role: "Associate Professor", area: "Algebraic Topology & K-Theory", email: "amit@iisertirupati.ac.in" },
        { name: "Dr. Venku Naidu D.", role: "Associate Professor", area: "Harmonic Analysis & PDE", email: "venku@iisertirupati.ac.in" }
      ],
      facilities: [
        { name: "Mathematical Computing Lab", description: "MATLAB, Mathematica, SageMath, GAP, and Macaulay2 workstations" },
        { name: "Mathematics Library Wing", description: "Extensive collection of Springer GTM, LMS, AMS publications" },
        { name: "Seminar & Collaboration Room", description: "Dedicated discussion rooms with whiteboards and video conferencing" },
        { name: "HPC Access for Computation", description: "Shared access to institute HPC for numerical simulations and data analysis" }
      ],
      publications: [
        { title: "On the Bloch-Kato conjecture for Hilbert modular forms over real quadratic fields", journal: "Annals of Mathematics", year: 2025, impact: "IF 4.9" },
        { title: "Spectral gap estimates for Schrödinger operators with singular potentials on compact manifolds", journal: "Communications in Mathematical Physics", year: 2025, impact: "IF 2.4" },
        { title: "Algebraic K-theory of derived categories and motivic cohomology", journal: "Inventiones Mathematicae", year: 2024, impact: "IF 3.1" },
        { title: "Random matrix universality for Wigner matrices with heavy-tailed entries", journal: "Probability Theory & Related Fields", year: 2024, impact: "IF 2.3" },
        { title: "Combinatorial bounds on the chromatic symmetric function of graph families", journal: "Journal of Combinatorial Theory Series A", year: 2024, impact: "IF 1.6" }
      ]
    }
  },

  // ============================================================
  // DEPARTMENT: PHYSICS
  // ============================================================
  "physics": {
    category: "Research",
    type: "department",
    title: "Department of Physics",
    subtitle: "Probing the Fundamental Laws of Nature",
    tagline: "From Quantum to Cosmos — Exploring the Physical Universe",
    breadcrumbs: ["Home", "Research", "Departments", "Physics"],
    heroImage: "/physics-dept.jpg",
    accentColor: "#2563eb",
    accentGradient: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #60a5fa 100%)",
    quickStats: [
      { label: "Faculty", value: "20" },
      { label: "PhD Scholars", value: "85+" },
      { label: "Publications (5yr)", value: "380+" },
      { label: "Research Labs", value: "25" },
      { label: "Funded Projects", value: "₹15 Cr+" }
    ],
    content: {
      lead: "The Department of Physics at IISER Tirupati is a powerhouse of fundamental and applied research, with internationally recognized groups in condensed matter physics, quantum optics, high-energy physics, astrophysics, and soft matter. Our laboratories are equipped with state-of-the-art instrumentation for both experimental and computational physics.",
      sections: [
        {
          heading: "Vision & Mission",
          text: "We pursue physics at the cutting edge — from understanding quantum entanglement and topological materials to modeling galaxy formation and gravitational waves. Our vision is to create an internationally competitive physics department that attracts the brightest minds and produces research that reshapes our understanding of the universe."
        },
        {
          heading: "Academic Programs",
          text: "We offer BS-MS Dual Degree with Physics major, Integrated PhD, and regular PhD programs. The curriculum covers classical mechanics, quantum mechanics, statistical mechanics, electrodynamics, and specialized courses in condensed matter, particle physics, and astrophysics. Experimental physics training begins from the first year."
        }
      ],
      researchAreas: [
        {
          title: "Condensed Matter & Materials Physics",
          description: "Topological insulators, 2D quantum materials, superconductivity, magnetism, and thin film growth using MBE and PLD systems.",
          icon: "layers"
        },
        {
          title: "Quantum Optics & Photonics",
          description: "Ultrafast laser spectroscopy, quantum information with photons, nonlinear optics, and cavity quantum electrodynamics.",
          icon: "zap"
        },
        {
          title: "High Energy Physics & Cosmology",
          description: "BSM physics phenomenology, neutrino physics, dark matter models, LIGO gravitational wave data analysis, and cosmological perturbation theory.",
          icon: "atom"
        },
        {
          title: "Soft Matter & Biophysics",
          description: "Active matter, colloidal systems, polymer physics, biological membrane mechanics, and molecular motor modeling.",
          icon: "droplet"
        },
        {
          title: "Astrophysics & Astronomy",
          description: "Galaxy evolution, stellar nucleosynthesis, pulsar timing, radio astronomy observations, and computational astrophysics with N-body codes.",
          icon: "star"
        },
        {
          title: "Computational & Statistical Physics",
          description: "Monte Carlo simulations, density functional theory, molecular dynamics of complex fluids, and network science models.",
          icon: "cpu"
        }
      ],
      faculty: [
        { name: "Prof. Surajit Dhara", role: "Professor & HoD", area: "Soft Matter & Liquid Crystals", email: "surajit@iisertirupati.ac.in" },
        { name: "Dr. Ranjith Nair", role: "Associate Professor", area: "Quantum Optics & Information", email: "ranjith@iisertirupati.ac.in" },
        { name: "Dr. Bindu Bambah", role: "Visiting Professor", area: "High Energy Physics & Field Theory", email: "bindu@iisertirupati.ac.in" },
        { name: "Dr. Pankaj Mishra", role: "Assistant Professor", area: "Experimental Condensed Matter", email: "pankaj@iisertirupati.ac.in" },
        { name: "Dr. Sujoy Modak", role: "Assistant Professor", area: "Black Hole Physics & Quantum Gravity", email: "sujoy@iisertirupati.ac.in" },
        { name: "Dr. Sunita Srivastava", role: "Associate Professor", area: "Thin Films & Nanoscale Physics", email: "sunita@iisertirupati.ac.in" }
      ],
      facilities: [
        { name: "Ultrafast Laser Laboratory", description: "Femtosecond Ti:Sapphire laser, streak camera, pump-probe spectroscopy" },
        { name: "Thin Film Deposition Lab", description: "Pulsed laser deposition, RF/DC sputtering, thermal evaporator" },
        { name: "Low Temperature Physics Lab", description: "Cryostat (4K), PPMS, SQUID magnetometer, Hall effect setup" },
        { name: "Optical Characterization Suite", description: "UV-Vis-NIR, photoluminescence, Raman spectroscopy, ellipsometer" },
        { name: "Computational Physics Cluster", description: "GPU-accelerated nodes for LAMMPS, VASP, and LIGO data analysis" },
        { name: "Electronics & Instrumentation Lab", description: "Oscilloscopes, function generators, lock-in amplifiers, DAQ systems" }
      ],
      publications: [
        { title: "Observation of topological magnon bands in a kagome antiferromagnet via neutron scattering", journal: "Nature Physics", year: 2025, impact: "IF 19.6" },
        { title: "Quantum entanglement distillation using integrated photonic circuits at telecom wavelength", journal: "Physical Review Letters", year: 2025, impact: "IF 9.2" },
        { title: "Constraints on dark matter annihilation from LIGO-Virgo-KAGRA O4 run gravitational wave data", journal: "Physical Review D", year: 2024, impact: "IF 5.0" },
        { title: "Active nematics on curved surfaces: defect dynamics and topological transitions", journal: "Nature Communications", year: 2024, impact: "IF 16.6" },
        { title: "Stellar yields from rotating massive stars and implications for r-process nucleosynthesis", journal: "The Astrophysical Journal", year: 2024, impact: "IF 5.7" }
      ]
    }
  },

  // ============================================================
  // DEPARTMENT: HUMANITIES AND SOCIAL SCIENCES
  // ============================================================
  "humanities-social-sciences": {
    category: "Research",
    type: "department",
    title: "Department of Humanities & Social Sciences",
    subtitle: "Enriching Scientific Education with Humanistic Perspectives",
    tagline: "Where Science Meets Society, Culture, and Ethics",
    breadcrumbs: ["Home", "Research", "Departments", "Humanities & Social Sciences"],
    heroImage: "/hss-dept.jpg",
    accentColor: "#b45309",
    accentGradient: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #fbbf24 100%)",
    quickStats: [
      { label: "Faculty", value: "10" },
      { label: "PhD Scholars", value: "25+" },
      { label: "Publications (5yr)", value: "120+" },
      { label: "Courses Offered", value: "30+" },
      { label: "Workshops/Year", value: "15+" }
    ],
    content: {
      lead: "The Department of Humanities & Social Sciences at IISER Tirupati plays a vital role in providing holistic education to science students. Through courses in philosophy of science, history of ideas, economics, psychology, literature, and communication, we nurture scientifically informed citizens who can engage critically with the ethical, social, and cultural dimensions of their work.",
      sections: [
        {
          heading: "Vision & Mission",
          text: "We believe that great scientists are also great thinkers. Our department integrates humanities and social science perspectives into the IISER curriculum, ensuring students develop strong communication skills, ethical reasoning, and an appreciation for the historical and cultural contexts of scientific discovery. We also conduct independent research in areas intersecting science and society."
        },
        {
          heading: "Academic Programs",
          text: "All BS-MS students take mandatory HSS courses as part of their core curriculum. The department also offers PhD programs in select areas. Courses include Scientific Communication, Philosophy of Mind, Indian Knowledge Systems, Economics for Scientists, Environmental Ethics, and Science, Technology & Society studies."
        }
      ],
      researchAreas: [
        {
          title: "Philosophy of Science & Mind",
          description: "Epistemology of scientific practice, consciousness studies, cognitive science philosophy, and the realism-antirealism debate in quantum physics.",
          icon: "book-open"
        },
        {
          title: "Science, Technology & Society",
          description: "Social studies of laboratory life, public understanding of science, technology policy analysis, and science communication research.",
          icon: "users"
        },
        {
          title: "History of Indian Science",
          description: "Mathematics and astronomy in ancient India, Kerala school of mathematics, colonial science policy, and post-independence scientific institutions.",
          icon: "clock"
        },
        {
          title: "Literature & Cultural Studies",
          description: "Science fiction narratives, postcolonial literature, environmental humanities, ecocriticism, and digital humanities methodologies.",
          icon: "pen-tool"
        },
        {
          title: "Economics & Public Policy",
          description: "Science funding policy, innovation economics, higher education governance, behavioral economics experiments, and development studies.",
          icon: "trending-up"
        },
        {
          title: "Psychology & Cognitive Science",
          description: "Decision-making under uncertainty, attention and perception, educational psychology, well-being assessment, and mindfulness research.",
          icon: "brain"
        }
      ],
      faculty: [
        { name: "Dr. Meera Baindur", role: "Associate Professor & HoD", area: "Environmental Philosophy & Indian Studies", email: "meera@iisertirupati.ac.in" },
        { name: "Dr. Nirmalya Kajuri", role: "Assistant Professor", area: "Philosophy of Physics & Science", email: "nirmalya@iisertirupati.ac.in" },
        { name: "Dr. Sundar Sarukkai (Visiting)", role: "Distinguished Visiting Faculty", area: "Philosophy of Mathematics & Science", email: "sundar@iisertirupati.ac.in" },
        { name: "Dr. Ravi Poovaiah", role: "Assistant Professor", area: "Communication Design & Visual Studies", email: "ravi@iisertirupati.ac.in" },
        { name: "Dr. Leena Abraham", role: "Associate Professor", area: "Sociology of Education & Gender", email: "leena@iisertirupati.ac.in" },
        { name: "Dr. Shambhavi Prakash", role: "Assistant Professor", area: "Economics & Innovation Policy", email: "shambhavi@iisertirupati.ac.in" }
      ],
      facilities: [
        { name: "HSS Seminar Hall", description: "60-seat seminar hall with AV equipment for lectures and workshops" },
        { name: "Reading Room & Archive", description: "Curated collection of philosophy, history, and social science volumes" },
        { name: "Digital Humanities Lab", description: "Text mining workstations, corpus linguistics tools, GIS for cultural mapping" },
        { name: "Psychology Research Lab", description: "Eye-tracking system, cognitive experiment software, survey design tools" }
      ],
      publications: [
        { title: "Rethinking scientific objectivity: A pluralist epistemology for interdisciplinary research", journal: "Studies in History and Philosophy of Science", year: 2025, impact: "IF 1.8" },
        { title: "The Kerala school of mathematics: A reassessment of priority claims in calculus development", journal: "Historia Mathematica", year: 2025, impact: "IF 1.1" },
        { title: "Science communication strategies during pandemics: Lessons from India's COVID-19 response", journal: "Public Understanding of Science", year: 2024, impact: "IF 3.8" },
        { title: "Environmental ethics and sacred groves: Biocultural diversity in the Seshachalam hills", journal: "Environmental Values", year: 2024, impact: "IF 2.5" },
        { title: "Mindfulness-based interventions and academic performance in STEM students: A randomized trial", journal: "Journal of Educational Psychology", year: 2024, impact: "IF 4.9" }
      ]
    }
  },

  // ============================================================
  // RESEARCH FACILITIES
  // ============================================================
  "research-facilities": {
    category: "Research",
    type: "facilities",
    title: "Central Research Facilities",
    subtitle: "World-Class Instrumentation Powering Cutting-Edge Discovery",
    tagline: "State-of-the-Art Equipment • Shared Access • Expert Technical Support",
    breadcrumbs: ["Home", "Research", "Research Facilities"],
    heroImage: "/card-facilities.jpg",
    accentColor: "#0891b2",
    accentGradient: "linear-gradient(135deg, #164e63 0%, #0891b2 50%, #67e8f9 100%)",
    quickStats: [
      { label: "Major Instruments", value: "45+" },
      { label: "Annual Users", value: "500+" },
      { label: "Investment", value: "₹50 Cr+" },
      { label: "Technical Staff", value: "18" },
      { label: "Instrument Hours/Year", value: "25,000+" }
    ],
    content: {
      lead: "IISER Tirupati's Central Research Facilities house an impressive array of advanced scientific instruments shared across all departments. These facilities provide the analytical backbone for groundbreaking research in biology, chemistry, physics, and earth sciences — enabling measurements from the atomic to the planetary scale.",
      facilitiesDetailed: [
        {
          name: "500 MHz NMR Spectrometer",
          category: "Chemical Analysis",
          description: "Bruker Avance NEO 500 MHz with multinuclear probes (¹H, ¹³C, ³¹P, ¹⁹F), variable temperature capability, and 2D/3D experiment automation. Supports solution-state and solid-state NMR for organic, inorganic, and biomolecular characterization.",
          specs: ["500 MHz field strength", "Multinuclear probes", "Variable temperature (−40°C to +150°C)", "TopSpin 4.x software"],
          image: "/card-facilities.jpg"
        },
        {
          name: "Field Emission SEM (FE-SEM)",
          category: "Imaging & Microscopy",
          description: "JEOL JSM-7610FPlus with sub-nanometer resolution, EDS elemental mapping, EBSD for crystallographic analysis, and in-situ heating/cooling stages. Used extensively for materials, geological, and biological sample imaging.",
          specs: ["0.8 nm resolution at 15kV", "Oxford EDS detector", "EBSD capability", "Low vacuum mode for biological samples"],
          image: "/card-highlights.jpg"
        },
        {
          name: "Single Crystal X-ray Diffractometer",
          category: "Structural Analysis",
          description: "Bruker D8 Venture with PHOTON III detector, Mo Kα and Cu Kα microfocus sources, and Oxford Cryostream for low-temperature experiments. Determines 3D molecular structures from single crystals.",
          specs: ["Dual-source (Mo/Cu)", "PHOTON III CPAD detector", "100K cryostream", "SHELX/Olex2 software suite"],
          image: "/card-publications.jpg"
        },
        {
          name: "High Performance Computing Cluster",
          category: "Computational Facility",
          description: "128-node cluster with 2,048 CPU cores, 64 NVIDIA A100 GPUs, 100 TB parallel filesystem, and InfiniBand HDR interconnect. Runs Gaussian, VASP, LAMMPS, GROMACS, and custom codes for ab initio and MD simulations.",
          specs: ["2,048 CPU cores", "64 NVIDIA A100 GPUs", "100 TB storage", "InfiniBand HDR 200 Gbps"],
          image: "/card-disciplines.jpg"
        },
        {
          name: "Powder X-ray Diffractometer",
          category: "Structural Analysis",
          description: "Rigaku SmartLab with 9 kW rotating anode, high-temperature attachment up to 1100°C, and thin film analysis optics. Phase identification, Rietveld refinement, and stress/texture analysis.",
          specs: ["9 kW rotating Cu anode", "1100°C furnace", "GIXRD capability", "PDXL2 & FullProf software"],
          image: "/card-facilities.jpg"
        },
        {
          name: "Confocal Laser Scanning Microscope",
          category: "Imaging & Microscopy",
          description: "Zeiss LSM 880 with Airyscan super-resolution, 32-channel spectral detection, live-cell incubation chamber, and FRAP/FRET modules. Enables sub-200 nm resolution fluorescence imaging.",
          specs: ["Airyscan super-resolution", "405/488/561/633 nm lasers", "Live-cell chamber", "ZEN Blue/Black software"],
          image: "/card-highlights.jpg"
        },
        {
          name: "ICP-OES & ICP-MS",
          category: "Chemical Analysis",
          description: "Thermo Fisher iCAP PRO XP (ICP-OES) and iCAP RQ (ICP-MS) for trace and ultra-trace elemental analysis of geological, environmental, and biological samples. ppb-ppt sensitivity.",
          specs: ["68 elements simultaneously", "ppb–ppt sensitivity", "Collision/reaction cell", "Automated sample introduction"],
          image: "/card-publications.jpg"
        },
        {
          name: "Cleanroom Facility (Class 1000)",
          category: "Fabrication",
          description: "500 sq ft Class 1000 cleanroom with spin coater, mask aligner, plasma etcher, and thermal evaporator. Supports thin film device fabrication, MEMS prototyping, and sensor development.",
          specs: ["Class 1000 (ISO 6)", "Spin coating", "UV lithography", "Plasma etching"],
          image: "/card-disciplines.jpg"
        }
      ]
    }
  },

  // ============================================================
  // RESEARCH HIGHLIGHTS
  // ============================================================
  "research-highlights": {
    category: "Research",
    type: "highlights",
    title: "Research Highlights",
    subtitle: "Breakthrough Discoveries & High-Impact Contributions",
    tagline: "Pushing the Frontiers of Human Knowledge",
    breadcrumbs: ["Home", "Research", "Research Highlights"],
    heroImage: "/card-highlights.jpg",
    accentColor: "#dc2626",
    accentGradient: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #fca5a5 100%)",
    quickStats: [
      { label: "Nature/Science Papers", value: "12" },
      { label: "Patents Filed", value: "28" },
      { label: "International Collaborations", value: "45+" },
      { label: "Total Citations", value: "8,500+" },
      { label: "h-index (Institute)", value: "42" }
    ],
    content: {
      lead: "Since its inception, IISER Tirupati has made remarkable research contributions that have been recognized nationally and internationally. Our researchers regularly publish in the world's most prestigious scientific journals and have received numerous awards, patents, and industry partnerships.",
      highlights: [
        {
          year: 2025,
          title: "Novel Catalyst for Carbon Dioxide-to-Fuel Conversion",
          department: "Chemistry",
          description: "Prof. S.K. Singh's group developed an earth-abundant cobalt catalyst that converts CO₂ to methanol with 92% selectivity under mild conditions — a major step toward sustainable fuel production. Published in Nature Catalysis with 3 patent applications filed.",
          journal: "Nature Catalysis",
          impact: "Featured on journal cover; 3 patents filed"
        },
        {
          year: 2025,
          title: "Topological Magnon Bands in Kagome Antiferromagnet",
          department: "Physics",
          description: "Experimental observation of topological magnon bands in a synthetic kagome antiferromagnet using inelastic neutron scattering. This work opens new avenues for topological magnonics and spin-based quantum information.",
          journal: "Nature Physics",
          impact: "International media coverage; invited talk at APS March Meeting"
        },
        {
          year: 2025,
          title: "5000-Year Monsoon Reconstruction from Seshachalam Speleothems",
          department: "Earth & Climate Sciences",
          description: "A high-resolution paleoclimate record from stalagmites in the Seshachalam hills reveals abrupt monsoon weakening events that coincide with historical societal collapses in Peninsular India, providing crucial data for future climate projections.",
          journal: "Nature Geoscience",
          impact: "Featured in IPCC AR7 assessment; DST highlight"
        },
        {
          year: 2024,
          title: "CRISPR-Edited Drought-Resistant Rice Varieties",
          department: "Biology",
          description: "Successfully engineered drought-tolerant rice varieties using CRISPR-Cas9 gene editing targeting the OsDREB1A pathway. Field trials showed 40% improvement in yield under water-stress conditions in Rayalaseema region soils.",
          journal: "Nature Plants",
          impact: "Technology licensed to ICAR; field trial approvals"
        },
        {
          year: 2024,
          title: "Quantum Entanglement Distillation on a Chip",
          department: "Physics",
          description: "Demonstrated entanglement distillation in an integrated silicon photonic circuit at telecom wavelengths, achieving fidelity >0.96. This milestone brings practical quantum communication networks closer to reality.",
          journal: "Physical Review Letters",
          impact: "Editors' Suggestion; DST Nano Mission recognition"
        },
        {
          year: 2024,
          title: "Machine Learning for Drug Discovery Acceleration",
          department: "Chemistry",
          description: "A novel graph neural network model trained on IISER Tirupati's proprietary compound library accurately predicts drug-target binding affinity, reducing virtual screening time by 100x compared to docking simulations.",
          journal: "Chemical Science",
          impact: "Software released as open-source; industry partnership with Biocon"
        },
        {
          year: 2024,
          title: "Mathematical Proof of Bloch-Kato Conjecture Case",
          department: "Mathematics",
          description: "Resolution of a significant case of the Bloch-Kato conjecture for Hilbert modular forms over real quadratic fields, establishing deep connections between arithmetic geometry and automorphic representations.",
          journal: "Annals of Mathematics",
          impact: "Invited lecture at ICM 2026"
        },
        {
          year: 2023,
          title: "First Archaeological Genomics of Tirupati Region",
          department: "Biology",
          description: "Ancient DNA analysis from Iron Age burial sites near Tirupati reveals complex population admixture history, providing the first genomic evidence of early pastoral-to-agricultural transitions in southern Deccan Plateau.",
          journal: "Cell",
          impact: "Featured on journal cover; national media coverage"
        }
      ]
    }
  },

  // ============================================================
  // PUBLICATIONS
  // ============================================================
  "publications": {
    category: "Research",
    type: "publications",
    title: "Publications",
    subtitle: "High-Impact Research Output from IISER Tirupati",
    tagline: "Contributing to Global Scientific Knowledge",
    breadcrumbs: ["Home", "Research", "Publications"],
    heroImage: "/card-publications.jpg",
    accentColor: "#0f766e",
    accentGradient: "linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #5eead4 100%)",
    quickStats: [
      { label: "Total Publications", value: "1,800+" },
      { label: "Avg. Citations/Paper", value: "18.5" },
      { label: "h-index (Institute)", value: "42" },
      { label: "Top 10% Journals", value: "35%" },
      { label: "Collaborating Countries", value: "22" }
    ],
    content: {
      lead: "IISER Tirupati's research output has grown exponentially since its founding in 2015, with our faculty and students publishing in the world's most prestigious journals across all scientific disciplines. Our publication portfolio reflects the institute's commitment to fundamental discovery and interdisciplinary innovation.",
      yearlyStats: [
        { year: 2025, papers: 285, citations: 2100, hIndex: 42 },
        { year: 2024, papers: 260, citations: 3800, hIndex: 38 },
        { year: 2023, papers: 230, citations: 4200, hIndex: 34 },
        { year: 2022, papers: 195, citations: 3900, hIndex: 30 },
        { year: 2021, papers: 170, citations: 3200, hIndex: 26 },
        { year: 2020, papers: 140, citations: 2600, hIndex: 22 }
      ],
      topJournals: [
        { name: "Nature & Nature family", count: 12, color: "#dc2626" },
        { name: "Science & Science family", count: 5, color: "#2563eb" },
        { name: "JACS", count: 28, color: "#ea580c" },
        { name: "Angew. Chem.", count: 22, color: "#16a34a" },
        { name: "Physical Review Letters", count: 35, color: "#7c3aed" },
        { name: "PNAS", count: 15, color: "#0891b2" },
        { name: "Advanced Materials family", count: 18, color: "#b45309" },
        { name: "ACS Nano / Nano Letters", count: 24, color: "#0d9488" }
      ],
      departmentBreakdown: [
        { dept: "Physics", papers: 520, percentage: 29 },
        { dept: "Chemistry", papers: 480, percentage: 27 },
        { dept: "Biology", papers: 380, percentage: 21 },
        { dept: "Mathematics", papers: 230, percentage: 13 },
        { dept: "Earth & Climate Sciences", papers: 140, percentage: 8 },
        { dept: "HSS", papers: 50, percentage: 2 }
      ],
      recentPublications: [
        { title: "Cobalt-catalyzed asymmetric C–H functionalization for enantioselective amine synthesis", authors: "Singh, S.K. et al.", journal: "J. Am. Chem. Soc.", year: 2025, doi: "10.1021/jacs.5b00123" },
        { title: "Observation of topological magnon bands in kagome antiferromagnets", authors: "Dhara, S. et al.", journal: "Nature Physics", year: 2025, doi: "10.1038/s41567-025-xxxx" },
        { title: "Monsoon variability over Indian subcontinent from speleothem records", authors: "Ambili, A. et al.", journal: "Nature Geoscience", year: 2025, doi: "10.1038/s41561-025-xxxx" },
        { title: "On the Bloch-Kato conjecture for Hilbert modular forms", authors: "Sawant, A. et al.", journal: "Annals of Mathematics", year: 2025, doi: "10.4007/annals.2025.xxx" },
        { title: "CRISPR-Cas9 reveals novel regulators of drought tolerance in wild rice", authors: "Gupta, V. et al.", journal: "Nature Plants", year: 2025, doi: "10.1038/s41477-025-xxxx" },
        { title: "Quantum entanglement distillation using integrated photonic circuits", authors: "Nair, R. et al.", journal: "Phys. Rev. Lett.", year: 2025, doi: "10.1103/PhysRevLett.xxx.xxxxxx" },
        { title: "Photocatalytic CO₂ reduction to methanol using iron porphyrin catalysts", authors: "Mandal, S. et al.", journal: "Nature Catalysis", year: 2024, doi: "10.1038/s41929-024-xxxx" },
        { title: "Active nematics on curved surfaces: defect dynamics and transitions", authors: "Dhara, S. et al.", journal: "Nature Comms.", year: 2024, doi: "10.1038/s41467-024-xxxxx" }
      ]
    }
  },

  // ============================================================
  // SEMINAR / COLLOQUIUM
  // ============================================================
  "seminar-colloquium": {
    category: "Research",
    type: "seminars",
    title: "Seminars & Colloquia",
    subtitle: "Weekly Research Talks, Distinguished Lectures & Workshops",
    tagline: "Fostering Intellectual Exchange & Scholarly Dialogue",
    breadcrumbs: ["Home", "Research", "Seminars & Colloquia"],
    heroImage: "/convocation-yerpedu.jpg",
    accentColor: "#9333ea",
    accentGradient: "linear-gradient(135deg, #581c87 0%, #9333ea 50%, #c084fc 100%)",
    quickStats: [
      { label: "Seminars/Year", value: "200+" },
      { label: "Distinguished Lectures", value: "15+" },
      { label: "Workshops/Year", value: "12" },
      { label: "International Speakers", value: "40+" },
      { label: "Student Presentations", value: "150+" }
    ],
    content: {
      lead: "IISER Tirupati maintains a vibrant culture of intellectual discourse through its comprehensive seminar program. Weekly departmental seminars, monthly institute colloquia, and annual distinguished lecture series bring world-renowned scientists and thinkers to campus, while also providing platforms for students and early-career researchers to present their work.",
      seminarSeries: [
        {
          name: "Institute Colloquium",
          frequency: "Monthly (Last Friday)",
          description: "A flagship monthly lecture featuring prominent scientists from India and abroad speaking on topics of broad scientific interest. Past speakers include Nobel laureates, Fields medalists, and directors of national laboratories."
        },
        {
          name: "Departmental Seminars",
          frequency: "Weekly (Department-specific)",
          description: "Each department holds weekly seminars where faculty, postdocs, and senior PhD students present their latest research findings. These talks foster critical discussion and interdepartmental collaboration."
        },
        {
          name: "Distinguished Lecture Series",
          frequency: "Quarterly",
          description: "Named lecture series honoring eminent scientists, featuring invited speakers of international repute. The series includes the CV Raman Lecture (Physics), the GN Ramachandran Lecture (Biology), and the CNR Rao Lecture (Chemistry)."
        },
        {
          name: "Student Research Forum",
          frequency: "Bi-weekly",
          description: "An informal platform where BS-MS and PhD students present their ongoing research, receive feedback, and develop presentation skills. Best presentations are recognized with annual awards."
        }
      ],
      upcomingSeminars: [
        {
          title: "Topological Quantum Computing: From Theory to Error-Corrected Qubits",
          speaker: "Prof. Sankar Das Sarma",
          affiliation: "University of Maryland, USA",
          date: "September 26, 2026",
          time: "3:30 PM",
          venue: "Ramanujan Auditorium",
          type: "Distinguished Lecture",
          department: "Physics"
        },
        {
          title: "Protein Language Models and the Future of Drug Design",
          speaker: "Dr. Aarti Tripathi",
          affiliation: "NCBS Bangalore",
          date: "September 22, 2026",
          time: "4:00 PM",
          venue: "Biology Seminar Hall",
          type: "Departmental Seminar",
          department: "Biology"
        },
        {
          title: "Sustainable Catalysis: Earth-Abundant Metals for Green Chemistry",
          speaker: "Prof. Debabrata Maiti",
          affiliation: "IIT Bombay",
          date: "September 24, 2026",
          time: "11:00 AM",
          venue: "Chemistry Conference Room",
          type: "Departmental Seminar",
          department: "Chemistry"
        },
        {
          title: "Arithmetic of Elliptic Curves and the Birch–Swinnerton-Dyer Conjecture",
          speaker: "Prof. Manjul Bhargava",
          affiliation: "Princeton University, USA",
          date: "October 3, 2026",
          time: "3:00 PM",
          venue: "Ramanujan Auditorium",
          type: "Distinguished Lecture",
          department: "Mathematics"
        },
        {
          title: "Paleoclimate Archives of the Indian Ocean Region",
          speaker: "Dr. Rajeev Saraswat",
          affiliation: "NIO Goa",
          date: "October 7, 2026",
          time: "2:30 PM",
          venue: "ECS Seminar Room",
          type: "Departmental Seminar",
          department: "Earth & Climate Sciences"
        },
        {
          title: "AI Ethics and Responsible Innovation: A Philosophical Framework",
          speaker: "Prof. Sundar Sarukkai",
          affiliation: "NIAS Bangalore",
          date: "October 10, 2026",
          time: "4:00 PM",
          venue: "HSS Conference Room",
          type: "Special Lecture",
          department: "HSS"
        }
      ],
      pastHighlights: [
        {
          title: "The Discovery of Gravitational Waves and Its Implications",
          speaker: "Prof. Tarun Souradeep",
          affiliation: "IUCAA Pune",
          date: "March 2026",
          type: "Institute Colloquium"
        },
        {
          title: "CRISPR: A Revolution in Genome Engineering",
          speaker: "Prof. Gaetan Bhullar",
          affiliation: "ETH Zurich",
          date: "February 2026",
          type: "GN Ramachandran Lecture"
        },
        {
          title: "The Future of Energy: Materials for Solar Cells and Batteries",
          speaker: "Prof. CNR Rao",
          affiliation: "JNCASR Bangalore",
          date: "January 2026",
          type: "CNR Rao Lecture"
        },
        {
          title: "Number Theory and Cryptography in the Quantum Era",
          speaker: "Prof. Kannan Soundararajan",
          affiliation: "Stanford University, USA",
          date: "December 2025",
          type: "Distinguished Lecture"
        },
        {
          title: "Climate Change Adaptation in South Asia: A Multi-disciplinary Approach",
          speaker: "Dr. Roxy Mathew Koll",
          affiliation: "IITM Pune",
          date: "November 2025",
          type: "Institute Colloquium"
        }
      ]
    }
  }
};

// Helper: get all research page slugs
export const researchPageSlugs = Object.keys(researchPagesData);

// Helper: get department pages only
export const departmentSlugs = Object.entries(researchPagesData)
  .filter(([_, data]) => data.type === "department")
  .map(([key]) => key);

// Helper: get sidebar siblings for any research page
export const getResearchSiblings = (currentSlug) => {
  const currentPage = researchPagesData[currentSlug];
  if (!currentPage) return [];
  
  return Object.entries(researchPagesData)
    .map(([key, data]) => ({ key, title: data.title, type: data.type }));
};
