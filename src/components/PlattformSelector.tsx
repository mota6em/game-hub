import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlattformSelector = () => {
  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const setSelectedPlatformId = useGameQueryStore(
    (state) => state.setPlatformId
  );
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
            onClick={() => setSelectedPlatformId(platform.id)}
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
