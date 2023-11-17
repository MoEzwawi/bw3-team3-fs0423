import { Button } from "react-bootstrap";

const ButtonDeletePost = ({ postId, fetchData, onHide }) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzZjEzNmRkOTllZjAwMTlhMDk0OTYiLCJpYXQiOjE3MDAwMDAwNTQsImV4cCI6MTcwMTIwOTY1NH0.cXono32VfX5YDaQH7Rw8QX6rYOYDGAZsWG0Bsb2qSB4";
  const handleDelete = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + postId,

      {
        method: "DELETE",

        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("eliminazione completata");
          fetchData();
          onHide();
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
export default ButtonDeletePost;
