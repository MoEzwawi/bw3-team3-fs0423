import { Pencil } from "react-bootstrap-icons";
import ModalEdit from "./ModalEdit";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

const ExperienceCard = ({ experience, getExperiences }) => {
  const location = useLocation();
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <div className="col-12 mb-4">
      <div className="row">
        <div className="col col-2 col-md-2 col-lg-1">
          <img src={experience.image} alt="" width={"75px"} className="pt-1" />
        </div>
        <div className="col col-8 col-md-8 col-lg-10">
          <p className="mb-1">{experience.role}</p>
          <p className="mb-1">{experience.company}</p>
          <p className="mb-1">
            {format(new Date(experience.startDate), "MMM,yyyy")} -
            {format(new Date(experience.endDate), "MMM,yyyy")} ·
          </p>
          <p className="mb-3">{experience.area}</p>
          <p className="mb-1">{experience.description}</p>
        </div>
        <div className="col-2 col-md-2 col-lg-1">
          {/* <ButtonDelete
            userId={experience.user}
            expId={experience._id}
            getExperiences={getExperiences}
          ></ButtonDelete> */}
          {location.pathname === "/expEdit" ? (
            <>
              <Pencil size={20} onClick={handleShowEdit} />{" "}
              <ModalEdit
                show={showEdit}
                onHide={handleCloseEdit}
                exp={experience}
                getExperiences={getExperiences}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
