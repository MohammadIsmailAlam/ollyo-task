import React, { useState } from "react";

function ImageItem({ image, isSelected, onImageSelect, onReorder }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = () => {
    onImageSelect(image);
  };

  return (
    <div
      className={`relative border-2 border-gray-300 ${
        isHovered
          ? "hover:border-ash hover:text-grey-500"
          : "" // Change border color and text color on hover
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <input
          type="checkbox"
          className="md:absolute top-2 left-2 z-10 mt-12 ml-10 sm:w-5 sm:h-5"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      )}
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