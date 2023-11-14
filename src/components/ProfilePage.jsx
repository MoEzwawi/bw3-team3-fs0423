import FriendsList from "./FriendsList";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Profile from "./Profile";

const ProfilePage = () => {
  return (
    <Container className="my-4">
      <Row className="g-1 justify-content-evenly">
        <Profile />

        <FriendsList />
      </Row>
      <Footer />
    </Container>
  );
};

export default ProfilePage;
