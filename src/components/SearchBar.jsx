import React, { useState } from "react";
import { toast } from "react-hot-toast";

const SearchBar = ({ fetchImages, clearImages }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Lütfen bir arama terimi girin.");
      return;
    }
    fetchImages(query);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Eğer sorgu boşsa, resim listesini temizle
    if (!value.trim()) {
      clearImages();
    }
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        className="searchInput"
        type="text"
        value={query}
        onChange={handleInputChange} // Sorgu değişikliklerini yakalar
        placeholder="Resim arayın..."
      />
      <button className="searchButton" type="submit">
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
