import { Col } from "react-bootstrap";
import img from "../IMG_1127 3.jpg";
import { useState } from "react";
import ModalImgProfilo from "./ModalImgProfilo";

const Profile = ({ profilo, Page }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col className=" border border-1 border-secondary-subtle rounded rounded-2 bg-white p-0 mb-3">
      <div className="cont">
        <img
          src={img}
          alt="spazio sfondo"
          height={220}
          className="rounded rounded-2"
        />
        <img
          className="pro"
          src={profilo.image}
          alt="profile-pic"
          onClick={handleShow}
        />
        <ModalImgProfilo
          show={show}
          onHide={handleClose}
          userID={profilo._id}
          Page={Page}
        />
      </div>

      <div className="ma">
        <h3 className="h3Exp">
          {profilo.name} {profilo.surname}
        </h3>
        <div>
          <h5>Mestiere:</h5>
          <p>{profilo.title}</p>
        </div>
        <div>
          <h5>Email:</h5>
          {profilo.email}
          <h5>Bio:</h5>
          {profilo.bio}
        </div>
      </div>
    </Col>
  );
};

export default Profile;
