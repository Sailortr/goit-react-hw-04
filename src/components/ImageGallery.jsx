import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="imageGallery">
      {images.map((image) => (
        <ImageCard
          className="imageCard"
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
