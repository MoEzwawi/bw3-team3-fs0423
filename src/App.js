import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid className="px-0 ">
      <TopBar />
      <Footer />
    </Container>
  );
}

export default App;
