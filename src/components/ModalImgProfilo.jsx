import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const ModalImgProfilo = ({ show, onHide, userID, Page }) => {
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const accessToken = useSelector((state) => state.user.accessToken);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleFormSubmit = async (e) => {
    console.log("dentro upload", image);
    try {
      // e.preventDefault();
      const formData = new FormData();
      formData.append("profile", image);

      const apiUrl =
        "https://striveschool-api.herokuapp.com/api/profile/" +
        userID +
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
      // Page();
      setImage(null);
    } catch (error) {
      console.error("Errore durante l'upload dell'immagine:", error);
    }
  };
  useEffect(() => {
    if (image) {
      handleFormSubmit();
    }
  }, [image, accessToken]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi la tua foto profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Immagine</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
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
export default ModalImgProfilo;
