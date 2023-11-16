import { Col } from "react-bootstrap";
import {
  HandThumbsUp,
  HandThumbsUpFill,
  ChatText,
  Share,
  SendFill,
} from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import Comment from "./Comment";
import AddComment from "./AddComment";

const SinglePost = ({ image, username, date1, text, date2, id }) => {
  const [liked, setLiked] = useState(false);
  const [click, setClick] = useState(false);
  const [didyoucomment, setDidYouComment] = useState(false);

  function formatData(dataString) {
    const data = new Date(dataString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return data.toLocaleDateString("it-IT", options);
  }
  function calcolaDifferenza(data) {
    const adesso = new Date();
    const dataDiPubblicatione = new Date(data);
    const differenzaGiorni = differenceInDays(adesso, dataDiPubblicatione);
    if (differenzaGiorni === 0) {
      const differenzaOre = differenceInHours(adesso, dataDiPubblicatione);

      if (differenzaOre === 0) {
        const differenzaMinuti = differenceInMinutes(
          adesso,
          dataDiPubblicatione
        );
        if (differenzaMinuti === 0) {
          return differenceInSeconds(adesso, dataDiPubblicatione) + " secondi";
        }
        return differenzaMinuti + " minuti";
      }

      return differenzaOre + " ore";
    }

    return differenzaGiorni + " giorni";
  }

  return (
    <Col
      className="d-sm border border-1 border-secondary-subtle mb-1 mt-1 bg-white rounded col-md-6  pt-2 ms-3"
      style={{ width: "90%" }}
    >
      <p style={{ fontSize: 1 + "em", fontWeight: "bold", margin: 0.2 + "em" }}>
        {image ? (
          <img
            src={image}
            className="rounded-circle me-2"
            alt="avatar"
            width={40 + "px"}
          />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            className="rounded-circle me-2"
            alt="avatar"
            width={40 + "px"}
          />
        )}
        {username}
      </p>
      <p style={{ fontSize: 0.7 + "em" }}>{calcolaDifferenza(date1)}</p>
      <p style={{ fontSize: 1 + "em" }}>{text}</p>
      <p style={{ fontSize: 0.7 + "em", margin: 0.2 + "em" }}>
        Ultimo aggiornamento: {formatData(date2)}
      </p>
      <p style={{ fontSize: 0.7 + "em" }}>ID: {id}</p>
      <hr />
      <div className="d-flex flex-wrap ">
        <p
          onClick={() => setLiked(!liked)}
          className="align-items-start align-text-center me-3 interazioni p-1 pb-1 cursor-pointer"
        >
          {liked ? (
            <HandThumbsUpFill className="align-center me-1 text-info" />
          ) : (
            <HandThumbsUp className="align-center me-1" />
          )}
          Consiglia
        </p>{" "}
        {/* Stato per mettere like */}
        <p
          onClick={() => {
            setClick(!click);
          }}
          className="align-items-start align-text-center me-3 interazioni p-1 pb-1 cursor-pointer"
        >
          <ChatText className="align-center me-1 " />
          Commenta
        </p>
        <p className="align-items-start align-text-center me-3 interazioni p-1 pb-1 cursor-pointer">
          <Share className="align-center me-1" />
          Diffondi il SinglePost
        </p>
        <p className="align-items-start align-text-center interazioni p-1 pb-1 cursor-pointer">
          <SendFill className="align-center me-1" />
          Invia
        </p>
      </div>
      <hr />
      {click && (
        <AddComment
          postId={id}
          setDidYouComment={setDidYouComment}
          didyoucomment={didyoucomment}
        />
      )}
      {click && (
        <Comment
          postId={id}
          didyoucomment={didyoucomment}
          setDidYouComment={setDidYouComment}
        />
      )}
    </Col>
  );
};

export default SinglePost;
