import { Link } from 'react-router-dom';
import { Mail, Link2, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand-name" style={{ fontSize: 18, marginBottom: 8 }}>Ahmed Hassan Sayed</div>
          <p className="text-dim" style={{ maxWidth: 280 }}>
            Full Stack Developer · Python · FastAPI · PostgreSQL
          </p>
          <p className="text-faint" style={{ marginTop: 10 }}>Beni Suef, Egypt 🇪🇬</p>
        </div>
        <div>
          <div className="footer-col-title">Quick Links</div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <div className="footer-col-title">Career</div>
          <Link to="/cv">CV</Link>
          <Link to="/certificates">Certificates</Link>
          <Link to="/timeline">Timeline</Link>
        </div>
        <div>
          <div className="footer-col-title">Social</div>
          <a href="mailto:ghghghb083@gmail.com"><Mail size={14} /> Email</a>
          <a href="https://github.com/ahmedhassan232" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
          <a href="https://www.linkedin.com/in/ahmed-hassan-05085536a" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Ahmed Hassan Sayed</span>
      </div>
    </footer>
  );
}