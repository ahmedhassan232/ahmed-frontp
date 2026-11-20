export const projects = [
  {
    id: 'edumind-ai',
    name: 'EduMind AI',
    category: ['Full Stack', 'AI Education'],
    filterTags: ['Web Applications', 'Backend', 'Python', 'AI'],
    description:
      'An AI-powered educational platform that brings course management, document learning, quizzes, and personalized study planning into one place.',
    overview:
      'A learning platform built with Next.js and PostgreSQL, with course management, document ingestion, quizzes, study planning, and optional AI-assisted tutoring.',
    problem:
      'Students need one organized place to manage learning materials, practice with quizzes, and plan their study activity.',
    verified: true,
    screens: ['Courses', 'Documents', 'Quizzes', 'Study Plan', 'AI Assistant'],
    features: [
      'Course and learning-material management',
      'Document upload and question answering workflow',
      'Quiz and assessment features',
      'Personal study planning',
      'Optional AI-assisted learning support',
    ],
    tableFields: [],
    stats: [],
    tech: ['Next.js', 'React', 'PostgreSQL', 'AI Integration'],
    challenges:
      'Bringing learning workflows and AI-assisted features together while keeping user data and course access separated.',
    built:
      'An educational web application with course, document, quiz, study-plan, and AI tutoring features.',
    liveUrl: 'https://edumind-ai-i17b.vercel.app',
    sourceUrl: null,
    sourceStatus: 'Private repository',
  },
  {
    id: 'reas',
    name: 'REAS — Real Estate Analytics System',
    category: ['Full Stack', 'Analytics Dashboard'],
    filterTags: ['Web Applications', 'Dashboards', 'Backend', 'Python', 'React'],
    description:
      'A real estate analytics application featuring a React frontend, Flask REST API, and a dashboard for property data.',
    overview:
      'A full-stack real estate system with a React interface and a Python Flask REST API for managing property information and viewing analytics.',
    problem:
      'Property information and real estate statistics need a structured interface that makes records easier to manage and understand.',
    verified: true,
    screens: ['Dashboard', 'Properties', 'Owners', 'Employees', 'Statistics', 'Reports', 'Settings'],
    features: [
      'Property management through a web dashboard',
      'Flask-powered REST API',
      'Analytics and statistics views',
      'Responsive interface with light and dark themes',
    ],
    tableFields: [],
    stats: [],
    tech: ['React', 'Flask', 'Python', 'REST API'],
    challenges:
      'Connecting the frontend dashboard to a separate backend API and presenting property data in a clear interface.',
    built:
      'The React frontend and Flask REST API integration for the real estate analytics system.',
    liveUrl: 'https://rea-ss.vercel.app',
    sourceUrl: 'https://github.com/ahmedhassan232/REASs',
    sourceStatus: null,
  },
  {
    id: 'smartreview-ai',
    name: 'SmartReviewAI',
    category: ['Academic Project', 'Machine Learning'],
    filterTags: ['AI', 'Python', 'Machine Learning'],
    description:
      'An academic project focused on analyzing product reviews and identifying potentially fake ratings using Machine Learning and Natural Language Processing.',
    overview:
      'A product-review analysis project that applies machine learning and natural language processing to help distinguish genuine feedback from potentially fake ratings.',
    problem:
      'Online product ratings can be difficult to evaluate when reviews may be misleading or inauthentic.',
    verified: true,
    screens: ['Review Input', 'Analysis', 'Results'],
    features: [
      'Product review text analysis',
      'Machine learning fundamentals applied to rating analysis',
      'Natural language processing workflow',
      'React interface and API integration',
    ],
    tableFields: [],
    stats: [],
    tech: ['Python', 'Machine Learning', 'NLP', 'React', 'API Integration'],
    challenges:
      'Combining text-processing and machine-learning concepts with a usable application workflow.',
    built:
      'An academic review-analysis workflow focused on identifying potentially fake ratings.',
    liveUrl: null,
    sourceUrl: null,
    sourceStatus: 'No public repository',
  },
  {
    id: 'noor-al-islam',
    name: 'Noor Al-Islam',
    category: ['Mobile Application', 'Android'],
    filterTags: ['Mobile Applications', 'React', 'JavaScript'],
    description:
      'An Islamic mobile application developed with web technologies and packaged for Android.',
    overview:
      'A mobile-focused Islamic application with Quran reading and listening, Hadith, daily supplications, prayer times, and Qibla features.',
    problem:
      'Provide commonly used Islamic resources in one accessible mobile application with Arabic and RTL support.',
    verified: true,
    screens: ['Quran', 'Hadith', 'Supplications', 'Prayer Times', 'Qibla', 'Radio'],
    features: [
      'Quran reading and audio recitation',
      'Hadith and daily supplications',
      'Prayer-time and Qibla tools',
      'Android packaging using Capacitor',
      'Arabic right-to-left interface',
    ],
    tableFields: [],
    stats: [],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Capacitor'],
    challenges:
      'Adapting a web application for Android while preserving a comfortable mobile experience.',
    built:
      'A mobile Islamic application and its Android packaging workflow.',
    liveUrl: 'https://noor-al-islam-app-gold.vercel.app',
    sourceUrl: 'https://github.com/ahmedhassan232/noor-al-islam-app-',
    sourceStatus: null,
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Website',
    category: ['Web Application', 'Portfolio'],
    filterTags: ['Web Applications', 'Frontend', 'React', 'JavaScript'],
    description:
      'A responsive multi-page portfolio presenting my background, skills, selected projects, and contact information.',
    overview:
      'A frontend-only React portfolio with dedicated pages for projects, skills, experience, CV, and contact information.',
    problem:
      'Presenting technical experience and selected work in one place beyond a traditional CV.',
    verified: true,
    screens: ['Overview', 'About', 'Projects', 'Skills', 'CV', 'Contact'],
    features: [
      'Responsive multi-page layout',
      'Project cards with verified project links',
      'Light and dark themes',
      'Printable CV page',
      'Contact links and social profiles',
    ],
    tableFields: [],
    stats: [],
    tech: ['React', 'JavaScript', 'Vite', 'React Router', 'CSS'],
    challenges:
      'Keeping a consistent design system across pages while making the project information and external links easy to navigate.',
    built:
      'The portfolio interface, navigation, project display, skills pages, and CV presentation.',
    liveUrl: 'https://ahmed-frontp.vercel.app',
    sourceUrl: 'https://github.com/ahmedhassan232/ahmed-frontp',
    sourceStatus: null,
  },

  {
    id: 'portify-ai', name: 'Portify AI', category: ['Full Stack', 'AI SaaS'],
    filterTags: ['Web Applications', 'Frontend', 'Backend', 'AI', 'React'],
    description: 'An AI-powered CV-to-portfolio platform that turns PDF and DOCX resumes into polished personal portfolio websites.',
    overview: 'A full-stack AI product for parsing CV documents, extracting professional information, generating portfolio content, and presenting it through responsive templates.',
    problem: 'Professionals need a fast way to turn an existing CV into a polished online portfolio.',
    verified: true, screens: ['CV Upload', 'AI Analysis', 'Portfolio Generation', 'Templates'],
    features: ['PDF and DOCX CV upload', 'Structured CV parsing and analysis', 'AI-assisted content generation', 'Responsive portfolio output'],
    tableFields: [], stats: [], tech: ['Next.js', 'TypeScript', 'OpenRouter', 'PostgreSQL'],
    challenges: 'Turning unstructured CV documents into consistent profile data and useful portfolio content.',
    built: 'An AI-assisted CV analysis and portfolio-generation workflow.',
    liveUrl: 'https://portify-bliu6w3e7-ahmedhassan232s-projects.vercel.app', sourceUrl: 'https://github.com/ahmedhassan232/portify-ai', sourceStatus: null,
  },
  {
    id: 'stockflow', name: 'StockFlow', category: ['Full Stack', 'SaaS', 'Inventory Management'],
    filterTags: ['Web Applications', 'Backend', 'Dashboards', 'React', 'Python'],
    description: 'A SaaS platform for inventory, warehouse, and sales operations with multi-company support and Arabic/English experience.',
    overview: 'A business operations platform focused on managing inventory, warehouses, and sales workflows in a centralized workspace.',
    problem: 'Growing businesses need a centralized way to track stock and coordinate warehouse and sales operations.',
    verified: true, screens: ['Inventory', 'Warehouses', 'Sales', 'Company Workspace'],
    features: ['Inventory and stock workflows', 'Warehouse management', 'Sales operations', 'Multi-company support', 'Arabic and English interface'],
    tableFields: [], stats: [], tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    challenges: 'Coordinating inventory and sales workflows while supporting multiple companies and language directions.',
    built: 'A multi-company inventory and warehouse management SaaS application.',
    liveUrl: 'https://stockflow-murex-tau.vercel.app', sourceUrl: 'https://github.com/ahmedhassan232/stockflow', sourceStatus: null,
  },
];