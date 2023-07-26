import React, { createContext, useState, useEffect } from "react";
import Keycloak from "keycloak-js";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  // Estado para almacenar la información de autenticación y autorización
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Configuración de Keycloak
  useEffect(() => {
    const keycloakInstance = new Keycloak("/keycloak.json");
    keycloakInstance
      .init({ onLoad: "check-sso" })
      .then((authenticated) => {
        setKeycloak(keycloakInstance);
        setAuthenticated(authenticated);
        if (authenticated) {
          setUser(keycloakInstance.tokenParsed);
        }
      })
      .catch((error) => console.error("Error initializing Keycloak: ", error));
  }, []);

  // Funciones para iniciar y cerrar sesión
  const login = () => keycloak && keycloak.login();
  const logout = () => keycloak && keycloak.logout({ redirectUri: "http://localhost:3000/welcome" });

  // Verificación de roles y permisos
  const hasRole = (role) => keycloak && keycloak.hasResourceRole(role);

  // Renderizamos el contexto con los valores y funciones relevantes
  return (
    <Provider
      value={{
        authenticated,
        user,
        login,
        logout,
        hasRole,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
