import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

const ShowProfilePost = ({ profilo, setSelected }) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const [isRecent, setIsRecent] = useState(true);
  const [postData, setPostData] = useState([]);
  const [recentPostData, setRecentPostData] = useState([]);
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
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={10} lg={7} className="p-0">
          <Row className="justify-content-center w-100">
            <Col style={{ width: "90%" }} className="mt-2 mb-0 me-3">
              <div
                className="d-flex align-items-center justify-content-end"
                id="select-feed"
              >
                <hr />
                <div className="cursor">
                  Seleziona la visualizzazione dei feed:
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
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
          {!isRecent &&
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
                      onClick={setSelected(post._id)}
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
                      onClick={setSelected(post._id)}
                    />
                  </Row>
                );
              }
              return null;
            })}
        </Col>
      </Row>
    </Container>
  );
};
export default ShowProfilePost;
