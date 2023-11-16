import { Modal } from "react-bootstrap";
import { Linkedin, Envelope, Pencil } from "react-bootstrap-icons";

const ModalInfoContact = ({ profilo, onHide2, show2 }) => {
  return (
    <Modal show={show2} onHide={onHide2}>
      <Modal.Header closeButton>
        <Modal.Title>
          {profilo.name} {profilo.surname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div className="me-auto">
            <h6>Informazioni di contatto</h6>
          </div>
          <div>
            <Pencil></Pencil>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex mb-3">
            <div className="me-3">
              <Linkedin />
            </div>
            <div className="d-flex flex-column">
              <p className="mb-0">Il tuo profilo</p>
              <p className="mb-0 linkInfo">
                linkedin.com/in/{profilo.name}-{profilo.surname}/{profilo._id}
              </p>
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="me-3">
              <Envelope />
            </div>
            <div className="d-flex flex-column">
              <p className="mb-0">Email</p>
              <p className="mb-0 linkInfo">{profilo.email}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ModalInfoContact;
