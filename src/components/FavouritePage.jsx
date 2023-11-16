import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FooterJobPage from "./FooterJobPage";
import image from "../AvidCareerist.com-10.png";
import { Link } from "react-router-dom";

const FavouritePage = () => {
  const favouriteList = useSelector((state) => state.jobs.favourites.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="justify-content-center">
        <h2 className="mt-2">Le tue offerte di lavoro</h2>
        <Col className="my-3" md={8}>
          <ListGroup>
            {favouriteList.map((fav, i) => (
              <div key={fav._id}>
                <ListGroupItem className="d-flex justify-content-between rounded">
                  <div className="d-flex align-items-center">
                    <img
                      src={image}
                      alt="default img"
                      className="favourite-img"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <Card.Body className="lh-1">
                      <Card.Link href={fav.url} className="fw-bold">
                        {fav.title}
                      </Card.Link>
                      <Card.Title>{fav.company_name}</Card.Title>

                      <Card.Subtitle>{fav.job_type}</Card.Subtitle>
                    </Card.Body>
                  </div>
                  <i
                    className="bi bi-trash3-fill cursor-pointer d-flex align-items-center"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITES",
                        payload: i,
                      });
                    }}
                  ></i>
                </ListGroupItem>
              </div>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <FooterJobPage />
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritePage;
