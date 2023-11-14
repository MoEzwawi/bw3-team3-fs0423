import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Experience from "./components/Experience";
import { useEffect, useState } from "react";
import ExperienceEdit from "./components/ExperienceEdit";

function App() {
  const [profilo, setProfilo] = useState();
  const getProfilo = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me ", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMDU1NGM1NWU3ZTAwMThmODNjMWYiLCJpYXQiOjE2OTk4NzQxMzIsImV4cCI6MTcwMTA4MzczMn0.8B_VumLLJt3uvILX9xMQhhU_nqIvlerlv0QbTDTwRtM",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        console.log(data);
        setProfilo(data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  useEffect(() => {
    if (!profilo) {
      getProfilo();
    }
  }, [profilo]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {profilo && (
            <Route path="/" element={<Experience userID={profilo._id} />} />
          )}
          {profilo && (
            <Route
              path="/expEdit"
              element={<ExperienceEdit userID={profilo._id} />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
