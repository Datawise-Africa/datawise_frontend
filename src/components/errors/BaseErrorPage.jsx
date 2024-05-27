import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function BaseErrorPage() {
  const error = useRouteError();
  console.log({ error });

  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen flex items-center justify-center flex-col">
      <div className="p-2 flex flex-col text-lg">
        <h1>
          <FontAwesomeIcon icon={faBell} size="10x" className="text-red-300" />
        </h1>
      </div>
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>
        Something went wrong. Please try again later or contact the support.
        {/* <br /> */}
        {/* {error.message} */}
        <br />
        <Link to="/" className="text-blue-500 block text-center capitalize">
          Go Home
        </Link>
      </p>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}