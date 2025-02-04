import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../assets/ts/types";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlattformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );
  return (
    <div className="dropdown me-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedPlatformId ? selectedPlatform?.name : "Platforms"}
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {data?.results.map((platform) => (
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
  );
};

export default PlattformSelector;
