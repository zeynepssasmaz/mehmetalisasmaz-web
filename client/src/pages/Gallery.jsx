// src/pages/Gallery.jsx
import React from 'react';
import ProjectPreviewGrid from '../components/ProjectPreviewGrid';
import optimizeImage from '../optimizeImage';
import './Gallery.css';
import '../components/ProjectPreviewGrid.css'; // <-- ekle

const Gallery = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <ProjectPreviewGrid optimizeImage={optimizeImage} />
    </div>
  );
};

export default Gallery;

