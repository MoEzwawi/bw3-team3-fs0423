import { PersonAdd, PersonCheck } from "react-bootstrap-icons"
import { Col } from "react-bootstrap"
import { useState } from "react"

const SingleFriend = ({ image, name, surname, title }) => {
    const [isAdded, setIsAdded] = useState(false)
    return (
        <Col className="d-flex">
            <div>
                <img src={image} alt="ciao" width="30px" className="rounded-circle me-2" />
            </div>
            <div>
                <p className="fw-bold m-0">{name}&nbsp;{surname}</p>
                <p className="m-0">{title}</p>
                {!isAdded &&
                    <div id="fr-add-btn" onClick={() => {
                        setIsAdded(!isAdded)
                    }} className="btn border border-2 border-secondary rounded-pill"><PersonAdd style={{ fontSize: '1.3em' }} className="mb-1" /> Collegati</div>
                }
                {isAdded &&
                    <div id="fr-add-btn" onClick={() => {
                        setIsAdded(!isAdded)
                    }} className="btn border border-2 border-secondary rounded-pill bg-success"><PersonCheck style={{ fontSize: '1.3em' }} className="mb-1" /> Collegato</div>
                }
            </div>
        </Col>
    )
}

export default SingleFriend