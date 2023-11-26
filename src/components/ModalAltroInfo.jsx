import { format, formatDistanceToNow } from "date-fns";
import { Modal } from "react-bootstrap";
import { it } from "date-fns/locale";
import { useEffect } from "react";

const ModalAltroInfo = ({ profilo, onHide3, show3 }) => {
  const formattedDate = (dateString) => {
    if (!dateString) return "N/D";

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "N/D"; // Non è una data valida
    }

    return format(date, "MMMM yyyy", { locale: it });
  };

  const formattedUpdatedAt = () => {
    if (!profilo.updatedAt) return "N/D";
    const updatedAtDate = new Date(profilo.updatedAt);
    if (isNaN(updatedAtDate.getTime())) {
      return "N/D"; // Non è una data valida
    }
    return `Aggiornato ${formatDistanceToNow(updatedAtDate, {
      locale: it,
      addSuffix: true,
    })}`;
  };

  return (
    <Modal show={show3} onHide={onHide3}>
      <Modal.Header closeButton>
        <Modal.Title className="fs-6 fw-bold">
          Informazioni su questo profilo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex mb-2 fw-bold">
          {profilo.name} {profilo.surname}
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex mb-1">
            <div className="d-flex flex-column">
              <p className="mb-0 pTitoloInfo">Iscrizione effettuata</p>

              <p className="mb-0 pDataInfo">
                {formattedDate(profilo.createdAt)}
              </p>
            </div>
          </div>
          <div className="d-flex mb-1">
            <div className="d-flex flex-column">
              <p className="mb-0 pTitoloInfo">Informazioni di contatto</p>

              <p className="mb-0 pDataInfo">
                Ultimo aggiornamento: {formattedUpdatedAt()}
              </p>
            </div>
          </div>
          <div className="d-flex mb-1">
            <div className="d-flex flex-column">
              <p className="mb-0 pTitoloInfo ">Foto del profilo</p>
              <p className="mb-0 pDataInfo">
                {" "}
                Ultimo aggiornamento: {formattedUpdatedAt()}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ModalAltroInfo;
