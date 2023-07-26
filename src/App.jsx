import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { CssBaseline, Container, Box } from "@mui/material";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Public from "./pages/Public";
import UserDetails from "./pages/UserDetails";
import Manager from "./pages/Manager";
import ProtectedResource from "./utils/ProtectedResource";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box width={"100%"} sx={{ backgroundColor: "#333", color: "#FFF" }}>
        <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>KeyReact</p>
          <Box>
            <Link to={"/welcome"} style={{ marginRight: "1rem", color: "#FFF" }}>
              Welcome
            </Link>
            <Link to={"/public"} style={{ marginRight: "1rem", color: "#FFF" }}>
              Public
            </Link>
            <Link to={"/manager"} style={{ marginRight: "1rem", color: "#FFF" }}>
              Managment
            </Link>
            <Link to={"/user-details"} style={{ marginRight: "1rem", color: "#FFF" }}>
              User
            </Link>
          </Box>
        </Container>
      </Box>
      <Container sx={{ marginY: "2rem" }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/public" element={<Public />} />
          <Route
            path="/manager"
            element={
              <ProtectedResource role={"manager"}>
                <Manager />
              </ProtectedResource>
            }
          />
          <Route
            path="/user-details"
            element={
              <ProtectedResource role={"user"}>
                <UserDetails />
              </ProtectedResource>
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
