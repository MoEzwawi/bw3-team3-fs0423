import { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
const FriendsList = () => {
    const [newFriends, setNewFriends] = useState([])
    const fetchNewPeople = async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/profile", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMzg2YWM1NWU3ZTAwMThmODNjOTciLCJpYXQiOjE2OTk4ODcyMTEsImV4cCI6MTcwMTA5NjgxMX0.F7YOFaKr5r_ooi9MtCQW3eMR0hwlquEveG5fT4LsotU"
                }
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchNewPeople()
    }, [])
    return (
        <>
            <Col xs={0} md={4} lg={3} className="border border-1 border-black rounded rounded-2 bg-success">
                <Row>
                    <Col><h2>lingua del sistema</h2></Col>
                </Row>
                <Row>
                    <Col><h2>lingua del sistema</h2></Col>
                </Row>
                <Row>
                    <Col><h2>lingua del sistema</h2></Col>
                </Row>
                <Row>
                    <Col><h2>lingua del sistema</h2></Col>
                </Row>
                <Row>
                    <Col><h2>lingua del sistema</h2></Col>
                </Row>

            </Col>
        </>
    )
}

export default FriendsList