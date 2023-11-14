import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";
import Experience from "./Experience";
import FriendsList from "./FriendsList";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FakeProfile = () => {
  const [profilo, setProfilo] = useState();
  const params = useParams();
  const fetchNewPeople = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + params.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMzg2YWM1NWU3ZTAwMThmODNjOTciLCJpYXQiOjE2OTk4ODcyMTEsImV4cCI6MTcwMTA5NjgxMX0.F7YOFaKr5r_ooi9MtCQW3eMR0hwlquEveG5fT4LsotU",
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
