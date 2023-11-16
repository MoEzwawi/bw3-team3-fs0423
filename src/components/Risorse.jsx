import { Button, Col } from "react-bootstrap";
import {
  ArrowRight,
  BroadcastPin,
  EyeFill,
  PeopleFill,
} from "react-bootstrap-icons";

const Risorse = () => {
  return (
    <Col className=" border border-1 border-secondary-subtle rounded rounded-2 bg-white mb-3 px-0">
      <div className="container-fluid ps-4 pt-4">
        <div className="container-fluid d-flex align-items-center mb-3">
          <div className="col mt-1 ">
            <h4 className="h3Exp">Risorse</h4>
            <EyeFill /> <span className="pExpCard">Solo per te</span>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-column ps-4">
          <div className="d-flex mb-3">
            <div className="me-3">
              <BroadcastPin />
            </div>
            <div className="d-flex flex-column">
              <div className="mb-0 fw-bold d-flex">
                Modalità creazione di contenuti{" "}
                <Button variant="success" className="btnSi">
                  Si
                </Button>
              </div>
              <p className="mb-0 pAltro">
                Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
                accedi agli strumenti di creazione
              </p>
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="me-3">
              <PeopleFill />
            </div>
            <div className="d-flex flex-column">
              <p className="mb-0 fw-bold">La mia rete</p>
              <p className="mb-0 pAltro">
                Salva e gestisci i tuoi collegamenti e interessi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 show-all-btn cursorPointerForAll text-center border-top">
        Mostra tutte le risorse (5) <ArrowRight size={18} />
      </div>
    </Col>
  );
};
export default Risorse;
