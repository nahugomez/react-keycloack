import React from "react";
import { useContext } from "react";
import { Box, Button } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const UserDetails = () => {
  const { logout } = useContext(AuthContext);

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
