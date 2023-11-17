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
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../redux/actions";

const TopBar = ({ onSearch, profilo }) => {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const goToProfile = () => {
    navigate("/me");
  };
  const handleCarmenClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWRkZGM1NWU3ZTAwMThmODNjMGQiLCJpYXQiOjE2OTk4NjgxMjUsImV4cCI6MTcwMTA3NzcyNX0.Q-NbYUlmyj3HO-VFRlr9_xvz3dXqPbcdy_cLKqjLgWA"
      )
    );
  };
  const handleDomenicoClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmM5NWM1NWU3ZTAwMThmODNjMTUiLCJpYXQiOjE2OTk4NzE4OTMsImV4cCI6MTcwMTA4MTQ5M30.iH5N7eSSeP5nn4dz7CbBEeXtOoWJ0Nn4EAqW74IHIqo"
      )
    );
  };
  const handleGiovanniClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4"
      )
    );
  };
  const handleLauraClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU3NzMzMDI3NmVhNjAwMThmNTNiZGUiLCJpYXQiOjE3MDAyMjk5MzYsImV4cCI6MTcwMTQzOTUzNn0.JJ9tm1SgSSI5I3pdOlUZ8V61K6mPCNb9dEt4WxuscqU"
      )
    );
  };
  const handleMohamedClick = () => {
    dispatch(
      setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1MzQ1YjFlNDM0YzAwMTkzZTJiNzgiLCJpYXQiOjE3MDAwODI3ODAsImV4cCI6MTcwMTI5MjM4MH0.pSTz9AHxLWCkT2h5XdVEx1jsmEzLpEKjz3WaTl1wgtc"
      )
    );
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
              <NavLink to={"/"} className="nav-link">
                <div>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png"
                    alt="logo linkedin"
                    width={40}
                    height={40}
                  />
                </div>
              </NavLink>
              <Form onSubmit={handleClick} className="input-container">
                <InputGroup className="ms-2 ">
                  <InputGroup.Text onClick={handleClick}>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={`mobile-search-input ${showInput ? "expanded" : ""
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
                <NavLink to={"/"} className="nav-link">
                  <div className="d-flex flex-column text-center mx-4 ">
                    <i className="bi bi-house-door-fill fs-4"></i>
                    <span className="smalltext text-center d-none d-md-inline">
                      Home
                    </span>
                  </div>
                </NavLink>
                <NavLink to={"/network"} className="nav-link">
                  <div className="d-flex flex-column text-center mx-4">
                    <i className="bi bi-people-fill fs-4"></i>
                    <span className="smalltext text-center d-none d-md-inline">
                      Rete
                    </span>
                  </div>
                </NavLink>
                <NavLink to={"/jobs"} className="nav-link">
                  <div className="d-flex flex-column text-center mx-4">
                    <i className="bi bi-briefcase-fill fs-4"></i>
                    <span className="smalltext text-center d-none d-md-inline">
                      Lavoro
                    </span>
                  </div>
                </NavLink>
                <NavLink to={"/messages"} className="nav-link">
                  <div className="d-flex flex-column text-center mx-4">
                    <i className="bi bi-chat-left-dots-fill fs-4"></i>
                    <span className="smalltext text-center d-none d-md-inline">
                      Messaggi
                    </span>
                  </div>
                </NavLink>
                <NavLink to={"/"} className="nav-link">
                  <div className="d-flex flex-column text-center mx-4">
                    <i className="bi bi-bell-fill fs-4"></i>
                    <span className="smalltext text-center d-none d-md-inline">
                      Notifiche
                    </span>
                  </div>
                </NavLink>
                <div className="d-flex flex-column align-items-center mx-2">
                  <NavLink to={"/me"} className="nav-link">
                    <img
                      src={profilo.image}
                      alt="profile"
                      className="rounded-circle topbar-img-profile"
                    />
                  </NavLink>
                  <NavDropdown
                    align="end"
                    title="Me"
                    style={{ fontSize: "12px", lineHeight: "1" }}
                    id="basic-nav-dropdown"
                    className="d-none d-md-inline mb-1 nana"
                  >
                    <div className="d-flex flex-column align-items-center">
                      <h5 className="px-2">
                        {profilo.name} {profilo.surname}
                      </h5>
                      <p className="mb-0">{profilo.title}</p>
                      <Button
                        variant="primary"
                        className="mx-1 custom-button "
                        onClick={goToProfile}
                      >
                        Visualizza profilo
                      </Button>{" "}
                    </div>
                    <hr></hr>
                    <h5 className="px-3">Account</h5>
                    <p className="px-3">Prova Premium gratis</p>
                    <p className="px-3">Impostazioni e Privacy</p>
                    <p className="px-3">Aiuto</p>
                    <p className="px-3">Lingua</p>
                    <hr></hr>
                    <h5 className="px-3">Gestisci</h5>
                    <Link to="/" className="bbc">
                      <p
                        className="px-3 cursorPointerForAll"
                        onClick={handleCarmenClick}
                      >
                        Carmen
                      </p>
                    </Link>
                    <Link to="/" className="bbc">
                      <p
                        className="px-3 cursorPointerForAll"
                        onClick={handleDomenicoClick}
                      >
                        Domenico
                      </p>
                    </Link>
                    <Link to="/" className="bbc">
                      <p
                        className="px-3 cursorPointerForAll"
                        onClick={handleGiovanniClick}
                      >
                        Giovanni
                      </p>
                    </Link>
                    <Link to="/" className="bbc">
                      <p
                        className="px-3 cursorPointerForAll"
                        onClick={handleLauraClick}
                      >
                        Laura
                      </p>
                    </Link>
                    <Link to="/" className="bbc">
                      <p
                        className="px-3 cursorPointerForAll"
                        onClick={handleMohamedClick}
                      >
                        Mohamed
                      </p>
                    </Link>
                    <p className="px-3">Post e attività</p>
                    <p className="px-3 text-truncate">
                      Account per la pubblicazione di attività{" "}
                    </p>
                    <hr></hr>
                    <p className="px-3">Esci</p>
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
