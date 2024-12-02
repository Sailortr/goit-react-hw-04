import React, { useState } from "react";
import { toast } from "react-hot-toast";

const SearchBar = ({ fetchImages }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Lütfen bir arama terimi girin.");
      return;
    }
    fetchImages(query);
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        className="searchInput"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Resim arayın..."
      />
      <button className="searchButton" type="submit">
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
