import React from "react";
import useKeyCloak from "../hooks/useKeycloak";

const Manager = () => {
  const keycloak = useKeyCloak();
  return (
    <div>
      {keycloak && keycloak.hasResourceRole("manager") ? (
        <p>Estas autenticado y tenes rol de Manager</p>
      ) : (
        <p>No estas autenticado, o no tenes los permisos necesarios. Redirigiendo a Keycloak para realizar autenticacion</p>
      )}
    </div>
  );
};

export default Manager;
