import { Button, Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

const AttivitàProfilo = () => {
  const location = useLocation();
  return (
    <Col className=" border border-1 border-secondary-subtle rounded rounded-2 bg-white mb-3 px-0">
      <div className="container-fluid px-4 pt-4">
        <div className="container-fluid d-flex align-items-center mb-3">
          <div className="col mt-1 me-auto">
            <h4 className="h3Exp">Attività</h4>
          </div>
          <div className=" cursorPointerForAll">
            {location.pathname === "/me" ? (
              <Button className="btnProf me-3" variant="light">
                Crea un post
              </Button>
            ) : null}
          </div>
          <div className=" cursorPointerForAll">
            {location.pathname === "/me" ? <Pencil size={20} /> : null}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-column ps-4">
          <div className="d-flex mb-3"></div>
        </div>
      </div>
      <div className="py-2 show-all-btn cursorPointerForAll text-center border-top">
        Mostra tutte le attività
      </div>
    </Col>
  );
};
export default AttivitàProfilo;
