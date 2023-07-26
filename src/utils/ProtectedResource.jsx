import React from "react";
import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedResource = ({ children, role }) => {
  const { authenticated, hasRole, login, logout } = useContext(AuthContext);

  if (!authenticated) {
    return (
      <Box>
        <p>No se encuentra autenticado actualmente. Inicie sesion para poder ver la pagina</p>
        <Button variant="contained" onClick={login}>
          Iniciar Sesion
        </Button>
      </Box>
    );
  }

  if (!hasRole(role)) {
    return (
      <Box>
        <p>No tiene los permisos suficientes para acceder a esta seccion.</p>
        <Button variant="contained" onClick={logout}>
          Cerrar Sesion
        </Button>
      </Box>
    );
  }

  return <div>{children}</div>;
};

export default ProtectedResource;
