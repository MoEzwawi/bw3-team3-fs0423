// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1MTcxMTFlNDM0YzAwMTkzZTJiNDkiLCJpYXQiOjE3MDAwNzUyODEsImV4cCI6MTcwMTI4NDg4MX0.8k33JRftomyJqlhHoUr2M7taWyBPVzPEm6Czf4AR2Mw

import { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";

const Comment = ({ postId, didyoucomment, setDidYouComment }) => {
  const [commenti, setCommenti] = useState([]);

  useEffect(() => {
    Com();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("io sono didyoucomment", didyoucomment);
    if (didyoucomment) {
      Com();
      setDidYouComment(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [didyoucomment]);

  const Com = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1MTcxMTFlNDM0YzAwMTkzZTJiNDkiLCJpYXQiOjE3MDAwNzUyODEsImV4cCI6MTcwMTI4NDg4MX0.8k33JRftomyJqlhHoUr2M7taWyBPVzPEm6Czf4AR2Mw ",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("comments", res);
          return res.json();
        } else {
          throw new Error("errore get");
        }
      })
      .then((result) => {
        console.log("risultato", result);
        setCommenti(result.filter((c) => c.elementId === postId));
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <Col>
      {commenti.map((c) => {
        console.log("i commenti", c);
        return (
          <ListGroup key={c._id}>
            <ListGroup.Item>{c.comment}</ListGroup.Item>
            <ListGroup.Item>{c.author}</ListGroup.Item>
          </ListGroup>
        );
      })}
    </Col>
  );
};

export default Comment;

// .filter((c) => c.elementId === postId)
