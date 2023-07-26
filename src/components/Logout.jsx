import React from "react";

const Logout = ({ keycloak }) => {
  const handleClick = () => {
    keycloak.logout({ redirectUri: "http://localhost:3000/welcome" });
  };

  return <button onClick={() => handleClick()}>Cerrar Sesion</button>;
};

export default Logout;
