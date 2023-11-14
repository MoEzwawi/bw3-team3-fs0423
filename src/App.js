import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
