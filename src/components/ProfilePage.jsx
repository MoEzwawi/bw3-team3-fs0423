import FakeProfile from "./FakeProfile";
import FriendsList from "./FriendsList";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";


const ProfilePage = () => {
    return (
        <Container className="my-4">
            <Row className="g-1 justify-content-evenly">
                <FakeProfile />
                <FriendsList />
            </Row>
            <Footer />
        </Container>
    )
}

export default ProfilePage