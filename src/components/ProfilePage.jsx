import FriendsList from "./FriendsList";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Profile from "./Profile";
import Experience from "./Experience";
import { useLocation } from "react-router-dom";
import Informazioni from "./Informazioni";
import Risorse from "./Risorse";
import AttivitàProfilo from "./AttivitàProfilo";

const ProfilePage = ({ profilo, Page }) => {
  const location = useLocation();
  return (
    <Container className="my-4">
      <Row className="g-1 justify-content-evenly">
        <Col xs={12} md={7} lg={8}>
          <Row className="flex-column">
            {location.pathname === "/me" ? (
              <>
                {" "}
                {profilo && (
                  <>
                    <Profile profilo={profilo} Page={Page} />
                    <Risorse />
                    <AttivitàProfilo profilo={profilo} Page={Page} />
                    <Informazioni profilo={profilo} Page={Page} />
                    <Experience userID={profilo._id} />{" "}
                  </>
                )}
              </>
            ) : location.pathname === "/expEdit" ? (
              <>
                {profilo && (
                  <>
                    <Experience userID={profilo._id} />
                  </>
                )}
              </>
            ) : (
              <>
                {profilo && (
                  <>
                    <AttivitàProfilo profilo={profilo} Page={Page} />
                  </>
                )}
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

export default ProfilePage;
