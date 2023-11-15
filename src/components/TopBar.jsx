import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopBar = ({ onSearch }) => {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleIconClick = () => {
    setShowInput(!showInput);
  };

  const handleClick = (e) => {
    handleIconClick();
    handleSearchSubmit(e);
  };

  return (
    <Container fluid className="px-0">
      <Row className="justify-content-center align-items-center mx-auto">
        <Col className="px-0">
          <Navbar
            expand="lg"
            className="bg-body-tertiary sticky-top px-2  w-100 shadow-sm py-0"
          >
            {/* icone navbar */}
            <div className="d-flex justify-content-center flex-grow-1 w-100 align-items-center">
              <div>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png"
                  alt="logo linkedin"
                  width={40}
                  height={40}
                />
              </div>
              <Form onSubmit={handleClick} className="input-container">
                <InputGroup className="ms-2 ">
                  <InputGroup.Text onClick={handleClick}>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={`mobile-search-input ${
                      showInput ? "expanded" : ""
                    }`}
                    value={query}
                    onChange={handleSearchChange}
                  />
                </InputGroup>
              </Form>
              <div
                className="d-flex align-items-center "
                style={{ lineHeight: "1.4" }}
              >
                <div className="d-flex flex-column text-center mx-4 ">
                  <i className="bi bi-house-door-fill fs-4"></i>
                  <span className="smalltext text-center d-none d-md-inline">
                    Home
                  </span>
                </div>
                <div className="d-flex flex-column text-center mx-4">
                  <i className="bi bi-people-fill fs-4"></i>
                  <span className="smalltext text-center d-none d-md-inline">
                    Network
                  </span>
                </div>
                <NavLink to={"/jobs"} className="nav-link">
                  <div className="d-flex flex-column text-center mx-4">
                    <i className="bi bi-briefcase-fill fs-4"></i>
                    <span className="smalltext text-center d-none d-md-inline">
                      Jobs
                    </span>
                  </div>
                </NavLink>
                <div className="d-flex flex-column text-center mx-4">
                  <i className="bi bi-chat-left-dots-fill fs-4"></i>
                  <span className="smalltext text-center d-none d-md-inline">
                    Messaging
                  </span>
                </div>
                <div className="d-flex flex-column text-center mx-4">
                  <i className="bi bi-bell-fill fs-4"></i>
                  <span className="smalltext text-center d-none d-md-inline">
                    Notification
                  </span>
                </div>

                <div className="d-flex flex-column align-items-center mx-2">
                  <img
                    src="data:image/png;base64,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"
                    alt="profile"
                    className="rounded-circle topbar-img-profile"
                  />
                  <NavDropdown
                    align="end"
                    title="Me"
                    style={{ fontSize: "12px", lineHeight: "1" }}
                    id="basic-nav-dropdown"
                    className="d-none d-md-inline mb-1"
                  >
                    <h5 className="px-2">Account</h5>
                    <NavDropdown.Item href="#action/3.4">
                      work{" "}
                    </NavDropdown.Item>
                    <Button variant="primary" className="mx-1 custom-button">
                      View profile
                    </Button>{" "}
                    <hr></hr>
                    <h5 className="px-3">Account</h5>
                    <p className="px-3">Try Premium free</p>
                    <p className="px-3">Setting and Privacy</p>
                    <p className="px-3">Help</p>
                    <p className="px-3">Language</p>
                    <hr></hr>
                    <h5 className="px-3">Gestisci</h5>
                    <p className="px-3">Post an activity</p>
                    <p className="px-3">Account </p>
                    <hr></hr>
                    <p className="px-3">Quit</p>
                  </NavDropdown>
                </div>
                <div className="align-self-center border-start ps-2 d-flex flex-column align-items-center d-md-inline text-center">
                  <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
                  <NavDropdown
                    align="end"
                    title="Per le aziende"
                    id="basic-nav-dropdown"
                    className="d-md-inline text-center d-none"
                    style={{ fontSize: "12px" }}
                  >
                    <NavDropdown.Item>Per le aziende</NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
