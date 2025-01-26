const GameCardSkeleton = () => {
  return (
    <div
      className={
        "card col-12 col-md-2 col-lg-3 m-2 p-0 game-card h-fit-content bg-dark text-white"
      }
    >
      <div className="skeleton-image"></div>
      <div className="card-body overflow-hidden">
        <div className="skeleton-title mb-3"></div>
        <div className="d-flex row pe-1">
          <div className="skeleton-platform me-3"></div>
          <div className="skeleton-score"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
