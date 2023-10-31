import React from 'react';

function ImageItem({ image, isSelected, onImageSelect, onReorder }) {
    const handleSelect = () => {
      onImageSelect(image);
    }
  
    const handleDragStart = (e) => {
      // Implement logic for drag-and-drop
    };
  
    const handleDragEnd = () => {
      // Implement logic for drag-and-drop
    };
  
    return (
      <div
        className={`image-item ${isSelected ? 'selected' : ''} ${image.isFeatured ? 'featured' : ''}`}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handleSelect}
      >
        <img src={image.url} alt={`Image ${image.id}`} />
      </div>
    );
  }

export default ImageItem;
