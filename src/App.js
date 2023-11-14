import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* element={}  */}
        {/* <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
