import FriendsList from "./FriendsList";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Profile from "./Profile";
import Experience from "./Experience";
import { useLocation } from "react-router-dom";

const ProfilePage = ({ profilo }) => {
  const location = useLocation();
  return (
    <Container className="my-4">
      <Row className="g-1 justify-content-evenly">
        <Col xs={12} md={7} lg={8}>
          <Row className="flex-column">
            {location.pathname === "/" ? (
              <>
                {" "}
                {profilo && (
                  <>
                    <Profile profilo={profilo} />
                    <Experience userID={profilo._id} />{" "}
                  </>
                )}
              </>
            ) : (
              <>{profilo && <Experience userID={profilo._id} />}</>
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
