import logo from "./assets/imgs/logo.jpg";
import "../src/App.css";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-black py-1 x-0 d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={logo}
              className="rounded float-start logo-img"
              alt="logo"
            />
            <p className="m-0 text-white px-1">Game Hub</p>
          </div>
          <div className="input-group py-1 search-input">
            <input
              type="text"
              placeholder="Serach for a game by its name"
              aria-label="Search for a game by its name"
              aria-describedby="button-addon1"
              className="bg-body form-control h-100 rounded-start"
            />
            <div className="d-flex align-items-center bg-black text-white justify-content-center btn btn-outline-light">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="d-flex flex-nowrap justify-content-center btn px-1 px-md-3 align-items-center text-white">
            <i className="fa-solid fa-sun fs-5 "></i>
            {/* <p className="d-none d-md-block m-0 px-1">Light Mod</p> */}
          </div>
        </div>
      </div>
      <div className="row min-vh-100">
        <div className="d-none d-md-block col-md-3 bg-warning ">aside</div>
        <div className="col-12 col-md-9 bg-dark text-white">main</div>
      </div>
    </div>
  );
}

export default App;
