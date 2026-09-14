import { PenSquare } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function Blog() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Writing</span>
          <h1>Blog</h1>
          <p className="page-sub">Developer-focused notes on projects I've built. Coming soon.</p>
        </div>
      </div>

      <div className="grid-3">
        {blogPosts.map((post) => (
          <div className="card blog-card" key={post.title}>
            <PenSquare size={18} style={{ color: 'var(--text-faint)', marginBottom: 10 }} />
            <span className="tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <span className="coming-soon">Coming Soon</span>
          </div>
        ))}
      </div>
    </div>
  );
}
