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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMDU1NGM1NWU3ZTAwMThmODNjMWYiLCJpYXQiOjE2OTk4NzQxMzIsImV4cCI6MTcwMTA4MzczMn0.8B_VumLLJt3uvILX9xMQhhU_nqIvlerlv0QbTDTwRtM",
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
