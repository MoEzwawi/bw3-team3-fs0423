import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Dropdown } from 'react-bootstrap';
import SinglePost from './SinglePost';
import { InfoSquareFill, CaretDownFill, PlusLg, BookmarkFill, CardImage, Calendar3, Postcard } from 'react-bootstrap-icons';
import CustomAccordion from './CustomAccordion';
import AddNewPostModal from './AddNewPostModal';



const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handlePublish = () => {
        setShowModal(false)
        fetchData()
    }
    const handleShow = () => setShowModal(true);
    const [isRecent, setIsRecent] = useState(true);
    const [postData, setPostData] = useState([]);
    const [recentPostData, setRecentPostData] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                method: 'GET',

                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzMmUxMWRkOTllZjAwMTlhMDkyZWYiLCJpYXQiOjE2OTk5NTAwOTcsImV4cCI6MTcwMTE1OTY5N30.0Lrp33zzPyoU9V1bSkuoimzq5n89mmTJkFLONrDUqQI",
                    'Content-Type': 'application/json',
                },

            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta GET');
            }

            const data = await response.json();
            setPostData(data);
            setRecentPostData(Array.from(data).reverse())
            console.log('io sono data', data)
        } catch (error) {
            console.error('Errore durante la richiesta GET:', error.message);
        }
    };



    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        console.log('postData', postData)
        console.log('recentPostData', recentPostData)
        console.log('post con immagini', recentPostData.filter(el => el.image))
    }, [postData]);

    return (

        <Container className='mt-4'>
            <Row>
                <Col className='d-none d-md-block p-0' xs={2}>
                    <div
                        id="small-profile-home"
                        className="border border-1 border-secondary-subtle rounded rounded-2 bg-white bord pb-3 w-100"
                    >
                        <div className="cont">
                            <img
                                src=" https://fotografiaartistica.it/wp-content/uploads/2019/06/nasa-immagini-gratuite-dello-spazio.jpg"
                                alt="spazio sfondo" height={'66px'} className='rounded-top-2'
                            />
                            <img className="pro-home-md" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="profile-pic" />
                        </div>

                        <div className="ma text-center ms-0">
                            <h6>
                                Mohamed Ezwawi
                            </h6>
                            <p className='grigio-md-home'>Professore presso BOH</p>
                            <hr className='mx-2' />
                            <div className="mt-4">
                                <div className="d-flex justify-content-between p-3">
                                    <p className="text-secondary mb-0" style={{ fontSize: '0.8em' }}>Collegamenti</p>
                                    <span className="text-primary" style={{ fontSize: '0.8em' }}>7</span>
                                </div>
                                <div>
                                    <p className='mb-0 me-auto' style={{ fontSize: '0.8em' }}>Espandi la tua rete</p>
                                </div>

                                <hr></hr>
                                <p className="text-secondary ">
                                    Accedi a strumenti e informazioni in esclusiva
                                </p>
                                <p className="text-decoration-underline">Prova Premium Gratis</p>
                                <hr></hr>
                                <p>
                                    {" "}
                                    <BookmarkFill /> I miei elementi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 rounded rounded-2 border border-1 border-secondary-subtle bg-white background-columns w-100" style={{ width: '280px' }}>
                        <div className="d-flex flex-column mt-3">
                            <p className="text-primary ms-4">Gruppi</p>
                            <div className="d-flex justify-content-between">
                                <p className="text-primary ms-4">Eventi</p>
                                <PlusLg className="me-4" />
                            </div>
                            <p className="text-primary ms-4 cursor">Hashtag Seguiti</p>
                            <div>
                                <hr />
                                <p className="text-secondary text-center cursor">Scopri di più</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={10} lg={7} className='p-0'>
                    <Row className='justify-content-center w-100 d-md-none p-0'>
                        <Col className="cont mb-2">
                            <img
                                src=" https://fotografiaartistica.it/wp-content/uploads/2019/06/nasa-immagini-gratuite-dello-spazio.jpg"
                                alt="spazio sfondo" id='copertina-home' height={'80px'} className='rounded-top-2'
                            />
                            <img className="pro-home" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="profile-pic" />
                            <div className='bg-white text-center border border-1 rounded-bottom-2'>
                                <h5 className='mt-5'>
                                    Mohamed Ezwawi
                                </h5>
                                <p className='text-secondary' style={{ fontSize: '0.9em' }}>Professore presso BOH</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center w-100'>
                        <Col className='d-sm border border-1 border-secondary-subtle mb-1 mt-1 bg-white rounded col-md-6  p-2 ms-3' style={{ width: '90%' }}>
                            <div className="d-flex gap-3 align-items-center">
                                <div className="mb-3 cursor">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                        width="50px"
                                        height="50px"
                                        alt="profile-img"
                                        className="rounded-circle"
                                    />
                                </div>
                                <Form className="flex-grow-1">
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            id="control-input"
                                            type="email"
                                            placeholder="Avvia un post"
                                            className="rounded-pill py-3 px-3 cursor"
                                            onClick={handleShow}
                                        />
                                    </Form.Group>
                                </Form>
                            </div>
                            <AddNewPostModal show={showModal} handleClose={handleClose} handlePublish={handlePublish} />
                            <div className="d-flex justify-content-evenly">
                                <div className="d-flex align-items-center gap-2 cursor">
                                    <CardImage className="text-primary" />
                                    <p className="mb-0">Contenuti multimediali</p>
                                </div>
                                <div className="d-flex align-items-center gap-2 cursor me-4">
                                    <Calendar3 className="text-warning" />

                                    <p className="mb-0">Evento</p>
                                </div>

                                <div className="d-flex align-items-center gap-2 cursor">
                                    <Postcard className="text-danger" />
                                    <p className="mb-0">Scrivi un articolo</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center w-100'>
                        <Col style={{ width: '90%' }} className='mt-2 mb-0 me-3'>
                            <div className="d-flex align-items-center justify-content-end" id="select-feed">
                                <hr />
                                <div className="cursor">
                                    Seleziona la visualizzazione dei feed:
                                    <Dropdown className='d-inline'>
                                        <Dropdown.Toggle className='ps-0' style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }}>
                                            {isRecent ? (
                                                <strong className="ms-1">Più recenti per primi</strong>) : (<strong className="ms-1">Meno recenti per primi</strong>)}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => {
                                                setIsRecent(true)
                                            }}>Più recenti per primi</Dropdown.Item>
                                            <Dropdown.Item onClick={() => {
                                                setIsRecent(false)
                                            }}>Meno recenti per primi</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {!isRecent && postData.map(post => (
                        < Row className='justify-content-center grow-0 w-100' key={post._id}>
                            <SinglePost postImage={post.image} image={post.user.image} username={post.username}
                                date1={post.createdAt} text={post.text} date2={post.updatedAt}
                                id={post._id} />

                        </Row >
                    ))
                    }
                    {isRecent && recentPostData.map(post => (
                        < Row className='justify-content-center grow-0 w-100' key={post._id}>
                            <SinglePost postImage={post.image} image={post.user.image} username={post.username}
                                date1={post.createdAt} text={post.text} date2={post.updatedAt}
                                id={post._id} />

                        </Row >
                    ))
                    }
                </Col>
                <Col xs={3} className='mt-1 d-none d-lg-block p-0'>
                    <div className="border border-1 border-secondary-subtle p-2 rounded rounded-2 bg-white mb-3">
                        <Row className="justify-content-between">
                            <Col className='d-flex justify-content-between '>
                                <h6 style={{ whiteSpace: 'nowrap' }}>LinkedIn Notizie</h6>
                                <InfoSquareFill className="cursor-pointer" />
                            </Col>
                        </Row>
                        <Row>
                            <CustomAccordion />
                        </Row>
                    </div>
                    <Row>
                        <Col id="footer-sidebar">
                            <div className="d-flex gap-3 justify-content-center ">
                                <p className="text-secondary mb-0">Informazioni</p>
                                <p className="text-secondary mb-0">Accessibilità</p>
                            </div>

                            <div className="d-flex gap-3 justify-content-center ">
                                <p className="text-secondary mb-0 text-center">Centro Assistenza </p>
                                <p className="text-secondary mb-0 text-center">
                                    Privacy e condizioni <CaretDownFill />
                                </p>
                            </div>

                            <div className="d-flex gap-3 justify-content-center ">
                                <p className="text-secondary mb-0">
                                    Opzioni per gli annunci pubblicitari
                                </p>
                            </div>

                            <div className="d-flex gap-3 justify-content-center ">
                                <p className="text-secondary mb-0">
                                    Servizi alle aziende <CaretDownFill />
                                </p>
                                <p className="text-secondary mb-0">Pubblicità</p>
                            </div>

                            <div className="d-flex gap-3 justify-content-center ">
                                <p className="text-secondary mb-0">Scarica app Linkedln</p>
                                <p className="text-secondary mb-0">Altro</p>
                            </div>

                            <div className="text-secondary d-flex gap-1 justify-content-center">
                                <img
                                    src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
                                    alt="Immagine copy"
                                    width="20%"
                                    className="mt-1"
                                />
                                <p className="align-self-baseline  mb-0 mt-2">
                                    LinkedIn Corporation &copy; {new Date().getFullYear()}
                                </p>
                            </div>

                        </Col>
                    </Row>
                </Col >
            </Row >
        </Container >
    );
};

export default Home;