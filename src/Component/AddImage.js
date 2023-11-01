import React from "react";

function AddImage({ handleUploadImage }) {
  return (
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
  );
}

export default AddImage;
