import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Jobs from "./components/Jobs";
import { useState } from "react";

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

  return (
    <BrowserRouter>
      <TopBar onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/jobs" element={<Jobs jobsData={jobsResult} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
