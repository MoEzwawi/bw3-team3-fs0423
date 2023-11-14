import './App.css';
import FakeNav from './components/FakeNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <>
      <FakeNav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
