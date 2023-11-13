import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
    <Container>
      <Row className="ro">
        <Col md={6} className="bord">
          <div className="cont">
            <img
              src=" https://fotografiaartistica.it/wp-content/uploads/2019/06/nasa-immagini-gratuite-dello-spazio.jpg"
              alt="spazio sfondo"
            />
            <img className="pro" src={profilo.image} alt="profile-pic" />
          </div>

          <div className="ma">
            <h4>
              {profilo.name} {profilo.surname}
            </h4>
            <div>
              <h5>Mestiere:</h5>
              <p>{profilo.title}</p>
            </div>
            <div>
              <h5>Email:</h5>
              {profilo.email}
              <h5>Bio:</h5>
              {profilo.bio}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
