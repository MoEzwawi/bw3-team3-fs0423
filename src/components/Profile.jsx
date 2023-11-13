import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Profile = () => {
  const [profilo, setProfilo] = useState({});

  useEffect(() => {
    Page();
  }, []);

  const Page = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmM5NWM1NWU3ZTAwMThmODNjMTUiLCJpYXQiOjE2OTk4NzE4OTMsImV4cCI6MTcwMTA4MTQ5M30.iH5N7eSSeP5nn4dz7CbBEeXtOoWJ0Nn4EAqW74IHIqo",
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
    <Container style={{ display: "flex" }}>
      <Row
        style={{
          display: "flex",
          height: "318px",

          width: "1300px",
        }}
      >
        <Col>
          <Card>
            <Card.Img
              style={{ width: "20rem" }}
              variant="top"
              src="https://fotografiaartistica.it/wp-content/uploads/2019/06/nasa-immagini-gratuite-dello-spazio.jpg"
            />
            <Card.Body>
              <Card.Img
                style={{ width: "10rem", borderRadius: "190px" }}
                variant="top"
                src={profilo.image}
              />
              <Card.Body>
                <Card.Title>
                  {profilo.name} {profilo.surname}{" "}
                </Card.Title>
                <Card.Title>Professione:</Card.Title>
                <Card.Header>{profilo.title}</Card.Header>
                <Card.Title>Email:</Card.Title>
                <Card.Header>{profilo.email}</Card.Header>
                <Card.Title>Bio:</Card.Title>
                <Card.Header>{profilo.bio}</Card.Header>
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
