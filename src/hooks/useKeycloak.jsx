import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";

function useKeyCloak() {
  const [keycloak, setKeycloak] = useState(null);

  useEffect(() => {
    const initializeKeycloak = async () => {
      try {
        const keycloakInstance = new Keycloak("/keycloak.json");
        const authenticated = await keycloakInstance.init({ onLoad: "login-required" });
        console.log("Init - Authenticated: ", authenticated);
        setKeycloak(keycloakInstance);
      } catch (error) {
        console.error("Error initializing Keycloak: ", error);
      }
    };

    initializeKeycloak();
  }, []); // The empty array [] ensures this effect runs only once, on mount

  return keycloak;
}

export default useKeyCloak;
