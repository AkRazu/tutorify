import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-4xl font-semibold">Oh no!</h2>
          <p>
            We're usually a treasure chest of knowledge, but we could't find
            what you're looking for.
          </p>
          <Link to='/' className="btn">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
