import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProjectPreviewGrid.css';

const ProjectPreviewGrid = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/buildings');
        setProjects(res.data);
      } catch (err) {
        console.error("Projeler alınamadı:", err);
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
        {projects.map((p, i) => {
          const slug = p.slug || p.apartman?.trim().toLowerCase().replace(/\s+/g, "-");

          const imgSrc = p.gorseller?.[0]
            ? p.gorseller[0].startsWith('http')
              ? p.gorseller[0]
              : `http://localhost:3001/${p.gorseller[0]}`
            : '';

          return (
            <div
              key={i}
              className="project-card"
              onClick={() => goToProject(slug)}
            >
              <img src={imgSrc} alt={p.apartman} />
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

