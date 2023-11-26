import { Modal, Row } from "react-bootstrap";
import SingleFriend from "./SingleFriend";
import { useLocation, useParams } from "react-router-dom";

const ModalShowFriend = ({ show, onHide, newFriends, profilo }) => {
  const location = useLocation()
  const params = useParams()
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="ps-2">
          Persone che potresti conoscere
        </Modal.Title>
      </Modal.Header>
      <p className="mb-0 border-bottom text-success ps-4 py-2 fw-bold">
        Della tua scuola o università
      </p>
      <Modal.Body>
        <>
          {location.pathname === '/me' ?
            (newFriends.length > 0 && profilo &&
              newFriends
                .filter(f => f._id !== profilo._id)
                .map((fr) => {
                  return (
                    <Row key={fr._id} className="justify-content-start my-2 mx-3">
                      <SingleFriend
                        image={fr.image}
                        name={fr.name}
                        surname={fr.surname}
                        title={fr.title}
                        id={fr._id}
                        onHide={onHide}
                      />
                    </Row>
                  );
                })) : (newFriends.length > 0 && profilo &&
                  newFriends
                    .filter(f => f._id !== profilo._id)
                    .filter(f => f._id !== params.id)
                    .map((fr) => {
                      return (
                        <Row key={fr._id} className="justify-content-start my-2 mx-3">
                          <SingleFriend
                            image={fr.image}
                            name={fr.name}
                            surname={fr.surname}
                            title={fr.title}
                            id={fr._id}
                            onHide={onHide}
                          />
                        </Row>
                      );
                    }))}
        </>
      </Modal.Body>
    </Modal>
  );
};
export default ModalShowFriend;
