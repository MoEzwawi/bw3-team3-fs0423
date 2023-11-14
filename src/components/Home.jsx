import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import SinglePost from './SinglePost';
import { InfoSquareFill, CaretDownFill, PlusLg } from 'react-bootstrap-icons';




const Home = () => {
    const [postData, setPostData] = useState([]);
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
            console.log(data)
        } catch (error) {
            console.error('Errore durante la richiesta GET:', error.message);
        }
    };



    useEffect(() => {
        fetchData();
    }, []);

    return (

        <Container className='mt-4'>
            <Row>
                <Col className='d-none d-md-block' xs={3}> 
                    <div
                        id="small-profile-home"
                        className="border border-1 border-secondary-subtle rounded rounded-2 bg-white bord pb-3"
                    >
                        <div className="cont">
                            <img
                                src=" https://fotografiaartistica.it/wp-content/uploads/2019/06/nasa-immagini-gratuite-dello-spazio.jpg"
                                alt="spazio sfondo" id='copertina-home' className='rounded-top-2'
                            />
                            <img className="pro-home" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="profile-pic" />
                        </div>

                        <div className="ma">
                            <h4>
                                Mohamed Ezwawi
                            </h4>
                            <div>
                                <h5>Mestiere:</h5>
                                <p>Professore</p>
                            </div>
                            <div>
                                <h5>Email:</h5>
                                mo@ez.it
                                <h5>Bio:</h5>
                                Forza Giuvee
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 rounded rounded-2 border border-1 border-secondary-subtle bg-white background-columns" style={{ width: '280px' }}>
                        <div className="d-flex flex-column mt-3">
                            <p className="text-primary ms-4">Gruppi</p>
                            <div className="d-flex justify-content-between">
                                <p className="text-primary ms-4">Eventi</p>
                                <PlusLg className="me-4" />
                            </div>
                            <p className="text-primary ms-4 cursor">Hashtag Seguiti</p>
                            <div>
                                <hr></hr>
                                <p className="text-secondary text-center cursor">Scopri di più</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={6}>
                    {postData.map(post => (
                        < Row className='justify-content-center grow-0' key={post._id}>
                            <SinglePost image={post.user.image} username={post.username}
                                date1={post.createdAt} text={post.text} date2={post.updatedAt}
                                id={post._id} />

                        </Row >
                    ))
                    }
                </Col>
                <Col xs={3} className='mt-1 d-none d-md-block'>
                    <div className="border border-1 border-secondary-subtle p-2 rounded rounded-2 bg-white mb-3">
                        <Row className="justify-content-between">
                            <Col className='d-flex justify-content-between '>
                                <h6 style={{ whiteSpace: 'nowrap' }}>LinkedIn Notizie</h6>
                                <InfoSquareFill className="cursor-pointer" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul id='news-list'>
                                    <li>Batterie al litio: Svolta nell'autonomia veicoli</li>
                                    <li>IA diagnostica: La precisione nel cancro</li>
                                    <li>Blockchain: Sicurezza e innovazione finanziaria</li>
                                    <li>Veicoli autonomi: Rivoluzione per la mobilità</li>
                                    <li>IoT: Trasformazione dell'industria manifatturiera</li>
                                </ul>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Mostra dettagli <CaretDownFill /></Accordion.Header>
                                        <Accordion.Body>
                                            <ul id='news-list'>
                                                <li>Supercomputer record: Acceleratore per la ricerca</li>
                                                <li>5G avanzato: Cambio nel mondo tecnologico</li>
                                                <li>Cybersecurity: Protezione avanzata per organizzazioni</li>
                                                <li>Realità aumentata: Rivoluzione nell'istruzione interattiva</li>
                                                <li>AI in sanità: Diagnosi precise e personalizzate</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
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