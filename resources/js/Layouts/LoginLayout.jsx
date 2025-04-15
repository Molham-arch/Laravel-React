import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function LoginLayout({ children }) {
    return (
        <>
            <Navbar expand="lg" bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="/">BitBin - Guest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/show">Get code</Nav.Link>
                            <Nav.Link href="/allsnippets">All snippets</Nav.Link>
                            <Nav.Link href="/faq">FAQ's</Nav.Link>

                        </Nav>
                        <Nav className='ms-auto'>
                            <Nav.Link href="/login" className='rounded px-3 py-2 bg-primary mx-2 btn-login d-flex align-items-center' active>Login</Nav.Link>
                            <Nav.Link href="/register" className='rounded px-3 py-2 bg-success mx-2 btn-register d-flex align-items-center' active>Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main className='m-0'>
                {children}
            </main>
        </>
    );
}