import React, { useState } from "react";

function ImageItem({ image, isSelected, onImageSelect, onReorder, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = () => {
    onImageSelect(image);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", image.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedImageId = e.dataTransfer.getData("text/plain");
    onReorder(draggedImageId, image.id);
  };

  return (
    <div
      className={`relative border-2 border-gray-300 group md:flex items-center justify-center overflow-hidden ${
        index === 0 ? "h-[25rem]" : "h-48"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {(isHovered || isSelected) && (
        <div
          className={`md:absolute inset-0 ${
            isSelected ? "selected-overlay" : isHovered ? "hovered-overlay" : ""
          }`}
        />
      )}
      {(isHovered || isSelected) && (
        <input
          type="checkbox"
          className="md:absolute top-2 left-2 z-10 mt-8 ml-5 sm:w-5 sm:h-5"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      )}
      <img
        src={image.url}
        alt={`img ${image.id}`}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default ImageItem;
