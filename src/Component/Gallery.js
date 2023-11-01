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
  };

  const handleImageReorder = (draggedImageId, targetImageId) => {
    const updatedImages = [...images];
    const draggedIndex = updatedImages.findIndex(
      (image) => image.id === +draggedImageId
    );
    const targetIndex = updatedImages.findIndex(
      (image) => image.id === +targetImageId
    );

    if (draggedIndex !== -1 && targetIndex !== -1) {
      const [draggedImage] = updatedImages.splice(draggedIndex, 1);
      updatedImages.splice(targetIndex, 0, draggedImage);

      setImages(updatedImages);
    }
  };

  return (
    <div className="md:grid grid-cols-5 gap-4 md:mx-8">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`${
            index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
          }`}
        >
          <ImageItem
            image={image}
            isSelected={selectedImages.includes(image.id)}
            onImageSelect={handleImageSelect}
            onReorder={handleImageReorder}
            setIsDeleteButtonVisible={setIsDeleteButtonVisible}
            index={index}
          />
        </div>
      ))}
      <AddImage handleUploadImage={handleUploadImage} />
    </div>
  );
}

export default Gallery;
