function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-danger py-2 x-0">nav</div>
      </div>
      <div className="row min-vh-100">
        <div className="d-none d-md-block col-md-3 bg-warning ">aside</div>
        <div className="col-12 col-md-9 bg-dark text-white">main</div>
      </div>
    </div>
  );
}

export default App;
