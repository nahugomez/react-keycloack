import React from "react";
import useKeyCloak from "../hooks/useKeycloak";

const UserDetails = () => {
  const keycloak = useKeyCloak();
  return (
    <div>
      {keycloak && keycloak.hasResourceRole("user") ? (
        <p>Estas autenticado y tenes rol de Usuario</p>
      ) : (
        <p>No estas autenticado, o no tenes los permisos necesarios. Redirigiendo a Keycloak para realizar autenticacion</p>
      )}
    </div>
  );
};

export default UserDetails;
