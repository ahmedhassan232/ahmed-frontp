export const projects = [
  {
    id: 'real-estate-analytics',
    name: 'Real Estate Analytics System',
    category: ['Web Application', 'Admin Dashboard'],
    filterTags: ['Web Applications', 'Dashboards', 'React'],
    description:
      'A modern real estate analytics and management dashboard designed to manage and analyze property data through a professional web interface.',
    overview:
      'A dashboard-style web application for managing real estate portfolios — properties, owners, employees and performance statistics — through a single admin interface.',
    problem:
      'Real estate data (properties, owners, employees, performance) needed one interactive place to be entered, browsed and understood, instead of static spreadsheets.',
    verified: true,
    screens: [
      'Dashboard', 'Properties', 'Add Property', 'Owners',
      'Employees', 'Statistics', 'Reports', 'Settings', 'About',
    ],
    features: [
      'Responsive dashboard with sidebar navigation and topbar search',
      'Property management screens with forms, tables and pagination',
      'Filtering across property listings',
      'Charts and statistics for property data (apartments, villas, offices, lands)',
      'Full Light Mode and Dark Mode support',
    ],
    tableFields: ['ID', 'Image', 'Title', 'Type', 'Location', 'Area', 'Price', 'Owner', 'Status', 'Actions'],
    stats: ['Total Properties', 'Apartments', 'Villas', 'Offices', 'Lands'],
    tech: ['React', 'JavaScript', 'CSS', 'React Icons'],
    challenges:
      'Structuring a data-table-heavy interface — filtering, pagination and dark mode — so it stays readable and fast without a backend to lean on.',
    built:
      'The full frontend: sidebar and topbar shell, property forms and tables, statistics cards, charts, and the light/dark theme system.',
    liveUrl: null,
    sourceUrl: null,
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Website',
    category: ['Web', 'Frontend'],
    filterTags: ['Web Applications', 'Frontend', 'React', 'JavaScript'],
    description:
      'A multi-page personal portfolio website designed to showcase projects, skills, certificates, timeline, resume, blog content and contact information.',
    overview:
      'A responsive, multi-page portfolio built to present projects and skills through an interactive, dashboard-inspired frontend — this website.',
    problem:
      'Needed one place — beyond a resume — to show real projects, skills and a working CV through an interface that itself demonstrates frontend ability.',
    verified: true,
    screens: [
      'Dashboard', 'About', 'Projects', 'Skills', 'Services',
      'CV / Resume', 'Certificates', 'Timeline', 'Blog', 'Contact',
    ],
    features: [
      'Multi-page layout with responsive design across breakpoints',
      'Full Light Mode and Dark Mode theming',
      'Interactive navigation with a command palette (Ctrl+K)',
      'Custom cursor and page-load animations',
      'Animated counters, charts and a career timeline',
      'Printable CV and a working contact form',
    ],
    tableFields: [],
    stats: [],
    tech: ['React', 'JavaScript', 'Vite', 'CSS'],
    challenges:
      'Designing one consistent visual system — sidebar, topbar, cards, forms and modals — that holds up across ten different pages and two themes.',
    built:
      'Every page and component of this site: routing, layout, theming, the command palette, the project modal system, and the CV/print layout.',
    liveUrl: null,
    sourceUrl: null,
  },
];
