import { useEffect, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { Calendar3, CardImage, Clock, ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const AddNewPostProfile = ({ show, onHide, profilo, Page }) => {
  console.log(profilo);
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const accessToken = useSelector((state) => state.user.accessToken);
  const [post, setPost] = useState({
    text: "",
  });

  const [image, setImage] = useState(null);
  const [postId, setPostId] = useState(null);

  const handleInputChange = (property, value) => {
    setPost({
      ...post,
      [property]: value,
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Invio dell'esperienza");
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      body: JSON.stringify(post),
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
        console.log(data._id);
        setPostId(data._id);
        console.log("expId", postId);
      })

      .then(() => {
        // if (!image) {
        //   getExperiences();
        // }
        onHide();
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };

  const onImageUpload = async () => {
    console.log("dentro upload", postId);
    try {
      const formData = new FormData();
      formData.append("post", image);

      const apiUrl =
        "https://striveschool-api.herokuapp.com/api/posts/" + postId;

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
      Page();
      setImage(null);
    } catch (error) {
      console.error("Errore durante l'upload dell'immagine:", error);
    }
  };
  useEffect(() => {
    console.log("postId cambiato:", postId);
    if (postId && image) {
      onImageUpload();
    }
  }, [postId]);

  return (
    <Row className="justify-content-center mx-1">
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <div className="d-flex align-items-center gap-3 ms-2">
            <div>
              <img
                src={profilo.image}
                width="50px"
                height="50px"
                className="rounded-circle"
                alt="profile-img"
              />
            </div>
            <div>
              <Modal.Title className="fs-5">
                {profilo.name} {profilo.surname}
              </Modal.Title>
              <p className="mb-0">Pubblica: Chiunque</p>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                className="border-0 fs-5"
                rows={10}
                placeholder="Di cosa vorresti parlare?"
                onChange={(e) => handleInputChange("text", e.target.value)}
              />
            </Form.Group>

            <div className="d-flex gap-2 fs-4">
              <div
                className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                <Form.Group className="mb-3" style={{ position: "relative" }}>
                  <CardImage
                    style={{
                      position: "absolute",
                      top: "31%",
                      left: "20%",
                      fontSize: "1.2em",
                    }}
                  />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ opacity: "0" }}
                  />
                </Form.Group>
              </div>
              <div
                className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                <Calendar3 />
              </div>
              <div
                className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}
              >
                <ThreeDots />
              </div>
            </div>

            <Modal.Footer>
              <Clock className="fw-bold fs-5 me-3" />
              <Button
                type="submit"
                variant="primary"
                className="rounded-pill py-1"
                onClick={onHide}
              >
                Pubblica
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default AddNewPostProfile;
