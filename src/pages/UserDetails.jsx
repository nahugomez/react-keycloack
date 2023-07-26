import React from "react";
import useKeyCloak from "../hooks/useKeycloak";
import { Box } from "@mui/material";
import Logout from "../components/Logout";

const UserDetails = () => {
  const keycloak = useKeyCloak();
  return (
    <div>
      {keycloak && keycloak.hasResourceRole("user") ? (
        <Box>
          <p>Estas autenticado y tenes rol de Usuario</p>
          <Logout keycloak={keycloak} />
        </Box>
      ) : (
        <p>No estas autenticado, o no tenes los permisos necesarios. Redirigiendo a Keycloak para realizar autenticacion</p>
      )}
    </div>
  );
};

export default UserDetails;
