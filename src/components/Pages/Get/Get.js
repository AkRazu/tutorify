import React, { useContext } from "react";
import { AuthProvider } from "../../../Context/AuthContext";

const Get = () => {
  const {user}= useContext(AuthProvider);
  return (
    <div>
      <p>
        {user?.email}
      </p>
    </div>
  );
};

export default Get;
