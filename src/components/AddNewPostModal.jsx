import { useState, useEffect } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { CardImage, Calendar3, ThreeDots, Clock } from "react-bootstrap-icons";



const AddNewPostModal = ({ show, handleClose, handlePublish }) => {
    const [payload, setPayload] = useState({})
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1MzQ1YjFlNDM0YzAwMTkzZTJiNzgiLCJpYXQiOjE3MDAwODI3ODAsImV4cCI6MTcwMTI5MjM4MH0.pSTz9AHxLWCkT2h5XdVEx1jsmEzLpEKjz3WaTl1wgtc'
    const publishPost = async (content) => {
        try {
            let formData = new FormData()
            formData = content
            const res = await fetch('https://striveschool-api.herokuapp.com/api/posts', {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                console.log(res)
            } else {
                throw new Error('Errore nella pubblicazione del post')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const base64String = e.target.result
                setPayload({ ...payload, image: base64String })
            }
            reader.readAsDataURL(file)
        }
    }
    useEffect(() => {
        console.log('io sono payload', payload)
        if (payload.image) {
            console.log('io sono payload con immagine', payload.image)
        }
    }, [payload])
    return (
        <Row className="justify-content-center mx-1">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className="d-flex align-items-center gap-3 ms-2">
                        <div>
                            <img
                                src={"http://placekitten.com/50"}
                                width="50px"
                                height="50px"
                                className="rounded-circle"
                                alt="profile-img"
                            />
                        </div>
                        <div>
                            <Modal.Title className="fs-5">
                                {"Nome utente"}
                            </Modal.Title>
                            <p className="mb-0">Pubblica: Chiunque</p>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                        >
                            <Form.Control
                                onChange={(e) => {
                                    setPayload({ ...payload, text: e.target.value });
                                }}
                                as="textarea"
                                className="border-0 fs-5"
                                rows={10}
                                placeholder="Di cosa vorresti parlare?"
                            />
                        </Form.Group>
                    </Form>
                    <div className="d-flex gap-2 fs-4">
                        <div
                            className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
                            style={{ width: "50px", height: "50px" }}
                        >
                            <Form.Group className="mb-3" style={{ position: 'relative' }}>
                                <CardImage style={{ position: 'absolute', top: '31%', left: '20%', fontSize: '1.2em' }} />
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ opacity: '0' }}
                                />
                            </Form.Group>

                        </div>
                        <div
                            className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
                            style={{ width: "50px", height: "50px" }}
                        >
                            <Calendar3 />
                        </div>
                        <div
                            className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
                            style={{ width: "50px", height: "50px" }}
                        >
                            <ThreeDots />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Clock className="fw-bold fs-5 me-3" />
                    <Button
                        variant="primary"
                        className="rounded-pill py-1"
                        onClick={() => {
                            publishPost(payload);
                            handlePublish()
                        }}
                    >
                        Pubblica
                    </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
}

export default AddNewPostModal