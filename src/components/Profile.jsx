import { Col } from "react-bootstrap";

const Profile = ({ profilo }) => {
  return (
    <Col className=" border border-1 border-secondary-subtle rounded rounded-2 bg-white p-0 mb-3">
      <div className="cont">
        <img
          src=" https://fotografiaartistica.it/wp-content/uploads/2019/06/nasa-immagini-gratuite-dello-spazio.jpg"
          alt="spazio sfondo"
          height={220}
          className="rounded rounded-2"
        />
        <img className="pro" src={profilo.image} alt="profile-pic" />
      </div>

      <div className="ma">
        <h4>
          {profilo.name} {profilo.surname}
        </h4>
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
