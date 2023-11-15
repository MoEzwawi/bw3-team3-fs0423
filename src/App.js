import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";

import { useEffect, useState } from "react";
import FakeProfile from "./components/FakeProfile";

function App() {
  const [profilo, setProfilo] = useState({});
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";

  useEffect(() => {
    Page();
  }, []);

  const Page = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization: "Bearer " + accessToken,
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
        <Route
          path="/"
          element={<ProfilePage profilo={profilo} Page={Page} />}
        />
        <Route path="/:id" element={<FakeProfile />} />
        <Route path="/expEdit" element={<ProfilePage profilo={profilo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
