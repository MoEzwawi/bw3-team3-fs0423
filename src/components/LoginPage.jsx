import { Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToProfile = (e) => {
    e.preventDefault();
    switch (user) {
      case "Carmen":
        handleCarmenClick();
        break;
      case "Domenico":
        handleDomenicoClick();
        break;
      case "Giovanni":
        handleGiovanniClick();
        break;
      case "Laura":
        handleLauraClick();
        break;
      case "Mohamed":
        handleMohamedClick();
        break;
      default:
        alert("Utente non trovato");
    }
  };
  const handleCarmenClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWRkZGM1NWU3ZTAwMThmODNjMGQiLCJpYXQiOjE2OTk4NjgxMjUsImV4cCI6MTcwMTA3NzcyNX0.Q-NbYUlmyj3HO-VFRlr9_xvz3dXqPbcdy_cLKqjLgWA"
      )
    );
    navigate("/home");
  };
  const handleDomenicoClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmM5NWM1NWU3ZTAwMThmODNjMTUiLCJpYXQiOjE2OTk4NzE4OTMsImV4cCI6MTcwMTA4MTQ5M30.iH5N7eSSeP5nn4dz7CbBEeXtOoWJ0Nn4EAqW74IHIqo"
      )
    );
    navigate("/home");
  };
  const handleGiovanniClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4"
      )
    );
    navigate("/home");
  };
  const handleLauraClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU3NzMzMDI3NmVhNjAwMThmNTNiZGUiLCJpYXQiOjE3MDAyMjk5MzYsImV4cCI6MTcwMTQzOTUzNn0.JJ9tm1SgSSI5I3pdOlUZ8V61K6mPCNb9dEt4WxuscqU"
      )
    );
    navigate("/home");
  };
  const handleMohamedClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1MzQ1YjFlNDM0YzAwMTkzZTJiNzgiLCJpYXQiOjE3MDAwODI3ODAsImV4cCI6MTcwMTI5MjM4MH0.pSTz9AHxLWCkT2h5XdVEx1jsmEzLpEKjz3WaTl1wgtc"
      )
    );
    navigate("/home");
  };
  return (
    <div className="card-container d-flex justify-content-center align-items-center">
      <Card className="login-card">
        <Card.Body>
          <div className="d-flex justify-content-center mb-3">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png"
              alt="LinkedIn Logo"
              className="login-img"
            />
          </div>
          <Card.Title className="mb-4 fs-3">Accedi</Card.Title>
          <Form onSubmit={goToProfile}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo Username"
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Ricordami" />
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="primary"
                type="submit"
                className="custom-button py-2"
              >
                Accedi
              </Button>
              <span className="mx-2">o</span>
              <Button
                variant="primary"
                type="submit"
                className="custom-button py-2"
              >
                Registrati
              </Button>
            </div>
          </Form>
          <Card.Link href="#" className="d-block mt-5">
            Password dimenticata?
          </Card.Link>
          <Card.Link href="#" className="d-block mt-2 ms-0">
            Nuovo su LinkedIn? Iscriviti ora
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
