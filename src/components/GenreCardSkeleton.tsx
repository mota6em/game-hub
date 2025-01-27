import React from "react";

const GenreCardSkeleton = () => {
  return (
    <div className="d-flex py-2">
      <div className="genre-skeleton-img"></div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="genre-skeleton-name mx-2 m-0"></div>
      </div>
    </div>
  );
};

export default GenreCardSkeleton;
