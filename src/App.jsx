import React, { useState } from "react";
import { Toaster } from "react-hot-toast"; // React Hot Toast bileşenini içe aktar
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";
import "./module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (query, page = 1) => {
    setIsLoading(true);
    setError(null);

    try {
      const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${clientId}`
      );
      if (!response.ok) {
        throw new Error("İstek başarısız oldu.");
      }
      const data = await response.json();
      setImages((prev) => [...prev, ...data.results]);
    } catch (err) {
      console.error(err);
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Toast bildirimlerini etkinleştirir */}
      <Toaster />

      <SearchBar fetchImages={fetchImages} clearImages={() => setImages([])} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={setModalImage} />
          {isLoading && <Loader />}
          {images.length > 0 && (
            <LoadMoreBtn onLoadMore={() => fetchImages()} />
          )}
        </>
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
};

export default App;
