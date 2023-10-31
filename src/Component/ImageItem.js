import React from "react";

function ImageItem({ image, isSelected, onImageSelect, onReorder }) {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="absolute top-2 left-2 z-10"
        checked={isSelected}
        onChange={() => onImageSelect(image)}
      />
      <img
        src={image.url}
        alt={`Image ${image.id}`}
        className="w-full h-auto"
        draggable="true"
        onDragStart={(e) => e.preventDefault()} // Disable drag-and-drop for images
      />
    </div>
  );
}

export default ImageItem;
