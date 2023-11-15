import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalInfo = ({ show, onHide, profilo, Page }) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const [profile, setProfile] = useState({
    name: profilo.name,
    surname: profilo.surname,
    email: profilo.email,
    username: profilo.username,
    bio: profilo.bio,
    title: profilo.title,
    area: profilo.area,
  });
  const handleInputChange = (property, value) => {
    setProfile({
      ...profile,
      [property]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      body: JSON.stringify(profile),
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        // console.log(data._id);
        // setExpId(data._id);
        // console.log("expId", expId);
      })

      .then(() => {
        // setExperience({
        //   role: "",
        //   company: "",
        //   startDate: "",
        //   endDate: null,
        //   description: "",
        //   area: "",
        // });
        Page();
        onHide();
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi la tua foto profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={profile.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={onHide}>
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalInfo;
