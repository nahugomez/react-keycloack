import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";

function useKeyCloak() {
  const [keycloak, setKeycloak] = useState(null);

  useEffect(() => {
    let initSetting = {
      onLoad: "login-required",
    };
    let keycloak = new Keycloak("/keycloak.json");

    console.log("Before init - Authenticated: ", keycloak.authenticated);

    keycloak.init(initSetting).then((authenticated) => {
      console.log("Init - Authenticated");
      setKeycloak(keycloak);
    });

    console.log("After init - Authenticated: ", keycloak.authenticated);
  }, []);

  return keycloak;
}

export default useKeyCloak;
