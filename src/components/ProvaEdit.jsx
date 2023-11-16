import { Pencil } from "react-bootstrap-icons";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import EditPostProfileModal from "./EditPostProfileModal";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ProvaEdit = ({ post, fetchData }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const location = useLocation();
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
    <div className="col-12 mb-4 border-bottom pb-3">
      <div>
        <span className="spanNamePost">{post.username}</span>{" "}
        <span className="spanDatePost">
          ha pubblicato questo post · {calcolaDifferenza(post.createdAt)}{" "}
        </span>
      </div>
      <div className="d-flex">
        {post.image ? (
          <div className="me-2">
            <img
              src={post.image ? post.image : null}
              alt=""
              width={"65px"}
              className="pt-1 rounded"
            />
          </div>
        ) : null}
        <div className="me-auto mt-2">{post.text}</div>

        <div className="">
          {location.pathname === "/attEdit" ? (
            <>
              <Pencil
                size={20}
                onClick={handleShowEdit}
                className="cursorPointerForAll"
              >
                {" "}
              </Pencil>{" "}
              <EditPostProfileModal
                show={showEdit}
                onHide={handleCloseEdit}
                postD={post._id}
                postT={post.text}
                fetchData={fetchData}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ProvaEdit;
