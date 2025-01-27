import React from "react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../assets/ts/types";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlattformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
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
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {data.map((platform) => (
            <li
              onClick={() => onSelectPlatform(platform)}
              className="dropdown-item btn"
              key={platform.id}
            >
              {platform.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlattformSelector;
