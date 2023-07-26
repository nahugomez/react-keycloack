import React from "react";
import { useContext } from "react";
import { Box, Button } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const Manager = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Box>
      <p>Autenticado Correctamente, y tiene los permisos necesarios</p>
      <Button variant="contained" onClick={logout}>
        Cerrar Sesion
      </Button>
    </Box>
  );
};

export default Manager;
