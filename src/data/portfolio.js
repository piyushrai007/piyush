import profile from "../assets/work/profile.webp";
import heroAnimated from "../assets/work/hero-animated.webp";
import edunova from "../assets/work/edunova.webp";
import edunovaFlow from "../assets/work/edunova-flow.webp";
import weirdos from "../assets/work/weirdos.webp";
import arogya from "../assets/work/arogya.webp";
import objectDetection from "../assets/work/object-detection.webp";
import garage from "../assets/work/garage.webp";
import carPrice from "../assets/work/car-price.webp";
import hackhound1 from "../assets/work/hackhound-1.webp";
import hackhound2 from "../assets/work/hackhound-2.webp";
import hackhound3 from "../assets/work/hackhound-3.webp";
import hackhound4 from "../assets/work/hackhound-4.webp";
import nft1 from "../assets/work/bighead-1.svg";
import nft3 from "../assets/work/bighead-3.svg";
import nft5 from "../assets/work/bighead-5.svg";
import nft7 from "../assets/work/bighead-7.svg";

export const RESUME_URL = "/Piyush_Rai_Resume.pdf";

export const profileData = {
  name: "Piyush Rai",
  role: "Full Stack Developer",
  focus: "AI & Data Science",
  photo: profile,
  heroAnimation: heroAnimated,
  location: "Vidisha, Madhya Pradesh, India",
  email: "Piyushraivds45@gmail.com",
  phone: "+91-9691529465",
  currently: "Full Stack Developer @ Code and Learn Edutech",
  tagline:
    "I build production web platforms with Django, React and TypeScript — and bring machine learning into them where it actually helps.",
  summary: [
    "I'm a Full Stack Developer with a B.Tech in Artificial Intelligence and Data Science. Today I build multi-school EdTech products at Code and Learn Edutech — from SQL Server schemas and Django apps to React/TypeScript frontends, Celery rendering pipelines and IIS deployments.",
    "Before that I trained and shipped machine learning models at IBM (CSRBOX), and spent my college years building AI-first products at hackathons — including an AI smart-classroom platform that placed 5th at HackHound 2.0.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/piyushrai007", icon: "fab fa-github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/Piyush-Rai-AI", icon: "fab fa-linkedin-in" },
    { label: "Email", href: "mailto:Piyushraivds45@gmail.com", icon: "fas fa-envelope" },
    { label: "Instagram", href: "https://www.instagram.com/piyush_.rai__/", icon: "fab fa-instagram" },
  ],
};

export const stats = [
  { value: "1+", label: "Year building production EdTech" },
  { value: "7+", label: "Shipped projects" },
  { value: "5th", label: "HackHound 2.0 — 50+ teams" },
  { value: "5", label: "IBM & MongoDB certifications" },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Code and Learn Edutech Private Limited",
    period: "Sep 2025 — Present",
    type: "Full-time",
    points: [
      "Developed the school_access Django application to support a multi-school architecture; wrote complex queries and managed schemas in MS SQL Server using SSMS.",
      "Engineered the “Master Academic Plan” logic to automate schedule distribution across schools.",
      "Refactored the React + TypeScript frontend by centralizing API calls in bridgeService.ts, enabling dynamic data loading for the Curriculum and Assignment pages.",
      "Extended sc_ai_corrector to compile subject diagrams with LaTeX, RDKit, Matplotlib, Asymptote and Ghostscript.",
      "Resolved concurrency bottlenecks in Celery workers running multi-stage rendering pipelines, stabilizing the backend.",
      "Deployed the application to production on IIS; built and maintained the Admin Dashboard with endpoints that sync real-time data between the school database and UI.",
    ],
    stack: ["Django", "React", "TypeScript", "MS SQL Server", "Celery", "IIS", "LaTeX", "RDKit"],
  },
  {
    role: "Machine Learning Trainee Intern",
    company: "IBM · CSRBOX",
    period: "2 months",
    type: "Internship",
    points: [
      "Built and deployed a heart disease prediction model on IBM Cloud for patient risk assessment.",
      "Trained and evaluated SVM and Logistic Regression models; served real-time predictions through a Flask API with Pickle model serialization.",
    ],
    stack: ["Python", "scikit-learn", "Flask", "IBM Cloud", "Pandas"],
  },
];

