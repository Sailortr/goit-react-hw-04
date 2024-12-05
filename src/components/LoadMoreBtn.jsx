import React from "react";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className="loadMoreBtn" onClick={onLoadMore}>
      Load More Photo
    </button>
  );
};

export default LoadMoreBtn;
