import React, { useState } from 'react';
import "../styles/gallery.css"; // Make sure your CSS matches this structure

const Gallery = () => {
  const [visibleProjects, setVisibleProjects] = useState(9);

  const projects = [
    { id: 1, category: 'Construction', image: '/assets/ind.jpg' },
    { id: 2, category: 'Interior', image: '/assets/ind1.jpg' },
    { id: 3, category: 'Transport', image: '/assets/mart1.jpg' },
    { id: 4, category: 'Construction', image: '/assets/mart2.jpg' },
    { id: 5, category: 'Interior', image: '/assets/mart5.jpg' },
    { id: 6, category: 'Transport', image: '/assets/mart6.jpg' },
    { id: 7, category: 'Construction', image: '/assets/mart7.png' },
    { id: 8, category: 'Interior', image: '/assets/mart8.png' },
    { id: 9, category: 'Transport', image: '/assets/mart9.png' },
    { id: 10, category: 'Construction', image: '/assets/mart10.png' },
    { id: 11, category: 'Interior', image: '/assets/mart11.png' },
    { id: 12, category: 'Transport', image: '/assets/mart12.png' },
    { id: 13, category: 'Construction', image: '/assets/mart13.png' },
    { id: 14, category: 'Interior', image: '/assets/mart14.jpg' },
    { id: 15, category: 'Transport', image: '/assets/mart15.jpg' },
    { id: 16, category: 'Construction', image: '/assets/mart16.jpg' },
    { id: 17, category: 'Interior', image: '/assets/mart17.jpg' },
  
    { id: 19, category: 'Construction', image: '/assets/mart19.jpg' },
    { id: 20, category: 'Interior', image: '/assets/mart20.jpg' },
    { id: 21, category: 'Construction', image: '/assets/mart21.jpg' },
    { id: 22, category: 'Interior', image: '/assets/mart27.jpg' },
    { id: 23, category: 'Construction', image: '/assets/mart23.jpg' },
    { id: 24, category: 'Interior', image: '/assets/mart24.jpg' },
    { id: 25, category: 'Construction', image: '/assets/mart25.jpg' },
    { id: 26, category: 'Interior', image: '/assets/mart26.jpg' },
    { id: 27, category: 'Interior', image: '/assets/mart27.jpg' },
    { id: 28, category: 'Interior', image: '/assets/mart28.jpg' },
    { id: 29, category: 'Interior', image: '/assets/mart29.jpg' },

  ];

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>GALLERY</h1>
        <p>A glimpse of our recent projects and work</p>
      </div>

      <div className="gallery-grid animate">
        {projects.slice(0, visibleProjects).map((project) => (
          <div className="gallery-item" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt="Project" />
              <div className="image-overlay"></div>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
