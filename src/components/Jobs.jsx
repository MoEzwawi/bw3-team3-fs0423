import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Jobs = () => {
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
    <div className="jobs-container rounded my-4">
      {jobs.length > 0 &&
        jobs.slice(0, 10).map((job) => (
          <Card key={job._id}>
            <Row>
              <Col
                md={2}
                className="rounded d-flex align-items-center pe-0 ms-1"
              >
                <Card.Img
                  src="https://www.elettronews.com/files/2018/02/NZEB.jpg"
                  alt="job image"
                />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Link href="#">{job.title}</Card.Link>
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

export default Jobs;
