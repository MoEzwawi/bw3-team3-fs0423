import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import SingleFriend from "./SingleFriend";
import { useLocation, useParams } from "react-router-dom";
import ModalShowFriend from "./ModalShowFriend";

const FriendsList = ({ profilo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";

  const location = useLocation();
  let params = useParams();
  useEffect(() => {
    console.log('I AM LOC PATHNAME', location.pathname)
  }, [location])

  const [newFriends, setNewFriends] = useState([]);

  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const fetchNewPeople = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setNewFriends(data);
      } else {
        throw new Error("error retrieving data");
      }
    } catch (error) {
      console.log("problem:", error);
    }
  };
  useEffect(() => {
    fetchNewPeople();
  }, []);
  useEffect(() => {
    console.log("array di amici", newFriends);
  }, [newFriends]);
  useEffect(() => {
    console.log("array di params", params.id);
  }, [params]);
  return (
    <>
      <Col xs={0} md={4} lg={3} className="d-none d-md-block">
        <div className="border border-1 border-secondary-subtle p-2 rounded rounded-2 bg-white mb-3 ">
          <Row className="justify-content-between px-2">
            <Col>
              <h6 style={{ whiteSpace: "nowrap" }}>Lingua del profilo</h6>
            </Col>
            <Col className="d-flex justify-content-end">
              <PencilFill className="cursor-pointer" />
            </Col>
          </Row>
          <div className="d-flex px-2 justify-content-center mt-1">
            <div className="ms-2">
              <Button className="eheh2 cursorPointerForAll" variant="light">
                Inglese
              </Button>
            </div>
            <div className="ms-2">
              <Button
                className="text-white postBtnProfile2 cursorPointerForAll"
                variant="success"
              >
                Italiano
              </Button>
            </div>
          </div>
          <hr className="mx-2" />
          <Row className="justify-content-between px-2">
            <Col>
              <h6>Public&nbsp;profile & URL</h6>
            </Col>
            <Col className="d-flex justify-content-end">
              <PencilFill className="cursor-pointer" />
            </Col>
          </Row>
          <Row className="px-2">
            <Col className="grigio">
              https://www.linkedin.com/in/ strive-school-09328705702570b/
            </Col>
          </Row>
        </div>
        {location.pathname !== "/expEdit" ? (
          <div className="  border border-1 border-secondary-subtle  rounded rounded-2 bg-white mb-3 ">
            <Row className="mt-3 mx-2">
              <Col>
                <p id="pcpc" className="mb-0">
                  Persone che potresti conoscere
                </p>
              </Col>
            </Row>
            <Row className=" mx-2">
              <Col className="grigio">Della tua scuola o università</Col>
            </Row>
            {location.pathname === "/me" ? (newFriends.length > 0 && profilo &&
              shuffleArray(newFriends)
                .slice(0, 5).filter(f => f._id !== profilo._id)
                .map((fr) => {
                  return (
                    <Row
                      key={fr._id}
                      className="justify-content-start my-2 mx-3"
                    >
                      <SingleFriend
                        image={fr.image}
                        name={fr.name}
                        surname={fr.surname}
                        title={fr.title}
                        id={fr._id}
                      />
                    </Row>
                  );
                })) : (newFriends.length > 0 && profilo &&
                  shuffleArray(newFriends)
                    .slice(0, 5).filter(f => f._id !== profilo._id).filter(f => f._id !== params.id)
                    .map((fr) => {
                      return (
                        <Row
                          key={fr._id}
                          className="justify-content-start my-2 mx-3"
                        >
                          <SingleFriend
                            image={fr.image}
                            name={fr.name}
                            surname={fr.surname}
                            title={fr.title}
                            id={fr._id}
                          />
                        </Row>
                      );
                    }))}
            <Col className="text-center border-top ">
              <div
                className="py-2 show-all-btn cursorPointerForAll"
                onClick={handleShow}
              >
                Mostra Tutto
              </div>
              <ModalShowFriend
                show={show}
                onHide={handleClose}
                newFriends={newFriends}
              />
            </Col>
          </div>
        ) : null}
      </Col>
    </>
  );
};

export default FriendsList;
