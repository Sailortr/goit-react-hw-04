import React from "react";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="imageCard" onClick={() => onImageClick(image.urls.full)}>
      <img src={image.urls.thumb} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
