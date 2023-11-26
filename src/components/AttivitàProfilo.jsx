import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Pencil } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import AddNewPostProfile from "./AddNewPostProfile";
import ShowProfilePost from "./ShowProfilePost";
import EditPostProfileModal from "./EditPostProfileModal";

const AttivitàProfilo = ({ profilo, Page }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  console.log("attività profilo,", profilo);
  const [selected, setSelected] = useState(null);
  console.log(selected);
  const location = useLocation();
  return (
    <Col className=" border border-1 border-secondary-subtle rounded rounded-2 bg-white mb-3 px-0">
      <div className="container-fluid px-4 pt-4">
        <div className="container-fluid d-flex align-items-center mb-3">
          <div className="col mt-1 me-auto">
            {location.pathname === "/attEdit" ? (
              <div className="d-flex align-items-center">
                <Link to="/me" className="text-decoration-none text-dark">
                  <ArrowLeft className="me-4" size={25}></ArrowLeft>
                </Link>
                <h4 className="h3Exp">Attività</h4>
              </div>
            ) : (
              <h4 className="h3Exp">Attività</h4>
            )}
          </div>
          <div className=" cursorPointerForAll">
            {location.pathname === "/me" || location.pathname === "/attEdit" ? (
              <Button
                className="btnProf me-3"
                variant="light"
                onClick={handleShow}
              >
                Crea un post
              </Button>
            ) : null}
          </div>

          <div className=" cursorPointerForAll">
            {location.pathname === "/me" ? (
              <Link to="/attEdit" className="text-decoration-none text-dark">
                <Pencil size={20} onClick={selected ? handleShow2 : null} />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-column mb-3">
          <ShowProfilePost
            profilo={profilo}
            show={show3}
            onHide={handleClose3}
            setSelected={setSelected}
          />
        </div>
      </div>
      <div
        className="py-3 show-all-btn cursorPointerForAll text-center border-top"
        onClick={handleShow3}
      >
        Mostra tutte le attività <ArrowRight size={18} />
      </div>
      {profilo && (
        <EditPostProfileModal
          show={show2}
          onHide={handleClose2}
          Page={Page}
          profilo={profilo}
          postId={selected}
        />
      )}

      <AddNewPostProfile
        show={show}
        onHide={handleClose}
        profilo={profilo}
        Page={Page}
      />
    </Col>
  );
};
export default AttivitàProfilo;
