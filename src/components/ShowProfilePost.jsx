import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ShowProfilePost = ({ profilo }) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
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
    <Row>
      <Col xs={12} md={10} lg={12} className="p-0">
        <div className="cursor d-flex">
          <div className="ms-2">
            <Button className="btnProf" variant="light">
              {location.pathname === "/me"
                ? "Aggiungi sezione del profilo"
                : "Messaggio"}
            </Button>
          </div>
          <div className="ms-2">
            <Button className="btnProf" variant="light">
              {location.pathname === "/me"
                ? "Aggiungi sezione del profilo"
                : "Messaggio"}
            </Button>
          </div>
          <div className="ms-2">
            <Button className="btnProf" variant="light">
              {location.pathname === "/me"
                ? "Aggiungi sezione del profilo"
                : "Messaggio"}
            </Button>
          </div>
          {/* Seleziona la visualizzazione dei feed:
                  <Dropdown className="d-inline">
                    <Dropdown.Toggle
                      className="ps-0"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "black",
                      }}
                    >
                      {isRecent ? (
                        <strong className="ms-1">Più recenti per primi</strong>
                      ) : (
                        <strong className="ms-1">Meno recenti per primi</strong>
                      )}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          setIsRecent(true);
                        }}
                      >
                        Più recenti per primi
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setIsRecent(false);
                        }}
                      >
                        Meno recenti per primi
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
        </div>

        {/* {!isRecent &&
            profilo &&
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
          {isRecent &&
            profilo &&
            recentPostData.map((post) => {
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
            })} */}
      </Col>
    </Row>
  );
};
export default ShowProfilePost;
