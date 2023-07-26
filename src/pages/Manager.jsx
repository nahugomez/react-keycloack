import React from "react";
import useKeyCloak from "../hooks/useKeycloak";
import Logout from "../components/Logout";
import { Box } from "@mui/material";

const Manager = () => {
  const keycloak = useKeyCloak();
  return (
    <div>
      {keycloak && keycloak.hasResourceRole("manager") ? (
        <Box>
          <p>Estas autenticado y tenes rol de Manager</p>
          <Logout keycloak={keycloak} />
        </Box>
      ) : (
        <p>No estas autenticado, o no tenes los permisos necesarios. Redirigiendo a Keycloak para realizar autenticacion</p>
      )}
    </div>
  );
};

export default Manager;
