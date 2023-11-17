import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { Button, Modal, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProvaEdit from "./ProvaEdit";
import { useSelector } from "react-redux";

const ShowProfilePost = ({ profilo, show, onHide }) => {
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const accessToken = useSelector((state) => state.user.accessToken);

  const [isRecent, setIsRecent] = useState(true);
  const [postData, setPostData] = useState([]);
  const [recentPostData, setRecentPostData] = useState([]);

  const location = useLocation();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",

          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nella richiesta GET");
      }

      const data = await response.json();
      setPostData(data);
      setRecentPostData(Array.from(data).reverse());
      console.log("io sono data", data);
    } catch (error) {
      console.error("Errore durante la richiesta GET:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(profilo);
  }, []);

  return (
    <>
      <div className="cursor d-flex ms-3 mb-4">
        <div className="ms-2">
          <Button
            className="text-white postBtnProfile cursorPointerForAll"
            variant="success"
          >
            Post
          </Button>
        </div>
        <div className="ms-2">
          <Button className="eheh cursorPointerForAll" variant="light">
            Commenti
          </Button>
        </div>
        <div className="ms-2">
          <Button className="eheh cursorPointerForAll" variant="light">
            Immagini
          </Button>
        </div>
      </div>

      <div className="container-fluid ms-3 pe-5">
        <div className="row">
          {profilo &&
            (recentPostData.filter((post) => post.username === profilo.username)
              .length > 0 ? (
              recentPostData
                .filter((post) => post.username === profilo.username)
                .slice(0, 4)
                .map((post, index) => (
                  <ProvaEdit
                    key={index}
                    post={post}
                    fetchData={fetchData}
                    profilo={profilo}
                  />
                ))
            ) : (
              <div className="col-12 mt-3">
                {location.pathname === "/me" ? (
                  <>
                    <strong>Non hai ancora pubblicato nulla.</strong>
                    <br />I post che condividi appariranno qui.
                  </>
                ) : (
                  <>
                    <strong>Non ci sono post da visualizzare.</strong>
                    <br />I post che {profilo.username} condividerà appariranno
                    qui.
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
      <Modal show={show} onHide={onHide} dialogClassName="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title className="ps-2">
            Tutte le attività di {profilo.username}
          </Modal.Title>
        </Modal.Header>
        {/* <p className="mb-0 border-bottom text-success ps-4 py-2 fw-bold">
          Della tua scuola o università
        </p> */}
        <div className="cursor d-flex ps-2 mb-0 border-bottom py-3 ">
          <div className="ms-2">
            <Button className="text-white postBtnProfile" variant="success">
              Post
            </Button>
          </div>
          <div className="ms-2">
            <Button className="eheh" variant="light">
              Commenti
            </Button>
          </div>
          <div className="ms-2">
            <Button className="eheh" variant="light">
              Immagini
            </Button>
          </div>
        </div>
        <Modal.Body>
          {profilo &&
            postData.map((post) => {
              if (post.user.username === profilo.username) {
                return (
                  <Row
                    className="justify-content-center grow-0 w-100"
                    key={post._id}
                  >
                    <SinglePost
                      postImage={post.image}
                      image={post.user.image}
                      username={post.username}
                      date1={post.createdAt}
                      text={post.text}
                      date2={post.updatedAt}
                      id={post._id}
                    />
                  </Row>
                );
              }
              return null;
            })}
          <Modal.Footer className="mt-2">
            <Button
              variant="primary"
              onClick={onHide}
              className="rounded-pill "
            >
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ShowProfilePost;
