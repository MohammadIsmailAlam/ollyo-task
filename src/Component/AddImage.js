import React from "react";
import { ImImage } from 'react-icons/im';


function AddImage({ handleUploadImage }) {
  return (
    <label className="md:flex flex-col items-center justify-center border-4 h-48">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden"
      />
      <span className="md:flex text-2xl">
      <ImImage /> Add Images
      </span>
    </label>
  );
}

export default AddImage;