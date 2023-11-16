import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Jobs from "./components/Jobs";

import { useEffect, useState } from "react";
import FakeProfile from "./components/FakeProfile";
import Comment from "./components/Comment";

function App() {
  const [jobsResult, setJobsResult] = useState([]);
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch(baseEndpoint + searchQuery + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobsResult(data.slice(0, 10));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [profilo, setProfilo] = useState({});
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1MzQ1YjFlNDM0YzAwMTkzZTJiNzgiLCJpYXQiOjE3MDAwODI3ODAsImV4cCI6MTcwMTI5MjM4MH0.pSTz9AHxLWCkT2h5XdVEx1jsmEzLpEKjz3WaTl1wgtc";

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
      <TopBar onSearch={handleSearch} />
      <Comment />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs jobsData={jobsResult} />} />

        <Route
          path="/me"
          element={<ProfilePage profilo={profilo} Page={Page} />}
        />
        <Route path="/me/:id" element={<FakeProfile />} />
        <Route path="/expEdit" element={<ProfilePage profilo={profilo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
