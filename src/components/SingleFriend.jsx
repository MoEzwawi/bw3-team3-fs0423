import { PersonAdd, PersonCheck } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const SingleFriend = ({ image, name, surname, title, id, onHide }) => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <Col className="d-flex p-0">
      <div>
        <img
          src={image}
          alt="ciao"
          width="40px"
          className="rounded-circle me-2"
        />
      </div>
      <div>
        <Link
          to={`/me/${id}`}
          onClick={onHide}
          className="text-decoration-none text-dark"
        >
          <p className="fw-bold m-0 pNameFriend">
            {name}&nbsp;{surname}
          </p>
        </Link>
        <p className="m-0 mb-2 pTitleFriend">{title}</p>
        {!isAdded && (
          <div
            id="fr-add-btn"
            onClick={() => {
              setIsAdded(!isAdded);
            }}
            className="btn border border-1 border-secondary rounded-pill py-0 px-2"
          >
            <PersonAdd
              style={{ fontSize: "1.2em" }}
              className="mb-1 perAddButt "
            />{" "}
            Collegati
          </div>
        )}
        {isAdded && (
          <div
            id="fr-add-btn1"
            onClick={() => {
              setIsAdded(!isAdded);
            }}
            className="btn border border-1 border-secondary rounded-pill bg-success"
          >
            <PersonCheck
              style={{ fontSize: "1.2em" }}
              className="mb-1 perCheckButt"
            />{" "}
            Collegato
          </div>
        )}
      </div>
    </Col>
  );
};

export default SingleFriend;