export const projects = [
  {
    slug: "edunova",
    title: "EduNova · Adaptify",
    subtitle: "AI smart-classroom platform",
    badge: "HackHound 2.0 · 5th place",
    category: "AI · Full Stack",
    featured: true,
    year: "2024 — 2025",
    image: edunova,
    summary:
      "An AI-powered classroom that turns lecture videos into summaries and MCQs, marks attendance with face recognition, and gamifies learning with quizzes, badges and blogs.",
    links: {
      github: "https://github.com/piyushrai007/edunova",
      live: "https://edunova-sati.web.app/",
    },
    stack: [
      "React", "Vite", "Tailwind CSS", "Material UI", "Chart.js", "Ionic Capacitor",
      "Django REST Framework", "Flask", "JWT", "OpenCV", "dlib", "Whisper", "GPT", "PostgreSQL",
    ],
    meta: [
      { label: "Type", value: "Final-year major project + hackathon" },
      { label: "Team", value: "Piyush Rai & Akshat Sharma" },
      { label: "Guide", value: "Prof. Aditya Bais, SATI Vidisha" },
      { label: "Platforms", value: "Web, PWA, Android" },
    ],
    problem:
      "Traditional classrooms still run on manual attendance, scattered resources and no feedback loop on how well students understood a lecture. Hybrid and online classes make it worse: there is no single place where teaching, revision and communication happen together.",
    solution:
      "EduNova (Adaptify) is a role-based platform for teachers and students. Teachers upload a lecture once; the AI pipeline transcribes it with speech-to-text, summarises it with GPT models and generates MCQs automatically. Students revise from the summaries, attempt the quizzes and earn badges, while attendance is captured by face recognition.",
    features: [
      { title: "Lecture → Summary → MCQs", text: "Speech-to-text transcription plus GPT models produce concise lecture summaries and auto-generated multiple-choice quizzes." },
      { title: "Face-recognition attendance", text: "OpenCV + dlib verify students from a camera frame, replacing manual roll calls." },
      { title: "Teacher & student dashboards", text: "Separate logins with classroom creation/joining, a date-wise lecture dashboard and attendance views." },
      { title: "Gamified learning", text: "Quizzes with scores, a leaderboard and badges for quiz and blog activity keep students engaged." },
      { title: "Blogs & real-time chat", text: "Rich-text blog publishing (React Quill) and in-class chat for student–teacher communication." },
      { title: "Analytics, PWA & Android", text: "Chart.js progress analytics, an installable PWA and an Android build through Ionic Capacitor." },
    ],
    architecture: {
      image: edunovaFlow,
      caption: "User flow: teachers create classrooms and upload lectures → AI processing generates summaries and MCQs → students attend, read and attempt.",
      layers: [
        { title: "Frontend", text: "React + Vite with Tailwind CSS, Material UI and Framer Motion; packaged as a PWA and an Android app via Capacitor." },
        { title: "Backend", text: "Django REST Framework API (JWT auth, role-based access) with Flask micro-services for the AI workloads." },
        { title: "AI layer", text: "Whisper speech-to-text, GPT/Transformer summarisation and MCQ generation, OpenCV + dlib face recognition." },
        { title: "Data", text: "PostgreSQL in production (SQLite in development) for users, classrooms, lectures, quizzes and blogs." },
      ],
    },
    contributions: [
      "Built the React frontend: landing page, teacher and student dashboards, classrooms, quizzes, blogs and charts.",
      "Integrated the Django REST API with Axios/fetch, JWT login flows and role-based routing.",
      "Wired the lecture-processing pipeline (speech-to-text → GPT summary → MCQ generation) into the teacher workflow.",
      "Shipped it as an installable PWA and an Android app with Ionic Capacitor.",
    ],
    gallery: [
      { src: hackhound1, alt: "Team VariableX at HackHound 2.0" },
      { src: hackhound2, alt: "Presenting at HackHound 2.0" },
      { src: hackhound3, alt: "HackHound 2.0 hackathon floor" },
      { src: hackhound4, alt: "Newspaper coverage of SATI's 5th place at HackHound" },
    ],
    outcome:
      "Team VariableX secured 5th place out of 50+ teams in the 24-hour HackHound 2.0 hackathon at SRM University, and the project grew into our final-year major project.",
  },
  {
    slug: "weirdos-club",
    title: "Weirdos Club",
    subtitle: "Ethereum NFT collection website",
    badge: "Hackathon build",
    category: "Web3 · Frontend",
    featured: true,
    year: "2025",
    image: weirdos,
    summary:
      "A fully animated landing site for an ERC-721 NFT collection on Ethereum — typewriter hero, scroll-drawn roadmap, NFT carousels, team and FAQ — built by a 3-person team during a hackathon.",
    links: {
      github: "https://github.com/piyushrai007/etherium",
    },
    stack: ["React 18", "styled-components", "GSAP ScrollTrigger", "Swiper", "Typewriter Effect", "React Confetti"],
    meta: [
      { label: "Type", value: "Hackathon project" },
      { label: "Team", value: "Sanskriti Bangre, Dev Jadiya, Piyush Rai" },
      { label: "Year", value: "2025" },
      { label: "Chain", value: "Ethereum (ERC-721 / IPFS)" },
    ],
    problem:
      "NFT drops live or die by their first impression. The brief was to launch a collection page that explains the project, its roadmap and its utility clearly — and feels alive — within the hackathon time box.",
    solution:
      "We built a themed, single-page React site for the Weirdos Club collection: ERC-721 tokens on Ethereum with metadata on IPFS. The page walks visitors from hook to roadmap to the collection itself, with motion that reinforces the story rather than distracting from it.",
    features: [
      { title: "Typewriter hero", text: "Animated headline cycling the collection’s pitch over a looping cover video." },
      { title: "Scroll-drawn roadmap", text: "GSAP ScrollTrigger draws the roadmap SVG path as you scroll through milestones." },
      { title: "NFT showcase", text: "Swiper-powered card carousels and an auto-scrolling showcase of the hand-drawn collection." },
      { title: "Team & FAQ", text: "Hover-animated team cards and a GSAP-pinned accordion FAQ." },
      { title: "Theming system", text: "styled-components ThemeProvider with shared typography scale and colour tokens." },
      { title: "Delight details", text: "Confetti celebration, scroll-to-top control and fully responsive layouts." },
    ],
    contributions: [
      "Scaffolded the React app, theme tokens and global styles.",
      "Built the hero, roadmap and showcase sections with GSAP and Swiper.",
      "Made every section responsive down to mobile widths.",
    ],
    gallery: [
      { src: nft1, alt: "Weirdos Club NFT artwork" },
      { src: nft3, alt: "Weirdos Club NFT artwork" },
      { src: nft5, alt: "Weirdos Club NFT artwork" },
      { src: nft7, alt: "Weirdos Club NFT artwork" },
    ],
    outcome:
      "Shipped a polished, animation-rich Web3 landing page end to end within the hackathon window.",
  },
  {
    slug: "arogya-sambandh",
    title: "Arogya Sambandh",
    subtitle: "Heart-disease prediction & doctor–patient platform",
    category: "Machine Learning · Django",
    year: "2024",
    image: arogya,
    summary:
      "Predicts cardiovascular risk from clinical inputs and connects patients with doctors on a secure Django platform.",
    links: {
      github: "https://github.com/piyushrai007/ArogyaSambandh",
      live: "https://banao-djang-2.vercel.app/",
    },
    stack: ["Python", "Django", "scikit-learn", "SVM", "Logistic Regression", "Pandas"],
    meta: [
      { label: "Type", value: "Personal project" },
      { label: "Roots", value: "IBM ML internship model" },
    ],
    problem:
      "Early heart-disease risk signals are often missed, and patients have no simple way to share their results with a doctor.",
    solution:
      "A Django web app that serves a trained classification model for heart-disease risk and adds doctor and patient roles so results can be reviewed and discussed securely.",
    features: [
      { title: "Risk prediction", text: "SVM and Logistic Regression models trained and evaluated on clinical heart-disease data." },
      { title: "Doctor–patient roles", text: "Separate accounts so doctors can review predictions shared by their patients." },
      { title: "Model serving", text: "Serialized models loaded server-side for real-time predictions." },
    ],
  },
  {
    slug: "web-object-detection",
    title: "Web Object Detection",
    subtitle: "YOLOv8 in the browser workflow",
    category: "Computer Vision",
    year: "2024",
    image: objectDetection,
    summary:
      "Upload an image and get objects detected by a YOLOv8 model, with the dataset and model details documented in the app.",
    links: {
      github: "https://github.com/piyushrai007/WebView_Object_Detectron",
      live: "https://web-detection.vercel.app/",
    },
    stack: ["Python", "YOLOv8", "Ultralytics", "Roboflow", "Web"],
    meta: [{ label: "Type", value: "Academic project" }],
    problem: "Object-detection models usually live in notebooks; this project puts one behind a simple web interface.",
    solution:
      "A web app that documents the dataset and training setup and lets anyone upload an image to run YOLOv8 detection on it.",
    features: [
      { title: "Model testing UI", text: "Upload an image and download the annotated detection result." },
      { title: "Documented pipeline", text: "Dataset statistics, preparation steps and model architecture explained in-app." },
    ],
  },
  {
    slug: "lexical-insight-engine",
    title: "Lexical Insight Engine",
    subtitle: "Web scraping + NLP text analytics",
    category: "NLP · Data",
    year: "2023",
    summary:
      "A Python pipeline that scrapes article text from URLs with Selenium, cleans it, and applies NLP techniques to generate text-analysis insights.",
    links: {},
    stack: ["Python", "Selenium", "BeautifulSoup", "NLP", "Pandas"],
    meta: [{ label: "Type", value: "Course project" }],
    problem: "Analysing hundreds of articles by hand is slow and inconsistent.",
    solution:
      "An automated pipeline: Selenium scrapes each URL, the text is cleaned and tokenised, then NLP techniques are applied to compute text-analysis metrics for each article.",
    features: [
      { title: "Automated scraping", text: "Selenium-driven extraction of article bodies from a list of URLs." },
      { title: "Text cleaning", text: "Stop-word removal and normalisation before analysis." },
      { title: "Insight report", text: "Per-article text-analysis insights in a structured output." },
    ],
  },
  {
    slug: "car-price-prediction",
    title: "Car Price Prediction",
    subtitle: "Regression model with an interactive UI",
    category: "Machine Learning",
    year: "2023",
    image: carPrice,
    summary:
      "Predicts used-car resale prices from year, kilometres driven, fuel type and more — with the notebook and a prediction form side by side.",
    links: {
      github: "https://github.com/piyushrai007/car_price",
      article:
        "https://www.linkedin.com/pulse/predicting-car-prices-machine-learning-data-science-project-rai-y9faf/",
    },
    stack: ["Python", "scikit-learn", "Random Forest", "Pandas", "Matplotlib"],
    meta: [{ label: "Type", value: "Personal project" }],
    problem: "Sellers struggle to price used cars fairly.",
    solution:
      "Cleaned and engineered features from a used-car dataset, compared regressors, tuned the best model and exposed it through a simple form.",
    features: [
      { title: "Feature engineering", text: "Car age, ownership and fuel/transmission encodings." },
      { title: "Model tuning", text: "Randomized hyper-parameter search on tree-based regressors." },
      { title: "Write-up", text: "Full walkthrough published as a LinkedIn article." },
    ],
  },
  {
    slug: "piyush-garage",
    title: "Piyush's Garage",
    subtitle: "Car-service booking platform",
    category: "Django · Web",
    year: "2023",
    image: garage,
    summary:
      "A Django website for booking car services and listing cars for sale, integrated with the car-price model for valuations.",
    links: { github: "https://github.com/piyushrai007/piyush-s-garage" },
    stack: ["Django", "Python", "HTML", "CSS"],
    meta: [{ label: "Type", value: "Personal project" }],
    problem: "Small garages need an online presence for bookings and listings.",
    solution: "A Django site with authentication, service booking and car listings, plus ML-based price estimates.",
    features: [
      { title: "Auth & booking", text: "Sign-up/login and service booking flow." },
      { title: "Car listings", text: "Post cars for sale with ML price suggestions." },
    ],
  },
];

