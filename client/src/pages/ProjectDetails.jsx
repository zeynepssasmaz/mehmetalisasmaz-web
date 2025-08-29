import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/buildings/${slug}`
        );
        console.log("Slug:", slug);
        console.log("Project data:", res.data);
        setProject(res.data);
      } catch (err) {
        console.error("Proje alınamadı:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading) {
    return <p className="loading">Yükleniyor...</p>;
  }

  if (!project) {
    return <p className="not-found">Proje bulunamadı...</p>;
  }

  const images = project.gorseller || [];

  return (
    <motion.div
      className="project-detail-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Anasayfa</Link> &gt;{" "}
        <Link to="/galeri" className="breadcrumb-link">Galeri</Link> &gt;{" "}
        <span className="breadcrumb-current">{project.apartman}</span>
      </div>

      <h2 className="project-title">{project.apartman}</h2>

      <div className="project-images">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="project-img-box"
            onClick={() => { setPhotoIndex(idx); setIsOpen(true); }}
          >
            <img
              src={img}
              alt={`${project.apartman} - ${idx + 1}`}
              loading="lazy"
              decoding="async"
              className="project-img"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </motion.div>
  );
};

export default ProjectDetails;

