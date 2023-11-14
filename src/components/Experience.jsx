import { useEffect, useState } from "react";
import { Plus, Pencil, ArrowLeft } from "react-bootstrap-icons";
import ModalPlus from "./ModalPlus";
import ExperienceCard from "./ExperienceCard";
import { Link, useLocation } from "react-router-dom";

const Experience = ({ userID }) => {
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMDU1NGM1NWU3ZTAwMThmODNjMWYiLCJpYXQiOjE2OTk4NzQxMzIsImV4cCI6MTcwMTA4MzczMn0.8B_VumLLJt3uvILX9xMQhhU_nqIvlerlv0QbTDTwRtM",
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
    if (!experiences) {
      getExperiences();
    }
  }, [experiences, userID]);

  return (
    <div className="container-fluid pt-4">
      <div className="container-fluid d-flex align-items-center mb-4">
        <div className="col me-auto ">
          {location.pathname === "/expEdit" ? (
            <div className="d-flex align-items-center">
              <Link to="/" className="text-decoration-none text-dark">
                <ArrowLeft className="me-5" size={25}></ArrowLeft>
              </Link>
              <h3>Esperienza</h3>
            </div>
          ) : (
            <h3>Esperienza</h3>
          )}
        </div>
        <div className="me-4">
          <Plus size={35} onClick={handleShow} />

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
  );
};
export default Experience;
