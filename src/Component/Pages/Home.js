import React, { useState } from "react";
import ImageItem from "../ImageItem";

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

  const handleImageSelect = (image) => {
    if (selectedImages.includes(image.id)) {
      setSelectedImages(selectedImages.filter((id) => id !== image.id));
    } else {
      setSelectedImages([...selectedImages, image.id]);
    }
  };

  const handleReorder = (dragIndex, hoverIndex) => {
    // Implement logic for reordering images
  };

  const handleDelete = () => {
    const updatedImages = images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
    setIsDeleteButtonVisible(false);
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      // Assuming you want to add the uploaded image to your images state
      const newImage = {
        id: images.length + 1,
        url: URL.createObjectURL(file), // Create a URL for the uploaded image
        isFeatured: true,
      };

      setImages([...images, newImage]);
    }
  };

  return (
    <div>
      <div className="border-b-2 mb-8 md:flex">
        <nav>
          <h1 className="my-8 ms-8 font-semibold text-3xl">
            {selectedImages.length > 0
              ? `${selectedImages.length} Files Selected`
              : "Gallery"}
          </h1>
          {selectedImages.length > 0 && (
            <button
              className="md:absolute top-8 right-8 text-red-500 text-2xl ms-8"
              onClick={handleDelete}
            >
              Delete File
            </button>
          )}
        </nav>
      </div>

      <div className="gallery md:grid grid-rows-3 grid-flow-col gap-4 mx-8">
        {images.map((image, index) => (
          <ImageItem
            key={image.id}
            image={image}
            isSelected={selectedImages.includes(image.id)}
            onImageSelect={handleImageSelect}
            onReorder={handleReorder}
            setIsDeleteButtonVisible={setIsDeleteButtonVisible}
          />
        ))}
        <label className="md:flex flex-col items-center justify-center border-4 border-dashed h-48">
          <input
            type="file"
            accept="image/*"
            onChange={handleUploadImage}
            className="hidden"
          />
          <span className="text-gray-600 text-2xl">
            <i className="fas fa-image text-4xl mb-2"></i>
            Add Img
          </span>
        </label>
      </div>
    </div>
  );
}

export default Home;
