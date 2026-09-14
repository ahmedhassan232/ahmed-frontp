import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';

import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Services from './pages/Services';
import CV from './pages/CV';
import Certificates from './pages/Certificates';
import Timeline from './pages/Timeline';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    const main = document.querySelector('.main-scroll');
    main?.scrollTo({ top: 0 });
  }, [location.pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      {!loading && (
        <div className="app-shell">
          <CustomCursor />
          <Topbar onMenuClick={() => setSidebarOpen(true)} onSearchClick={() => setPaletteOpen(true)} />
          <Sidebar open={sidebarOpen} collapsed={false} onClose={() => setSidebarOpen(false)} />
          <main className="main-scroll" ref={mainRef}>
            <ScrollProgress target={mainRef} />
            <ScrollToTop />
            <div className="page-fade" key={location.pathname}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/services" element={<Services />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </main>
          <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
        </div>
      )}
    </>
  );
}
