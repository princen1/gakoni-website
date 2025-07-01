import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { 
  arrayMove,
  SortableContext,
  rectSortingStrategy
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';
import './Gallery.css';
import galleryImages from '../utils/loadGalleryImages';

const Gallery = () => {
  const [items, setItems] = useState(galleryImages);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [items]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const openImageModal = (image) => {
    setSelectedImg(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">School Gallery</h1>
        <p className="gallery-subtitle">Drag to reorder images</p>
      </div>

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={items}
          strategy={rectSortingStrategy}
        >
          <div className="gallery-grid">
            {items.map((image) => (
              <SortableItem 
                key={image.id} 
                id={image.id}
                onClick={() => openImageModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                  className="gallery-img"
                />
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {isModalOpen && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              &times;
            </button>
            <img 
              src={selectedImg.src} 
              alt={selectedImg.alt} 
              className="modal-image"
            />
            {selectedImg.caption && (
              <div className="image-caption">{selectedImg.caption}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;