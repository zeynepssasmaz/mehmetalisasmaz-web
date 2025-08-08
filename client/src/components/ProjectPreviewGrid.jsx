import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import optimizeImage from '../optimizeImage';
import './ProjectPreviewGrid.css';

const ProjectPreviewGrid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/buildings`);
        setProjects(res.data);
      } catch (err) {
        console.error("Projeler alınamadı:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const goToProject = (slug) => {
    navigate(`/gallery/${slug}`);
  };

  return (
    <div className="project-section">
      <h2 className="section-title">Projelerimiz</h2>
      <div className="project-grid">
        {loading
          ? Array(6).fill(0).map((_, i) => (
              <div key={i} className="project-card">
                <div className="skeleton skeleton-img"></div>
              </div>
            ))
          : projects.map((p, i) => {
              const slug = p.slug || p.apartman?.trim().toLowerCase().replace(/\s+/g, "-");

              let imgSrc = '';
              if (p.gorseller?.[0]) {
                imgSrc = p.gorseller[0].startsWith('http')
                  ? optimizeImage(p.gorseller[0])
                  : `${process.env.REACT_APP_API_URL}/${p.gorseller[0]}`;
              }

              return (
                <div
                  key={i}
                  className="project-card"
                  onClick={() => goToProject(slug)}
                >
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt={p.apartman}
                      loading="lazy"
                    />
                  )}
                  <div className="overlay">
                    <span>{p.apartman}</span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProjectPreviewGrid;

