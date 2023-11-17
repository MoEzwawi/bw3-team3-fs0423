import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";
import Experience from "./Experience";
import FriendsList from "./FriendsList";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Informazioni from "./Informazioni";
import AttivitàProfilo from "./AttivitàProfilo";

const FakeProfile = () => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const [profilo, setProfilo] = useState();
  let params = useParams();
  const fetchNewPeople = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + params.id,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProfilo(data);
        console.log(data);
      } else {
        throw new Error("error retrieving data");
      }
    } catch (error) {
      console.log("problem:", error);
    }
  };
  useEffect(() => {
    fetchNewPeople();
  }, [params.id]);
  return (
    <Container className="my-4">
      <Row className="g-1 justify-content-evenly">
        <Col xs={12} md={7} lg={8}>
          <Row className="flex-column">
            {profilo && (
              <>
                <Profile profilo={profilo} />
                <Informazioni profilo={profilo} />
                <AttivitàProfilo profilo={profilo} />
                <Experience userID={profilo._id} />
              </>
            )}
          </Row>
        </Col>
        <FriendsList />
      </Row>
      <Footer />
    </Container>
  );
};

export default FakeProfile;
