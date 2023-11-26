import { CaretDownFill } from "react-bootstrap-icons";

const FooterJobPage = () => {
  return (
    <>
      <div id="footer-job">
        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0">Informazioni</p>
          <p className="text-secondary mb-0">Accessibilità</p>
        </div>

        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0 text-center">Centro Assistenza </p>
          <p className="text-secondary mb-0 text-center">
            Privacy e condizioni <CaretDownFill />
          </p>
        </div>

        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0">
            Opzioni per gli annunci pubblicitari
          </p>
        </div>

        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0">
            Servizi alle aziende <CaretDownFill />
          </p>
          <p className="text-secondary mb-0">Pubblicità</p>
        </div>

        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0">Scarica app Linkedln</p>
          <p className="text-secondary mb-0">Altro</p>
        </div>

        <div className="text-secondary d-flex gap-1 justify-content-center">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
            alt="Immagine copy"
            width="20%"
            className="mt-1"
          />
          <p className="align-self-baseline  mb-0 mt-2">
            LinkedIn Corporation &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterJobPage;
