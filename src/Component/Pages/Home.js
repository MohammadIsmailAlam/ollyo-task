import React, { useState } from "react";
import Header from "../Header";
import Gallery from "../Gallery";

function Home() {
  const [images, setImages] = useState([
    { id: 1, url: "img/image-1.webp", isFeatured: true },
    { id: 2, url: "img/image-2.webp", isFeatured: true },
    { id: 3, url: "img/image-3.webp", isFeatured: true },
    { id: 4, url: "img/image-4.webp", isFeatured: true },
    { id: 5, url: "img/image-5.webp", isFeatured: true },
    { id: 6, url: "img/image-6.webp", isFeatured: true },
    { id: 7, url: "img/image-7.webp", isFeatured: true },
    { id: 8, url: "img/image-8.webp", isFeatured: true },
    { id: 9, url: "img/image-9.webp", isFeatured: true },
    { id: 10, url: "img/image-10.jpeg", isFeatured: true },
    { id: 11, url: "img/image-11.jpeg", isFeatured: true },
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  // Function to handle image selection
  const handleImageSelect = (image) => {
    if (selectedImages.includes(image.id)) {
      setSelectedImages(selectedImages.filter((id) => id !== image.id));
    } else {
      setSelectedImages([...selectedImages, image.id]);
    }
  };

  // Function to handle image reordering (you can implement this logic)
  const handleReorder = (dragIndex, hoverIndex) => {
    // Implement logic for reordering images
  };

  // Function to handle image deletion
  const handleDelete = () => {
    const updatedImages = images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
    setIsDeleteButtonVisible(false);
  };

  return (
    <div>
      <Header selectedImages={selectedImages} handleDelete={handleDelete} />
      <Gallery
        images={images}
        selectedImages={selectedImages}
        handleImageSelect={handleImageSelect}
        handleReorder={handleReorder}
        setIsDeleteButtonVisible={setIsDeleteButtonVisible}
        setImages={setImages}
      />
    </div>
  );
}

export default Home;
