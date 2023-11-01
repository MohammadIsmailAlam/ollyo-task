import React, { useState } from "react";

function ImageItem({ image, isSelected, onImageSelect, onReorder }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = () => {
    onImageSelect(image);
  };

  return (
    <div
      className={`relative border-2 border-gray-300 group md:flex items-center justify-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="img">
        <input
          type="checkbox"
          className="md:absolute top-2 left-2 z-10 mt-12 ml-10 sm:w-5 sm:h-5"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      </div>
      <img
        src={image.url}
        alt={`img ${image.id}`}
        className="object-cover	w-full md:w-auto h-full md:h-auto"
        draggable="true"
        onDragStart={(e) => e.preventDefault()} // Disable drag-and-drop for images
      />
    </div>
  );
}

export default ImageItem;
