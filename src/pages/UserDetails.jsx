import React from "react";
import { useContext } from "react";
import { Box, Button } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const UserDetails = () => {
  const { authenticated, hasRole, logout, login } = useContext(AuthContext);

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

  if (!hasRole("user")) {
    return (
      <Box>
        <p>No tiene los permisos suficientes para acceder a esta seccion.</p>
        <Button variant="contained" onClick={logout}>
          Cerrar Sesion
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <p>Autenticado Correctamente, y tiene los permisos necesarios</p>
      <Button variant="contained" onClick={logout}>
        Cerrar Sesion
      </Button>
      <p>Bienvenido a la pagina de Usuario.</p>
      <p>Acá iría la información confidencial</p>
    </Box>
  );
};

export default UserDetails;
