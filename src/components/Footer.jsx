import { Col, Container, Row } from "react-bootstrap";
import LanguagesDrop from "./LanguagesDrop";

const Footer = () => {
  return (
    <Container>
      <Row className="w-100 mt-5 justify-content-center" id="Footer">
        <Col xs={4} sm={2}>
          <div className="d-flex flex-column justify-content-around">
            <p>Informazioni</p>
            <p>Guide della Community</p>
            <p>Privacy & Condizioni</p>
            <p>Sales Solutions</p>
            <p>Centro sicurezza</p>
          </div>
        </Col>
        <Col xs={4} sm={2}>
          <div className="d-flex flex-column justify-content-around">
            <p>Accessibilità</p>
            <p>Carriera</p>
            <p>Annunci</p>
            <p>Mobile</p>
          </div>
        </Col>
        <Col xs={4} sm={2}>
          <div className="d-flex flex-column justify-content-around">
            <p>Talent Solutions</p>
            <p>Soluzioni di marketing</p>
            <p>Pubblicità</p>
            <p>Piccole imprese</p>
          </div>
        </Col>
        <Col xs={12} sm={2}>
          <div className="d-flex flex-column justify-content-around">
            <div className="d-flex">
              <i className="bi bi-question-circle-fill fs-5"></i>
              <div>
                <h6 className="mb-0 ms-1">Domande?</h6>
                <p>Visita il nostro Centro assistenza.</p>
              </div>
            </div>
            <div className="d-flex">
              <i className="bi bi-gear-fill fs-5"></i>
              <div>
                <h6 className="mb-0 ms-1">
                  Gestisci il tuo account e la tua privacy
                </h6>
                <p>Vai alle impostazioni.</p>
              </div>
            </div>
            <div className="d-flex">
              <i className="bi bi-shield-shaded fs-5"></i>
              <div>
                <h6 className="mb-0 ms-1">Trasparenza sui contenuti</h6>
                <p>Scopri di più sui contenuti consigliati.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={4} className="footerDrop">
          <div className="d-flex flex-column">
            <p className="mb-0">Seleziona Lingua</p>
            <LanguagesDrop />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
