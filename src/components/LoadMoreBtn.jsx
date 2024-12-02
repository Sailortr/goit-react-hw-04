import React from "react";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className="loadMoreBtn" onClick={onLoadMore}>
      Daha Fazla Yükle
    </button>
  );
};

export default LoadMoreBtn;
