import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { projects } from '../data/projects';
import { otherProjects, otherProjectDomains } from '../data/otherProjects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const filters = ['All', 'Web Applications', 'Backend', 'Dashboards', 'AI', 'Python', 'React', 'Mobile Applications'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === 'All' || p.filterTags.includes(filter);
      const q = query.toLowerCase();
      const matchesQuery = !q || p.name.toLowerCase().includes(q)
        || p.tech.some((t) => t.toLowerCase().includes(q))
        || p.category.some((c) => c.toLowerCase().includes(q))
        || p.features.some((f) => f.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">02 — Portfolio</span>
          <h1>Selected Projects</h1>
          <p className="page-sub">Personal and academic work with verified project links where available.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-head"><h2>Featured Work</h2></div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-head"><h2>Browse Projects</h2></div>

        <div className="search-row">
          <Search size={16} className="text-faint" />
          <input placeholder="Search projects..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div className="filter-row">
          {filters.map((f) => (
            <button key={f} className={`filter-chip ${filter === f ? 'filter-chip-active' : ''}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
          {filtered.length === 0 && (
            <div className="empty-state card" style={{ gridColumn: '1 / -1' }}>
              <h3>No projects match</h3>
              <p>Try a different filter or search term.</p>
            </div>
          )}
        </div>
      </div>

      {otherProjects.length > 0 && (
        <div className="section">
          <div className="section-head">
            <h2>Additional Technical Projects</h2>
            <span className="text-faint">AI & Data · Embedded Systems · Networking</span>
          </div>
          <div className="grid-3">
            {otherProjectDomains.map((domain) => (
              <div className="card" style={{ padding: 20 }} key={domain}>
                <span className="tag" style={{ marginBottom: 12, display: 'inline-block' }}>{domain}</span>
                {otherProjects.filter((p) => p.domain === domain).map((p) => (
                  <div key={p.name} style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600 }}>{p.name}</div>
                    <div className="text-faint" style={{ fontSize: 12.5 }}>{p.description}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}