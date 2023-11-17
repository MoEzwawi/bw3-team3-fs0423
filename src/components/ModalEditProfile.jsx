import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalEditProfile = ({ show, onHide, profilo, Page }) => {
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
    <Modal show={show} onHide={onHide} dialogClassName="modal-lg">
      <Modal.Header closeButton>
        <Modal.Title>Modifica presentazione</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Form onSubmit={handleFormSubmit}>
          <p className="mb-0 border-bottom text-success ps-4 py-2 fw-bold">
            Italiano
          </p>
          <p className="mt-2 pmodalprof">* Indica che è obbligatorio</p>
          <h4>Informazioni di base</h4>
          <Form.Group className="mb-3">
            <Form.Label>Nome*</Form.Label>
            <Form.Control
              type="text"
              value={profile.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cognome*</Form.Label>
            <Form.Control
              type="text"
              value={profile.surname}
              onChange={(e) => handleInputChange("surname", e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username*</Form.Label>
            <Form.Control
              type="text"
              value={profile.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={profile.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Professione*</Form.Label>
            <Form.Control
              type="text"
              value={profile.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Zona*</Form.Label>
            <Form.Control
              type="text"
              value={profile.area}
              onChange={(e) => handleInputChange("area", e.target.value)}
              required
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              onClick={onHide}
              className="rounded-pill"
            >
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalEditProfile;
