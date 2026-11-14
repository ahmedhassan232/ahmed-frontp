import { useState } from 'react';
import { Mail, Link2, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const EMAIL = 'ghghghb083@gmail.com';
const PHONE = '+20 1127490096';
const GITHUB = 'https://github.com/ahmedhassan232';
const LINKEDIN = 'https://www.linkedin.com/in/ahmed-hassan-05085536a';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject || `Message from ${form.name}`)}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
    setTimeout(() => {
      setStatus('sent');
      window.location.href = mailto;
    }, 500);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Connect</span>
          <h1>Let's Build Something Together</h1>
          <p className="page-sub">
            Get in touch about development opportunities, internships, collaborations,
            or software projects.
          </p>
        </div>
      </div>

      <div className="contact-grid">
        <div className="card contact-info-card">
          <div className="contact-row">
            <div className="contact-row-icon"><Mail size={16} /></div>
            <div>
              <div className="contact-row-label">Email</div>
              <a className="contact-row-value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-row-icon"><Phone size={16} /></div>
            <div>
              <div className="contact-row-label">Phone</div>
              <a className="contact-row-value" href="tel:+201127490096">{PHONE}</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-row-icon"><Github size={16} /></div>
            <div>
              <div className="contact-row-label">GitHub</div>
              <a className="contact-row-value" href={GITHUB} target="_blank" rel="noreferrer">github.com/ahmedhassan232</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-row-icon"><Link2 size={16} /></div>
            <div>
              <div className="contact-row-label">LinkedIn</div>
              <a className="contact-row-value" href={LINKEDIN} target="_blank" rel="noreferrer">linkedin.com/in/ahmed-hassan-05085536a</a>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-row-icon"><MapPin size={16} /></div>
            <div>
              <div className="contact-row-label">Location</div>
              <div className="contact-row-value">Beni Suef, Egypt</div>
            </div>
          </div>
        </div>

        <form className="card form-card" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <div className="form-error">{errors.name}</div>}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>
          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            {errors.message && <div className="form-error">{errors.message}</div>}
          </div>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Opening email...' : 'Send Message'}
          </button>
          {status === 'sent' && (
            <div className="form-status success">Your email app should open with the message ready to send.</div>
          )}
          <p className="text-faint" style={{ fontSize: 12, marginTop: 12 }}>
            This form opens your email application. It does not send messages through a website backend.
          </p>
        </form>
      </div>
    </div>
  );
}