import { Card, Col, Row } from "react-bootstrap";
import immagine from "../AvidCareerist.com-10.png";
import { useSelector, useDispatch } from "react-redux";

const SearchJob = ({ jobsData }) => {
  const favourites = useSelector((state) => state.jobs.favourites.content);
  const dispatch = useDispatch();

  const toggleFavourite = (job) => {
    const isFavourite = favourites.some((fav) => fav._id === job._id);

    if (isFavourite) {
      // Trova l'indice del lavoro nei preferiti
      const index = favourites.findIndex((fav) => fav._id === job._id);
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: index });
    } else {
      dispatch({ type: "ADD_TO_FAVOURITES", payload: job });
    }
  };

  return (
    <div className="jobs-container my-3 rounded">
      {jobsData && jobsData.length > 0 && (
        <div className="px-3 py-2 lh-1">
          <h5>Consigliato per te</h5>
          <span>
            Sulla base del tuo profilo e della tua cronologia delle ricerche
          </span>
        </div>
      )}
      {jobsData &&
        jobsData.map((job) => {
          const isFav = favourites.some((fav) => fav._id === job._id);

          return (
            <Card key={job._id}>
              <Row className="container-fluid justify-content-center">
                <Col
                  md={2}
                  className="img-jobs-container rounded d-flex align-items-center ps-0 justify-content-center"
                >
                  <Card.Img
                    src={immagine}
                    alt="job image"
                    className="jobs-img"
                  />
                </Col>
                <Col md={6} className="p-0">
                  <Card.Body className="lh-1">
                    <Card.Link
                      href={job.url}
                      className="fw-bold"
                      target="_blank"
                    >
                      {job.title}
                    </Card.Link>
                    <Card.Title>{job.company_name}</Card.Title>
                    <Card.Subtitle>{job.job_type}</Card.Subtitle>
                  </Card.Body>
                </Col>
                <Col md={2} className="ms-auto d-flex align-items-center fs-5">
                  <i className="bi bi-eye-slash-fill me-2"></i>
                  <i
                    className={`bi ${
                      isFav ? "bi-bookmark-fill" : "bi-bookmark"
                    } cursor-pointer`}
                    onClick={() => toggleFavourite(job)}
                  ></i>
                </Col>
              </Row>
            </Card>
          );
        })}
    </div>
  );
};

export default SearchJob;
