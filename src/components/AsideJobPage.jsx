import { Button } from "react-bootstrap";

const AsideJobPage = () => {
  return (
    <>
      <div className="border-dark-subtle border rounded py-2 px-4 mb-2 bg-white mt-3">
        <div className="d-flex py-3 ">
          <i className="bi bi-bookmark-fill fs-5 pe-2"></i>
          <h6 className="align-self-center">My jobs</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-bell-fill fs-5 pe-2"></i>
          <h6 className="align-self-end">Job alerts</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-check-lg fs-5 pe-2"></i>
          <h6 className="align-self-end">Demonstrate skills</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-file-earmark-text-fill fs-5 pe-2"></i>
          <h6 className="align-self-end">Interview prep</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-file-earmark fs-5 pe-2"></i>
          <h6 className="align-self-end">Resume Builder</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-youtube fs-5 pe-2"></i>
          <h6 className="align-self-end">Job seeker guidance</h6>
        </div>
        <div className="d-flex pb-3 ">
          <i className="bi bi-gear-fill fs-5 pe-2"></i>
          <h6 className="align-self-end">Application settings</h6>
        </div>
      </div>

      <Button className="w-100 custom-button py-2 " variant="outline-primary">
        <i className="bi bi-pencil-square pe-2 fs-5"></i>
        Post a free job
      </Button>
    </>
  );
};

export default AsideJobPage;
