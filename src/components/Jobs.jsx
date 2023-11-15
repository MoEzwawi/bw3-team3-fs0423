import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SearchJob from "./SearchJob";
import AsideJobPage from "./AsideJobPage";
import immagine from '../AvidCareerist.com-10.png'

const Jobs = ({ jobsData }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        console.log("risultato jobs", data);
        setJobs(data.data);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  }, []);

  return (
    <Container>
      <Row className="mx-auto">
        <Col md={2} className="mt-1">
          <AsideJobPage />
        </Col>
        <Col md={8}>
          <SearchJob jobsData={jobsData} />
          <div className="jobs-container rounded my-4">
            <div className="px-3 py-3">
              <h3>Recommended for you</h3>
              <span>Italy</span>
            </div>

            {jobs.length > 0 &&
              jobs.slice(0, 10).map((job) => (
                <Card key={job._id}>
                  <Row>
                    <Col
                      md={2}
                      className="rounded d-flex align-items-center pe-0 ms-1"
                    >
                      <Card.Img
                        src={immagine}
                        alt="job image"
                        className="jobs-img"
                      />
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Link href="#" className="fw-bold">
                          {job.title}
                        </Card.Link>
                        <Card.Title>{job.company_name}</Card.Title>
                        <Card.Subtitle>{job.job_type}</Card.Subtitle>
                      </Card.Body>
                    </Col>
                    <Col
                      md={2}
                      className="ms-auto d-flex align-items-center fs-5"
                    >
                      <i className="bi bi-eye-slash-fill"></i>
                      <i className="bi bi-bookmark"></i>
                    </Col>
                  </Row>
                </Card>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
