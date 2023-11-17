import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import ButtonDelete from "./ButtonDelete";
import { useSelector } from "react-redux";

const ModalEdit = ({ show, onHide, exp, getExperiences }) => {
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const accessToken = useSelector((state) => state.user.accessToken);

  const [isJobOngoing, setIsJobOngoing] = useState(false);
  const [experience, setExperience] = useState({
    role: exp.role,
    company: exp.company,
    startDate: format(parseISO(exp.startDate), "yyyy-MM-dd"),
    endDate: exp.endDate ? format(new Date(exp.endDate), "yyyy-MM-dd") : null,
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

  const handleCheckboxChange = () => {
    setIsJobOngoing(!isJobOngoing);
    if (!isJobOngoing) {
      setExperience({
        ...experience,
        endDate: null,
      });
    }
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
          Authorization: "Bearer " + accessToken,
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
        // setExperience({
        //   role: "",
        //   company: "",
        //   startDate: "",
        //   endDate: null,
        //   description: "",
        //   area: "",
        // });
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
          Authorization: "Bearer " + accessToken,
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
    const isEndDateValid = exp.endDate
      ? !isNaN(new Date(exp.endDate).getTime())
      : false;
    if (!isEndDateValid) {
      setIsJobOngoing(true);
    }
  }, [expId, exp]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica esperienza</Modal.Title>
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
            <Form.Check
              type="checkbox"
              label="Lavoro ancora in corso"
              checked={isJobOngoing}
              onChange={handleCheckboxChange}
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
              onChange={(e) =>
                isJobOngoing
                  ? handleInputChange("endDate", null)
                  : handleInputChange("endDate", e.target.value)
              }
              disabled={isJobOngoing}
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
                onHide={onHide}
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
