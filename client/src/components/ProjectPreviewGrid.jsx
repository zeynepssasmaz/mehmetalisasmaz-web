// src/components/ProjectPreviewGrid.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPreviewGrid.css';

const PAGE_SIZE = 8;

export default function ProjectPreviewGrid({ optimizeImage }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const fetchPage = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/buildings/previews?page=${page}&limit=${PAGE_SIZE}`
      );
      const data = await res.json();
      setItems(prev => [...prev, ...data.items]);
      setHasMore(data.hasMore);
      setPage(p => p + 1);
    } catch (e) {
      console.error('Previews fetch error:', e);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  // İlk sayfa
  useEffect(() => {
    fetchPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sonsuz kaydırma: IntersectionObserver
  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;

    const io = new IntersectionObserver(entries => {
      const first = entries[0];
      if (first.isIntersecting) fetchPage();
    }, { rootMargin: '400px' });

    io.observe(el);
    return () => io.disconnect();
  }, [fetchPage]);

  return (
    <div className="projects-grid">
      {items.map((p) => (
        <Link key={p.slug} to={`/galeri/${p.slug}`} className="project-card" aria-label={p.apartman}>
          <div className="thumb-wrap">
            <img
              src={optimizeImage(p.cover, { preset: 'thumb' })}
              alt={p.apartman}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>
          <div className="project-name">{p.apartman}</div>
        </Link>
      ))}

      {/* Skeletonlar */}
      {loading && (
        <>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`skeleton-${i}`} className="project-card skeleton">
              <div className="thumb-wrap shimmer" />
              <div className="project-name shimmer-line" />
            </div>
          ))}
        </>
      )}

      {/* Observer tetikleyicisi */}
      {hasMore && <div ref={loaderRef} style={{ height: 1 }} />}
    </div>
  );
}

