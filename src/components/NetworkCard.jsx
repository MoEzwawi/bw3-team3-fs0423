import { Card, Col } from "react-bootstrap";
import { PersonAdd } from "react-bootstrap-icons";
// import { useDispatch } from "react-redux";
import { FOLLOW } from "../redux/actions";

const NetworkCard = ({ profile, addFollow }) => {
  // const dispatch = useDispatch();
  return (
    <>
      {profile._id !== "6551cb68c55e7e0018f83bd2" && (
        <Col>
          <Card className="d-flex flex-column justify-content-between h-100">
            <Card.Img
              variant="top"
              height={"100%"}
              src={
                profile.image
                  ? profile.image
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAAAXNSR0IArs4c6QAAE9xJREFUeF7t1jENADAMBLGGP7VwaqViuNEB8IOV4WZ373EECBAgQIAAAQKZwAiszNIQAQIECBAgQOALCCyPQIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECAssPECBAgAABAgRiAYEVg5ojQIAAAQIECAgsP0CAAAECBAgQiAUEVgxqjgABAgQIECAgsPwAAQIECBAgQCAWEFgxqDkCBAgQIECAgMDyAwQIECBAgACBWEBgxaDmCBAgQIAAAQICyw8QIECAAAECBGIBgRWDmiNAgAABAgQICCw/QIAAAQIECBCIBQRWDGqOAAECBAgQICCw/AABAgQIECBAIBYQWDGoOQIECBAgQICAwPIDBAgQIECAAIFYQGDFoOYIECBAgAABAgLLDxAgQIAAAQIEYgGBFYOaI0CAAAECBAgILD9AgAABAgQIEIgFBFYMao4AAQIECBAgILD8AAECBAgQIEAgFhBYMag5AgQIECBAgIDA8gMECBAgQIAAgVhAYMWg5ggQIECAAAECDziDTIxb96oXAAAAAElFTkSuQmCC"
              }
            />
            <Card.Body className="d-flex flex-column justify-content-between text-center ">
              <Card.Title>
                {profile.name} {profile.surname}
              </Card.Title>
              <Card.Text>
                {profile.title ? profile.title : "Software Developer"}
              </Card.Text>
              <div className="d-flex align-items-center btn btn-outline-primary w-100 justify-content-center gap-1 ">
                <PersonAdd />
                <p
                  className="mb-0"
                // onClick={() => {
                //   dispatch({ type: FOLLOW, payload: profile });
                //   addFollow();
                // }}
                >
                  Collegati
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )}{" "}
    </>
  );
};

export default NetworkCard;