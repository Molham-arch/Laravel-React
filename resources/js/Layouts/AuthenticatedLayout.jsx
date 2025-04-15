import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BitbinFooter from './Footer';

export default function AuthenticatedLayout({ children }) {
    return (
        <>
            <Navbar expand="lg" bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">BitBin - auth</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/show">Get code</Nav.Link>
                            <Nav.Link href="/allsnippets">All snippets</Nav.Link>
                            <Nav.Link href="/faq">FAQ's</Nav.Link>
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>

                        </Nav>
                        <Nav className='ms-auto'>
                            <NavDropdown title="Account" id="basic-nav-dropdown" className='bg-primary rounded border' active>
                                <NavDropdown.Item href="/profile">profile</NavDropdown.Item>
                                <NavDropdown.Item href="#">My Snippets</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/login">
                                    Log out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>{children}</main>

            <BitbinFooter></BitbinFooter>
        </>
    );
}