export const skillGroups = [
  { title: "Languages", icon: "fas fa-code", items: ["Python", "JavaScript", "TypeScript", "SQL", "C", "HTML", "CSS"] },
  { title: "Backend", icon: "fas fa-server", items: ["Django", "Django REST", "Flask", "Express", "Celery", "REST APIs"] },
  { title: "Frontend", icon: "fas fa-layer-group", items: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Figma"] },
  { title: "Data & ML", icon: "fas fa-brain", items: ["Pandas", "NumPy", "scikit-learn", "Matplotlib", "NLP", "OpenCV", "RDKit"] },
  { title: "Databases", icon: "fas fa-database", items: ["MS SQL Server (SSMS)", "MongoDB", "PostgreSQL"] },
  { title: "Tools & Platforms", icon: "fas fa-tools", items: ["Git", "GitHub", "IIS", "IBM Cloud", "LaTeX", "Selenium", "BeautifulSoup"] },
];

export const education = [
  {
    degree: "B.Tech, Artificial Intelligence and Data Science",
    school: "Samrat Ashok Technological Institute, Vidisha",
    period: "2021 — 2025",
    score: "CGPA 7.50 / 10",
  },
  {
    degree: "Class XII",
    school: "Saket Shishu Ranjan Higher Secondary School, Vidisha",
    period: "2021",
    score: "89%",
  },
  {
    degree: "Class X",
    school: "Saket Shishu Ranjan Higher Secondary School, Vidisha",
    period: "2019",
    score: "91%",
  },
];

export const honors = [
  { title: "5th place — HackHound 2.0", detail: "24-hour national hackathon, SRM University · 50+ teams", icon: "fas fa-trophy" },
  { title: "Participant — Kriyeta 3.0", detail: "Hackathon, Indore", icon: "fas fa-flag-checkered" },
  { title: "IBM certifications", detail: "Machine Learning with Python · Data Analysis with Python · Data Visualization with Python · AI Fundamentals", icon: "fas fa-certificate" },
  { title: "MongoDB", detail: "The Document Model", icon: "fas fa-leaf" },
];
