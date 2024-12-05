import React from "react";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="imageCard">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image.urls.full)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
