import React, { useState } from "react";

function ImageItem({ image, isSelected, onImageSelect, onReorder, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  // Function to handle checkbox
  const handleCheckboxChange = () => {
    onImageSelect(image);
  };

  // Function to handle image dragStart
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", image.id);
    setDragging(true);
  };

  // Function to handle image dragEnd
  const handleDragEnd = () => {
    setDragging(false);
  };

  // Function to handle image dragOver
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Function to handle image drop
  const handleDrop = (e) => {
    e.preventDefault();
    const draggedImageId = e.dataTransfer.getData("text/plain");
    onReorder(draggedImageId, image.id);
    setDragging(false);
  };

  return (
    <div
      className={`relative border-2 rounded-xl border-gray-300 group md:flex items-center justify-center overflow-hidden cursor-pointer ${
        index === 0 ? "h-[25rem]" : "h-48"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {(isHovered || isSelected) && !dragging && (
        <div
          className={`md:absolute inset-0 ${
            isSelected ? "selected-overlay" : isHovered ? "hovered-overlay" : ""
          }`}
        />
      )}
      {(isHovered || isSelected) && !dragging && (
        <input
          type="checkbox"
          className="md:absolute top-2 left-2 mt-2 ml-5 sm:w-5 sm:h-5 cursor-pointer"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      )}
      <img
        src={image.url}
        alt={`img ${image.id}`}
        className="object-cover-fit w-full h-full"
      />
    </div>
  );
}

export default ImageItem;