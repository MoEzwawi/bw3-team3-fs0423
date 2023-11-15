import { Card, Col, Row } from "react-bootstrap";

const SearchJob = ({ jobsData }) => {
  return (
    <div className="jobs-container my-3 rounded">
      {jobsData && jobsData.length > 0 && (
        <div className="px-3 py-2">
          <h3>Consigliato per te</h3>
          <span>
            Sulla base del tuo profilo e della tua cronologia delle ricerche
          </span>
        </div>
      )}
      {jobsData &&
        jobsData.map((job) => (
          <Card key={job._id}>
            <Row className="container-fluid justify-content-center ">
              <Col md={6}>
                <Card.Body>
                  <Card.Link href="#" className="fw-bold">
                    {job.title}
                  </Card.Link>
                  <Card.Title>{job.company_name}</Card.Title>
                  <Card.Subtitle>{job.job_type}</Card.Subtitle>
                </Card.Body>
              </Col>
              <Col md={2} className="ms-auto d-flex align-items-center fs-5">
                <i className="bi bi-eye-slash-fill"></i>
                <i className="bi bi-bookmark"></i>
              </Col>
            </Row>
          </Card>
        ))}
    </div>
  );
};

export default SearchJob;
