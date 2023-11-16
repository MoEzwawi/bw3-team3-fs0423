import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FooterJobPage from "./FooterJobPage";

const FavouritePage = () => {
  const favouriteList = useSelector((state) => state.jobs.favourites.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="my-3" md={8}>
          <ListGroup>
            {favouriteList.map((fav, i) => (
              <ListGroupItem key={i} className="d-flex justify-content-between">
                {fav}
                <i
                  class="bi bi-trash3-fill"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: i,
                    });
                  }}
                ></i>
              </ListGroupItem>
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
