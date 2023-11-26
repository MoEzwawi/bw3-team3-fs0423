import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import { useSelector } from "react-redux";

const Messaggistica = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <Container
      fluid
      className={`sticky-bottom chat-box d-none ${
        isLoading ? "" : " d-lg-inline-block "
      }`}
    >
      <Row
        className={`d-flex justify-content-end  bg-white ms-5 rounded flex-column chat-container ${
          show ? `chat-on` : `chat-off`
        }`}
      >
        <Col className="d-flex align-items-center justify-content-between ">
          <div className="d-flex py-3" onClick={handleShow}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
              alt="logo"
              style={{ width: "15%" }}
            />
            <p className="m-0 fw-bold">Messaggistica</p>
          </div>
          <div className="fs-5 d-flex">
            <i className="bi bi-three-dots"></i>
            <i className="bi bi-pencil-square mx-2"></i>
            <i
              className={`bi bi-chevron-compact-${show ? `down` : `up`}`}
              onClick={handleClose}
            ></i>
          </div>
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="&#xF002;"
            className="chat-input"
         
          />
        </Col>
        <Col className="d-flex single-chat align-items-center border">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
              alt="logo"
              style={{ width: "80%" }}
            />
          </div>
          <div className="mt-3">
            <h6 className="fw-bold m-0">Laura Gallace</h6>
            <p>Ciaoo</p>
          </div>
        </Col>
        <Col className="d-flex single-chat align-items-center border">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
              alt="logo"
              style={{ width: "80%" }}
            />
          </div>
          <div className="mt-3">
            <h6 className="fw-bold m-0">Mohamed Ezwawi</h6>
            <p>Belin</p>
          </div>
        </Col>
        <Col className="d-flex single-chat align-items-center border">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
              alt="logo"
              style={{ width: "80%" }}
            />
          </div>
          <div className="mt-3">
            <h6 className="fw-bold m-0">Carmen Caniglia</h6>
            <p>Giustooo</p>
          </div>
        </Col>
        <Col className=" d-flex single-chat align-items-center border">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
              alt="logo"
              style={{ width: "80%" }}
            />
          </div>
          <div className="mt-3">
            <h6 className="fw-bold m-0">Giovanni Longo</h6>
            <p>Bellooo</p>
          </div>
        </Col>
        <Col className=" d-flex single-chat align-items-center border">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
              alt="logo"
              style={{ width: "80%" }}
            />
          </div>
          <div className="mt-3">
            <h6 className="fw-bold m-0">Domenico Schipelliti</h6>
            <p>Beneee</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Messaggistica;