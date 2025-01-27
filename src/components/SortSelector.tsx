import React from "react";

const SortSelector = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order by: Relevance
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        <li className="dropdown-item btn">Name</li>
        <li className="dropdown-item btn">Date</li>
        <li className="dropdown-item btn">Rate</li>
      </ul>
    </div>
  );
};

export default SortSelector;
