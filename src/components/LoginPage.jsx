import { Card, Form, Button } from "react-bootstrap";

const LoginPage = () => {
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo Username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
