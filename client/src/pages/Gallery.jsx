import React from 'react';
import ProjectPreviewGrid from '../components/ProjectPreviewGrid';
import optimizeImage from '../optimizeImage';
import './Gallery.css';

const Gallery = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      {/* ProjectPreviewGrid içinde de optimizeImage kullanılmalı */}
      <ProjectPreviewGrid optimizeImage={optimizeImage} />
    </div>
  );
};

export default Gallery;

