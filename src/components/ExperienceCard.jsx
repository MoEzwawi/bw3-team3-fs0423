import { Pencil } from "react-bootstrap-icons";
import ModalEdit from "./ModalEdit";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  differenceInMonths,
  differenceInYears,
  format,
  isValid,
  parseISO,
} from "date-fns";
import image from "../AvidCareerist.com-10.png";

const ExperienceCard = ({ experience, getExperiences }) => {
  const location = useLocation();
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const calculateDateDifference = (startDate, endDate) => {
    if (!isValid(parseISO(endDate))) {
      const currentDate = new Date();
      const totalMonths = differenceInMonths(currentDate, new Date(startDate));
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      if (years > 0) {
        return `${years} ${years === 1 ? "anno" : "anni"} ${months} ${
          months === 1 ? "mese" : "mesi"
        }`;
      } else {
        return `${months} ${months === 1 ? "mese" : "mesi"}`;
      }
    } else {
      const totalMonths = differenceInMonths(
        new Date(endDate),
        new Date(startDate)
      );
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      if (years > 0) {
        return `${years} ${years === 1 ? "anno" : "anni"} ${months} ${
          months === 1 ? "mese" : "mesi"
        }`;
      } else {
        return `${months} ${months === 1 ? "mese" : "mesi"}`;
      }
    }
  };

  return (
    <div className="col-12 mb-4">
      <div className="d-flex">
        <div className="me-2">
          <img
            src={experience.image ? experience.image : image}
            alt=""
            width={"50px"}
            className="pt-1"
          />
        </div>
        <div className="me-auto mt-2">
          <h5 className="mb-1 h5ExpCard">{experience.role}</h5>
          <p className="mb-0 compExpCard">{experience.company}</p>
          <p className="mb-0 pExpCard">
            {format(new Date(experience.startDate), "MMM, yyyy")} -{" "}
            {isValid(parseISO(experience.endDate))
              ? format(new Date(experience.endDate), "MMM, yyyy")
              : "Presente"}{" "}
            ·{" "}
            {calculateDateDifference(experience.startDate, experience.endDate)}
          </p>
          <p className="mb-3 pExpCard">{experience.area}</p>
          <p className="mb-1">{experience.description}</p>
        </div>
        <div className="">
          {/* <ButtonDelete
            userId={experience.user}
            expId={experience._id}
            getExperiences={getExperiences}
          ></ButtonDelete> */}
          {location.pathname === "/expEdit" ? (
            <>
              <Pencil
                size={20}
                onClick={handleShowEdit}
                className="cursorPointerForAll"
              />{" "}
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
