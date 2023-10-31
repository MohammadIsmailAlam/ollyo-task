import React, { useState } from "react";
import ImageItem from "../ImageItem";

function Home() {
  const [images, setImages] = useState([
    { id: 1, url: "img/image-1.webp", isFeatured: true },
    { id: 2, url: "/img/image-2.webp", isFeatured: true },
    { id: 3, url: "/img/image-3.webp", isFeatured: true },
    { id: 4, url: "/img/image-4.webp", isFeatured: true },
    { id: 5, url: "/img/image-5.webp", isFeatured: true },
    { id: 6, url: "/img/image-6.webp", isFeatured: true },
    { id: 7, url: "/img/image-7.webp", isFeatured: true },
    { id: 8, url: "/img/image-8.webp", isFeatured: true },
    { id: 9, url: "/img/image-9.webp", isFeatured: true },
    { id: 10, url: "/img/image-10.jpeg", isFeatured: true },
    { id: 11, url: "/img/image-11.jpeg", isFeatured: true },
  ]);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (image) => {
    // Implement logic to select or deselect an image
  };

  const handleReorder = (dragIndex, hoverIndex) => {
    // Implement logic for reordering images
  };

  const handleDelete = () => {
    // Implement logic for deleting selected images
  };
  return (
    <div>
      <div>
        <nav>
          <h1 className="ml-2 font-semibold">Gallery</h1>
        </nav>
      </div>

      <div className="gallery grid grid-rows-3 grid-flow-col gap-4">
        {images.map((image, index) => (
          <ImageItem
            key={image.id}
            image={image}
            isSelected={selectedImages.includes(image.id)}
            onImageSelect={handleImageSelect}
            onReorder={handleReorder}
          />
        ))}
      </div>

      <button onClick={handleDelete}>Delete Selected Images</button>
    </div>
  );
}

export default Home;
