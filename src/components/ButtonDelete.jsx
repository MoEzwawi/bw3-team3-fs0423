import { Button } from "react-bootstrap";

const ButtonDelete = ({ userId, expId, getExperiences }) => {
  const handleDelete = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences/" +
        expId,
      {
        method: "DELETE",

        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmM5NWM1NWU3ZTAwMThmODNjMTUiLCJpYXQiOjE2OTk4NzE4OTMsImV4cCI6MTcwMTA4MTQ5M30.iH5N7eSSeP5nn4dz7CbBEeXtOoWJ0Nn4EAqW74IHIqo",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("eliminazione completata");
          getExperiences();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  return (
    <Button onClick={handleDelete} className="btn-light">
      Elimina Esperienza
    </Button>
  );
};
export default ButtonDelete;
