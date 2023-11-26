import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Component } from 'react';





class FakeNav extends Component {
    render() {
        console.log(this.props.setGenre)
        return (
            <Navbar expand="md" className="container-fluid z-3 bg-secondary position-sticky top-0 border-bottom border-3 border-black">
                <Container className='d-flex justify-content-around'>
                    <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
                        <Nav>
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Browse</Nav.Link>
                        </Nav>
                        <NavDropdown title="Select genre" id="basic-nav-dropdown" className='me-5'>
                            <NavDropdown.Item onClick={() => { this.props.setGenre('Scifi') }}>Scifi</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { this.props.setGenre('Fantasy') }}>Fantasy</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { this.props.setGenre('History') }}>History</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { this.props.setGenre('Horror') }}>Horror</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { this.props.setGenre('Romance') }}>Romance</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        );
    }
}

export default FakeNav;