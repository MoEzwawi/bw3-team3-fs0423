import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const AddComment = ({ postId, setDidYouComment, didyoucomment }) => {
  const [commentText, setCommentText] = useState({
    comment: "",
    rate: 1,
    elementId: postId,
  });
  useEffect(() => {
    if (didyoucomment) {
      setCommentText({ ...commentText, comment: "" });
      console.log("wow commentext", commentText);
    }
  }, [didyoucomment]);

  const CommentAdd = (text) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1MTcxMTFlNDM0YzAwMTkzZTJiNDkiLCJpYXQiOjE3MDAwNzUyODEsImV4cCI6MTcwMTI4NDg4MX0.8k33JRftomyJqlhHoUr2M7taWyBPVzPEm6Czf4AR2Mw ",
      },
      body: JSON.stringify(text),
    })
      .then((res) => {
        if (res.ok) {
          console.log("ris", res);
          return res.json();
        } else {
          throw new Error("errore get");
        }
      })
      .then((result) => {
        console.log("risposta post", result);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(() => {
    console.log("commentiiiii", commentText);
  }, [commentText]);

  return (
    <Col>
      <Form
        className="flex-grow-1"
        onSubmit={(e) => {
          e.preventDefault();

          CommentAdd(commentText);
          setDidYouComment(true);
        }}
      >
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            id="control-input"
            type="text"
            placeholder="Aggiungi un commento..."
            // value={didyoucomment ? "" : commentText.comment}
            className="rounded-pill py-3 px-3 cursor"
            onChange={(e) => {
              setCommentText({ ...commentText, comment: e.target.value });
            }}
          />
          <Button
            variant="link"
            type="submit"
            style={{ textDecoration: "none", fontWeight: "600" }}
          >
            Pubblica
          </Button>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default AddComment;
