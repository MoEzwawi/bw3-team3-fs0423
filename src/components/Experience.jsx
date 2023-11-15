import { useEffect, useState } from "react";
import { Plus, Pencil, ArrowLeft } from "react-bootstrap-icons";
import ModalPlus from "./ModalPlus";
import ExperienceCard from "./ExperienceCard";
import { Link, useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";

const Experience = ({ userID }) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const location = useLocation();
  const [show, setShow] = useState(false);

  const [experiences, setExperiences] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getExperiences = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userID +
        "/experiences",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        console.log(data);
        setExperiences(data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  useEffect(() => {
    if (!experiences && userID) {
      getExperiences();
    }
  }, [experiences, userID]);

  return (
    <Col className=" border border-1 border-secondary-subtle rounded rounded-2 bg-white">
      <div className="container-fluid pt-4">
        <div className="container-fluid d-flex align-items-center mb-3">
          <div className="col me-auto ">
            {location.pathname === "/expEdit" ? (
              <div className="d-flex align-items-center">
                <Link to="/" className="text-decoration-none text-dark">
                  <ArrowLeft className="me-4" size={25}></ArrowLeft>
                </Link>
                <h4 className="h3Exp">Esperienza</h4>
              </div>
            ) : (
              <h4 className="h3Exp">Esperienza</h4>
            )}
          </div>
          <div className={location.pathname === "/" ? "me-4" : ""}>
            {location.pathname === "/" || location.pathname === "/expEdit" ? (
              <Plus size={35} onClick={handleShow} />
            ) : null}

            <ModalPlus
              show={show}
              onHide={handleClose}
              userID={userID}
              getExperiences={getExperiences}
            />
          </div>
          <div className="">
            {
              location.pathname === "/" ? (
                <Link to="/expEdit" className="text-decoration-none text-dark">
                  <Pencil size={20} />
                </Link>
              ) : null
              // <>
              //   <Pencil size={20} onClick={handleShowEdit} />
              //   <ModalEdit
              //     show={showEdit}
              //     onHide={handleCloseEdit}
              //     userID={userID}
              //     getExperiences={getExperiences}
              //   />
              // </>
            }
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {experiences &&
              experiences.map((experience, index) => {
                return (
                  <ExperienceCard
                    key={index}
                    experience={experience}
                    getExperiences={getExperiences}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Col>
  );
};
export default Experience;
