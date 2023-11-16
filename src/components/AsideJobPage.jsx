import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AsideJobPage = () => {
  return (
    <>
      <div className="border-dark-subtle border rounded py-2 px-4 mb-2 bg-white mt-3">
        <Link to="/favourites" className="text-decoration-none text-dark">
          <div className="d-flex py-3 ">
            <i className="bi bi-bookmark-fill fs-5 pe-2"></i>
            <h6 className="align-self-center">Le mie offerte di lavoro</h6>
          </div>
        </Link>
        <div className="d-flex pb-3 ">
          <i className="bi bi-bell-fill fs-5 pe-2"></i>
          <h6 className="align-self-end">Avvisi</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-check-lg fs-5 pe-2"></i>
          <h6 className="align-self-end">Verifica le tue abilità</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-file-earmark-text-fill fs-5 pe-2"></i>
          <h6 className="align-self-end">Preparazione al colloquio</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-file-earmark fs-5 pe-2"></i>
          <h6 className="align-self-end">Presentazione progetti</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-youtube fs-5 pe-2"></i>
          <h6 className="align-self-end">Indicazioni per chi cerca lavoro</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-gear-fill fs-5 pe-2"></i>
          <h6 className="align-self-end">Impostazioni applicazione</h6>
        </div>
      </div>

      <Button className="w-100 custom-button py-2 " variant="outline-primary">
        <i className="bi bi-pencil-square pe-2 fs-5"></i>
        Pubblica offerta gratuita
      </Button>
    </>
  );
};

export default AsideJobPage;
