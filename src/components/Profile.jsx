import { Button, Col, Dropdown, DropdownButton } from "react-bootstrap";
import img from "../IMG_1127 3.jpg";
import { useEffect, useState } from "react";
import ModalImgProfilo from "./ModalImgProfilo";
import ModalInfoContact from "./ModalInfoContact";
import {
  Arrow90degRight,
  Download,
  InfoSquareFill,
  Plus,
  FlagFill,
  PersonAdd,
  PersonCheck,
} from "react-bootstrap-icons";
import ModalAltroInfo from "./ModalAltroInfo";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FRIEND } from "../redux/actions";
import { REMOVE_FRIEND } from "../redux/actions";
const Profile = ({ profilo, Page }) => {
  const dispatch = useDispatch()
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const myState = useSelector(state => state.profile.friends.content)
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    if (myState.includes(profilo._id)) {
      setIsAdded(!isAdded)
    }
    console.log('io sono porfilo', profilo)
  }, [profilo])
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
          onClick={location.pathname === "/me" ? handleShow : null}
        />
        <ModalImgProfilo
          show={show}
          onHide={handleClose}
          userID={profilo._id}
          Page={Page}
        />
      </div>

      <div className="ma pb-4">
        <h3 className="h3Exp">
          {profilo.name} {profilo.surname}
        </h3>
        <div>
          <p className="mb-0">{profilo.title}</p>
        </div>
        <div className="d-flex">
          <div>
            <p className="mb-0 pExpCard">{profilo.area} · </p>
          </div>
          <div>
            <p
              className="mb-0 pExpCard2 cursorPointerForAll"
              onClick={handleShow2}
            >
              {" "}
              Informazioni di contatto{" "}
            </p>
            <ModalInfoContact
              profilo={profilo}
              show2={show2}
              onHide2={handleClose2}
            />
          </div>
        </div>
        <div className="d-flex flex-row mt-3">
          <div>
            {location.pathname === "/me" ? (
              <DropdownButton
                id="custom-dropdown-profile"
                title="Disponibile per"
                className="nanana"
              >
                <Dropdown.Item>
                  <strong className="strongSize">
                    {" "}
                    Selezione del personale
                  </strong>
                  <br />
                  <p className="spanOpacity">
                    Fai sapere che stai facendo <br />
                    selezione e attrai candidati <br /> qualificati.{" "}
                  </p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <strong className="strongSize">Servizi offerti</strong>
                  <br />
                  <p className="spanOpacity">
                    Metti in risalto i servizi che offri, <br />
                    cosi i nuovi clienti potranno <br />
                    trovarti
                  </p>
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <span>
                {!isAdded && (
                  <div
                    id="fr-add-btn"
                    onClick={() => {
                      dispatch({
                        type: ADD_FRIEND,
                        payload: profilo._id,
                      });
                      setIsAdded(!isAdded);
                    }}
                    className="btn border border-1 border-dark rounded-pill py-0 px-2 bg-primary text-white"
                  >
                    <PersonAdd
                      style={{ fontSize: "1.2em" }}
                      className="mb-1 perAddButt text-white "
                    />{" "}
                    Collegati
                  </div>
                )}
                {isAdded && (
                  <div
                    id="fr-add-btn1"
                    onClick={() => {
                      dispatch({
                        type: REMOVE_FRIEND,
                        payload: profilo._id,
                      });
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
              </span>
            )}
          </div>
          <div className="ms-2">
            <Button className="btnProf" variant="light">
              {location.pathname === "/me"
                ? "Aggiungi sezione del profilo"
                : "Messaggio"}
            </Button>
          </div>
          <div className="ms-2">
            {" "}
            <DropdownButton
              id="custom-dropdown-altro"
              title="Altro"
              variant="light"
              className="nanana"
            >
              <Dropdown.Item>
                <div className="d-flex align-items-center">
                  <div className="me-3 ">
                    <Arrow90degRight />
                  </div>
                  <div>
                    <p className="mb-0 pAltro">
                      Invia il profilo in un messaggio
                    </p>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="d-flex align-items-center">
                  <div className="me-3 ">
                    <Download />
                  </div>
                  <div>
                    <p className="mb-0 pAltro">Salva come PDF</p>
                  </div>
                </div>
              </Dropdown.Item>
              {location.pathname !== "/me" ? (
                <Dropdown.Item>
                  <div className="d-flex align-items-center">
                    <div className="me-3 ">
                      <Plus />
                    </div>
                    <div>
                      <p className="mb-0 pAltro">Segui</p>
                    </div>
                  </div>
                </Dropdown.Item>
              ) : null}
              {location.pathname !== "/me" ? (
                <Dropdown.Item>
                  <div className="d-flex align-items-center">
                    <div className="me-3 ">
                      <FlagFill />
                    </div>
                    <div>
                      <p className="mb-0 pAltro">Segnala violazione/Blocca</p>
                    </div>
                  </div>
                </Dropdown.Item>
              ) : null}
              <Dropdown.Item onClick={handleShow3}>
                <div className="d-flex align-items-end">
                  <div className="me-3 ">
                    <InfoSquareFill />
                  </div>
                  <div>
                    <p className="mb-0 pAltro">
                      Informazioni su questo profilo
                    </p>
                  </div>
                </div>
              </Dropdown.Item>
            </DropdownButton>
            <ModalAltroInfo
              profilo={profilo}
              show3={show3}
              onHide3={handleClose3}
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Profile;
