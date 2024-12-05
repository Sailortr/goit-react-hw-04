import React, { useState } from "react";
import Modal from "react-modal";
import Loader from "./Loader";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Modal className="imageModal" isOpen={!!image} onRequestClose={onClose}>
      <button onClick={onClose}>Esc</button>

      {isLoading && <Loader />}

      {image && (
        <img
          src={image}
          alt="Modal Görsel"
          onLoad={handleImageLoad}
          style={isLoading ? { display: "none" } : {}}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
