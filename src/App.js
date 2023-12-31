import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage";
import FakeProfile from "./components/FakeProfile";
import Jobs from "./components/Jobs";
import NetworkPage from "./components/NetworkPage";
import { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";

import FavouritePage from "./components/FavouritePage";
import Messaggistica from "./components/Messaggistica";
import { setAccessToken } from "./redux/actions";

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
  const accessToken = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch();
  const accesStart =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";

  console.log(
    "dopo il set",
    useSelector((state) => state.user.accessToken)
  );
  useEffect(() => {
    dispatch(setAccessToken(accessToken));
    Page();
  }, [accessToken]);

  useEffect(() => {
    dispatch(setAccessToken(accesStart));
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
        setProfilo(pa);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  return (
    <BrowserRouter>
      <TopBar onSearch={handleSearch} profilo={profilo} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home profilo={profilo} />} />
        <Route path="/jobs" element={<Jobs jobsData={jobsResult} />} />
        <Route path="/favourites" element={<FavouritePage />} />
        <Route
          path="/me"
          element={<ProfilePage profilo={profilo} Page={Page} />}
        />
        <Route path="/me/:id" element={<FakeProfile mioProfilo={profilo} />} />
        <Route path="/expEdit" element={<ProfilePage profilo={profilo} />} />
        <Route path="/attEdit" element={<ProfilePage profilo={profilo} />} />
        <Route path="/network" element={<NetworkPage profilo={profilo} />} />
        <Route path="/messages" element={<Messaggistica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
