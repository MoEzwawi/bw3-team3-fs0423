import { useEffect, useState } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import SearchJob from "./SearchJob";
import AsideJobPage from "./AsideJobPage";
import immagine from "../AvidCareerist.com-10.png";
import FooterJobPage from "./FooterJobPage";
import { useDispatch } from "react-redux";

const Jobs = ({ jobsData }) => {
  const [jobs, setJobs] = useState([]);
  const [favourites, setFavourites] = useState({});
  const dispatch = useDispatch();

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

  const toggleFavourite = (job) => {
    const isFavourite = !!favourites[job._id];

    setFavourites({
      ...favourites,
      [job._id]: !isFavourite,
    });

    const actionType = isFavourite
      ? "REMOVE_FROM_FAVOURITES"
      : "ADD_TO_FAVOURITES";

    dispatch({
      type: actionType,
      payload: job.company_name,
    });
  };

  return (
    <Container>
      <Row className="mx-auto">
        <Col md={2} className="mt-1">
          <AsideJobPage />
        </Col>
        <Col md={7} className="flex-grow-1">
          <SearchJob jobsData={jobsData} />
          <div className="jobs-container rounded mb-5 ">
            <div className="px-3 py-2 lh-1">
              <h5>Selezione in corso</h5>
              <span>
                Italy - Offerte di lavoro che potrebbero esserti sfuggite
              </span>
            </div>

            {jobs.length > 0 && (
              <div>
                {jobs.slice(0, 4).map((job) => (
                  <Card key={job._id}>
                    <Row>
                      <Col
                        md={2}
                        className="img-jobs-container rounded d-flex align-items-center pe-0 ms-1 justify-content-center"
                      >
                        <Card.Img
                          src={immagine}
                          alt="job image"
                          className="jobs-img"
                        />
                      </Col>
                      <Col md={6} className="p-0">
                        <Card.Body className="lh-1">
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
                        <i className="bi bi-eye-slash-fill me-2"></i>
                        <i
                          className={`bi ${
                            favourites[job._id]
                              ? "bi-bookmark-fill"
                              : "bi-bookmark"
                          }`}
                          onClick={() => toggleFavourite(job)}
                        ></i>
                      </Col>
                    </Row>
                  </Card>
                ))}

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Mostra tutto</Accordion.Header>
                    <Accordion.Body>
                      {jobs.slice(4, 10).map((job) => (
                        <Card key={job._id}>
                          <Row>
                            <Col
                              md={2}
                              className="img-jobs-container rounded d-flex align-items-center pe-0 ms-1 justify-content-center"
                            >
                              <Card.Img
                                src={immagine}
                                alt="job image"
                                className="jobs-img"
                              />
                            </Col>
                            <Col md={6} className="p-0">
                              <Card.Body className="lh-1">
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
                              <i className="bi bi-eye-slash-fill me-2"></i>
                              <i
                                className={`bi ${
                                  favourites[job._id]
                                    ? "bi-bookmark-fill"
                                    : "bi-bookmark"
                                }`}
                                onClick={() => toggleFavourite(job)}
                              ></i>
                            </Col>
                          </Row>
                        </Card>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            )}
          </div>
        </Col>
        <Col md={3}>
          <FooterJobPage id="footer-sidebar" />
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
