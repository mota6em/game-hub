import React from "react";
import usePlatforms from "../hooks/usePlatforms";

const PlattformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <div className="row d-flex align-item-start w-100 ms-5">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Platforms
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {data.map((platform) => (
            <li className="dropdown-item btn" key={platform.id}>
              {platform.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlattformSelector;
