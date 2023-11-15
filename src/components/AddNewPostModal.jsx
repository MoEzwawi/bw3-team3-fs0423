// import { useEffect, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { CardImage, Calendar3, ThreeDots, Clock } from "react-bootstrap-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";


const AddNewPostModal = ({ show, handleClose }) => {
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
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control
                                onChange={(e) => {
                                    e.preventDefault();
                                    // setTextArea(e.target.value);
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
                            <CardImage />
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
                            // sendPost();
                            handleClose();
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