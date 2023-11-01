import React from "react";
import ImageItem from "./ImageItem";
import AddImage from "./AddImage";

function Gallery({
  images,
  selectedImages,
  handleImageSelect,
  handleReorder,
  setIsDeleteButtonVisible,
  setImages,
}) {
  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        url: URL.createObjectURL(file),
        isFeatured: true,
      };
      setImages([...images, newImage]);
    }
  }

  return (
    <div className="gallery md:grid grid-cols-4 gap-4 mx-8">
      {images.map((image, index) => (
        <ImageItem
          key={image.id}
          image={image}
          isSelected={selectedImages.includes(image.id)}
          onImageSelect={handleImageSelect}
          onReorder={handleReorder}
          setIsDeleteButtonVisible={setIsDeleteButtonVisible}
          className={index === 0 ? "row-span-2 col-span-1" : "col-span-1"}
        />
      ))}

      <AddImage handleUploadImage={handleUploadImage} />
    </div>
  );
}

export default Gallery;