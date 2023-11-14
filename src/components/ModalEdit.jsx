import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import ButtonDelete from "./ButtonDelete";

const ModalEdit = ({ show, onHide, exp, getExperiences }) => {
  const [experience, setExperience] = useState({
    role: exp.role,
    company: exp.company,
    startDate: format(parseISO(exp.startDate), "yyyy-MM-dd"),
    endDate: format(parseISO(exp.endDate), "yyyy-MM-dd"),
    description: exp.description,
    area: exp.area,
  });
  const [image, setImage] = useState(null);
  const [expId, setExpId] = useState(null);

  const handleInputChange = (property, value) => {
    setExperience({
      ...experience,
      [property]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Ora inviamo la prenotazione!");
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        exp.user +
        "/experiences/" +
        exp._id,
      {
        method: "PUT",
        body: JSON.stringify(experience),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmM5NWM1NWU3ZTAwMThmODNjMTUiLCJpYXQiOjE2OTk4NzE4OTMsImV4cCI6MTcwMTA4MTQ5M30.iH5N7eSSeP5nn4dz7CbBEeXtOoWJ0Nn4EAqW74IHIqo",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        console.log(data._id);
        setExpId(data._id);
        console.log("expId", expId);
      })

      .then(() => {
        setExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
        if (!image) {
          getExperiences();
        }
        onHide();
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };

  const onImageUpload = async () => {
    console.log("dentro upload", expId);
    try {
      const formData = new FormData();
      formData.append("experience", image);

      const apiUrl =
        "https://striveschool-api.herokuapp.com/api/profile/" +
        exp.user +
        "/experiences/" +
        expId +
        "/picture";
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmM5NWM1NWU3ZTAwMThmODNjMTUiLCJpYXQiOjE2OTk4NzE4OTMsImV4cCI6MTcwMTA4MTQ5M30.iH5N7eSSeP5nn4dz7CbBEeXtOoWJ0Nn4EAqW74IHIqo",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Errore nell'upload dell'immagine! Status: ${response.status}`
        );
      }

      const imageData = await response.json();
      console.log("Immagine caricata con successo:", imageData);
      getExperiences();
      setImage(null);
    } catch (error) {
      console.error("Errore durante l'upload dell'immagine:", error);
    }
  };
  useEffect(() => {
    console.log("expId cambiato:", expId);
    if (expId && image) {
      onImageUpload();
    }
  }, [expId]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <p>* Indica che è obbligatorio</p>
          <Form.Group className="mb-3">
            <Form.Label>Qualifica*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Retail Sales Manager"
              value={experience.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Azienda*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Microsoft"
              value={experience.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data di Inizio*</Form.Label>
            <Form.Control
              type="date"
              value={experience.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data di Fine*</Form.Label>
            <Form.Control
              type="date"
              value={experience.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={experience.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Località*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Milano"
              value={experience.area}
              onChange={(e) => handleInputChange("area", e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Immagine</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Form.Group>
          <Modal.Footer className="d-flex flex-row justify-content-between">
            <div>
              <ButtonDelete
                userId={exp.user}
                expId={exp._id}
                getExperiences={getExperiences}
              ></ButtonDelete>
            </div>
            <div>
              <Button
                variant="primary"
                type="submit"
                onClick={onHide}
                className="rounded-pill"
              >
                Salva
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalEdit;
