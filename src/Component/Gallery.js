// Gallery.js
import React from "react";
import ImageItem from "./ImageItem";

function Gallery({ images, selectedImages, handleImageSelect, handleReorder, setIsDeleteButtonVisible }) {
  return (
    <div className="gallery md:grid grid-rows-3 grid-flow-col gap-4 mx-8">
      {images.map((image) => (
        <ImageItem
          key={image.id}
          image={image}
          isSelected={selectedImages.includes(image.id)}
          onImageSelect={handleImageSelect}
          onReorder={handleReorder}
          setIsDeleteButtonVisible={setIsDeleteButtonVisible}
        />
      ))}
    </div>
  );
}

export default Gallery;