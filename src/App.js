import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";

import { useEffect, useState } from "react";
import FakeProfile from "./components/FakeProfile";

function App() {
  const [profilo, setProfilo] = useState({});

  useEffect(() => {
    Page();
  }, []);

  const Page = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmM5NWM1NWU3ZTAwMThmODNjMTUiLCJpYXQiOjE2OTk4NzE4OTMsImV4cCI6MTcwMTA4MTQ5M30.iH5N7eSSeP5nn4dz7CbBEeXtOoWJ0Nn4EAqW74IHIqo",
      },
    })
      .then((p) => {
        if (p.ok) {
          console.log("qui la get", p);
          return p.json();
        } else {
          console.log("errore nel profilo");
        }
      })
      .then((pa) => {
        console.log("ecco il risultato", pa);
        setProfilo(pa);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<ProfilePage profilo={profilo} />} />
        <Route path="/:id" element={<FakeProfile />} />
        <Route path="/expEdit" element={<ProfilePage profilo={profilo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
