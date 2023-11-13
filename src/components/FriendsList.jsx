import { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { PencilFill } from "react-bootstrap-icons"
import { PersonAdd } from "react-bootstrap-icons"

const FriendsList = () => {
    const [newFriends, setNewFriends] = useState([])
    const fetchNewPeople = async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMzg2YWM1NWU3ZTAwMThmODNjOTciLCJpYXQiOjE2OTk4ODcyMTEsImV4cCI6MTcwMTA5NjgxMX0.F7YOFaKr5r_ooi9MtCQW3eMR0hwlquEveG5fT4LsotU"
                }
            })
            if (res.ok) {
                const data = await res.json()
                setNewFriends(data)
            } else {
                throw new Error('error retrieving data')
            }
        } catch (error) {
            console.log('problem:', error)
        }
    }
    useEffect(() => {
        fetchNewPeople()
    }, [])
    useEffect(() => {
        console.log('array di amici', newFriends)
    }, [newFriends])
    return (
        <>
            <Col xs={0} md={4} lg={3}>
                <div className="border border-2 border-secondary-subtle p-2 rounded rounded-2 bg-white mb-3">
                    <Row className="justify-content-between">
                        <Col><h6 style={{ whiteSpace: 'nowrap' }}>Lingua del profilo</h6></Col>
                        <Col className="d-flex justify-content-end"><PencilFill className="cursor-pointer" /></Col>
                    </Row>
                    <Row>
                        <Col className="grigio">
                            Italiano
                        </Col>
                    </Row>
                    <hr className="mx-2" />
                    <Row className="justify-content-between">
                        <Col><h6>Public&nbsp;profile & URL</h6></Col>
                        <Col className="d-flex justify-content-end"><PencilFill className="cursor-pointer" /></Col>
                    </Row>
                    <Row>
                        <Col className="grigio">
                            https://www.linkedin.com/in/ strive-school-09328705702570b/
                        </Col>
                    </Row>
                </div>
                <div className="border border-2 border-secondary-subtle p-2 rounded rounded-2 bg-white mb-3 ps-4">
                    <Row>
                        <Col><p id="pcpc" className="mb-0">Persone che potresti conoscere</p></Col>
                    </Row>
                    <Row>
                        <Col className="grigio">Della tua scuola o università</Col>
                    </Row>
                    {
                        (newFriends.length > 0) && newFriends.slice(2, newFriends.length).map((fr) => {
                            return (
                                <Row key={fr._id} className="justify-content-start my-2">
                                    <Col className="d-flex">
                                        <div>
                                            <img src={fr.image} alt="ciao" width="30px" className="rounded-circle me-2" />
                                        </div>
                                        <div>
                                            <p className="fw-bold m-0">{fr.name}&nbsp;{fr.surname}</p>
                                            <p className="m-0">{fr.title}</p>
                                            <div id="fr-add-btn" className="btn border border-2 border-secondary rounded-pill"><PersonAdd className="mb-1" /> Collegati</div>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </div>
            </Col>
        </>
    )
}

export default FriendsList