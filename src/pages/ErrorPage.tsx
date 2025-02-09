 
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="p-5 mx-2 m-5">

      <h2>Ooops</h2>
      <p>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occurred."}
      </p>
          </div>
    </>
  );
};

export default ErrorPage;
