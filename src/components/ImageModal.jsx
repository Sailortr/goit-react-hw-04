import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal className="imageModal" isOpen={!!image} onRequestClose={onClose}>
      <button onClick={onClose}>Kapat</button>
      <img src={image} alt="Modal Görsel" />
    </Modal>
  );
};

export default ImageModal;
