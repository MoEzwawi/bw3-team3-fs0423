import { useState } from "react";
import { Accordion, Col } from "react-bootstrap";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

const CustomAccordion = () => {
  const [invisible, setInvisible] = useState(true);

  const visible = () => {
    setInvisible(!invisible);
  };
  return (
    <Col>
      <ul id="news-list">
        <li>Batterie al litio: Svolta nell'autonomia veicoli</li>
        <li>IA diagnostica: La precisione nel cancro</li>
        <li>Blockchain: Sicurezza e innovazione finanziaria</li>
        <li>Veicoli autonomi: Rivoluzione per la mobilità</li>
        <li>IoT: Trasformazione dell'industria manifatturiera</li>
      </ul>
      <Accordion>
        <Accordion.Item eventKey="0" style={{ border: "0" }}>
          <Accordion.Header
            className="acc color"
            onClick={visible}
            style={{
              display: invisible ? "block" : "none",
            }}
          >
            <div className="size contenuti">
              {invisible ? "Mostra di  più" : ""}
            </div>

            <CaretDownFill />
          </Accordion.Header>
          <Accordion.Body>
            <ul id="news-list">
              <li>Supercomputer record: Acceleratore per la ricerca</li>
              <li>5G avanzato: Cambio nel mondo tecnologico</li>
              <li>Cybersecurity: Protezione avanzata per organizzazioni</li>
              <li>
                Realità aumentata: Rivoluzione nell'istruzione interattiva
              </li>
              <li>AI in sanità: Diagnosi precise e personalizzate</li>
            </ul>
          </Accordion.Body>
          <Accordion.Header
            className="acc color"
            onClick={visible}
            style={{ display: invisible ? "none" : "block" }}
          >
            <div className="size contenuti">
              {invisible ? "" : "Mostra di meno"}
            </div>

            <CaretUpFill />
          </Accordion.Header>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
};

export default CustomAccordion;

//  Mostra dettagli
