import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header({ isAuthenticated }) {
    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    KSV
                </Navbar.Brand>
                {isAuthenticated && (
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Items</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/templates">
                        <Nav.Link>Templates</Nav.Link>
                    </LinkContainer>
                </Nav>
                )}
            </Container>
        </Navbar>
    )
}
