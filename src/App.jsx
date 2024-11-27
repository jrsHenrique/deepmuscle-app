import { useState, useMemo, useEffect } from "react";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./screens/Login";
import Register from "./screens/Signup";
import Navbar from "./screens/Home";
import TreinoDia from "./screens/Home/TreinoDia";
import Treinos from "./screens/Treinos/Treinos";
import ChatBox from "./screens/Chat/ChatBox";
import CadastroFit from "./screens/CadastroFit";
import { useClient } from "./utils/request";
import Axios from "axios";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const client = useClient();

  useMemo(() => {
    const request_authorization = localStorage.getItem("token");
    if (request_authorization) {
      Axios.defaults.headers.common = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${request_authorization}`,
      };
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!authenticated) return;
  }, [authenticated]);

  client.setDefaultOptions({
    queries: {
      onError: (e) => {
        if (e.response?.status === 401) logout(setAuthenticated);
        return e.response?.status;
      },
    },
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!authenticated && (
            <>
              <Route
                path="/"
                element={<Login setAuthenticated={setAuthenticated} />}
              />
              <Route
                path="/cadastro"
                element={<Register setAuthenticated={setAuthenticated} />}
              />
              <Route
                path="*"
                element={<Login setAuthenticated={setAuthenticated} />}
              />
            </>
          )}
          {authenticated && (
            <Route
              path="/"
              element={<Navbar setAuthenticated={setAuthenticated} />}
            >
              <Route path="home" index element={<TreinoDia />} />
              <Route path="treinos" element={<Treinos />} />
              <Route path="chat" element={<ChatBox />} />
              <Route path="CadastroFit" element={<CadastroFit />} />
              <Route path="*" element={<TreinoDia />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
