const GameCardSkeleton = () => {
  return (
    <>
      <div className="skeleton-image"></div>
      <div className="card-body overflow-hidden">
        <div className="skeleton-title mb-3"></div>
        <div className="d-flex row pe-1">
          <div className="skeleton-platform me-3"></div>
          <div className="skeleton-score"></div>
        </div>
      </div>
    </>
  );
};

export default GameCardSkeleton;
