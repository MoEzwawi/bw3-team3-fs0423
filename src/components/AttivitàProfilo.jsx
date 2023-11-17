import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { ArrowRight, Pencil } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
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

  const [selected, setSelected] = useState(null);
  console.log(selected);

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
              <Pencil size={20} onClick={selected ? handleShow2 : null} />
            ) : null}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-column ps-4">
          <div className="d-flex mb-3">
            <ShowProfilePost profilo={profilo} setSelected={setSelected} />
          </div>
        </div>
      </div>
      <div className="py-2 show-all-btn cursorPointerForAll text-center border-top">
        Mostra tutte le attività <ArrowRight size={18} />
      </div>
      <EditPostProfileModal
        show={show2}
        onHide={handleClose2}
        Page={Page}
        postId={selected}
      />
      <AddNewPostProfile show={show} onHide={handleClose} />
    </Col>
  );
};
export default AttivitàProfilo;
