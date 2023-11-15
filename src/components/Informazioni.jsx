import { useState } from "react";
import { Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import ModalInfo from "./ModalInfo";

const Informazioni = ({ profilo, Page }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  return (
    <Col className=" border border-1 border-secondary-subtle rounded rounded-2 bg-white mb-3">
      <div className="container-fluid pt-4">
        <div className="container-fluid d-flex align-items-center mb-3">
          <div className="col me-auto ">
            <h4 className="h3Exp">Informazioni</h4>
          </div>

          <div className="">
            {location.pathname === "/" ? (
              <Pencil size={20} onClick={handleShow} />
            ) : null}
            <ModalInfo
              show={show}
              onHide={handleClose}
              profilo={profilo}
              Page={Page}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <p className="ms-3">{profilo.bio}</p>
      </div>
    </Col>
  );
};
export default Informazioni;
