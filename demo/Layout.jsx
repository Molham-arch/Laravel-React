import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Layout({ children }) {
  return <>
    <a className="visually-hidden-focusable" href="#demo-main">Skip to content</a>
    <Navbar expand="md" bg="dark" variant="dark"><Container>
      <Navbar.Brand href="/">BitBin <span className="badge text-bg-secondary fs-6">Demo</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="demo-navigation" />
      <Navbar.Collapse id="demo-navigation"><Nav className="me-auto">
        <Nav.Link href="/">Create snippet</Nav.Link><Nav.Link href="/allsnippets">All snippets</Nav.Link>
        <Nav.Link href="/getcode">Find snippet</Nav.Link><Nav.Link href="/faq">About this demo</Nav.Link>
      </Nav><Nav.Link className="text-white" href="https://www.molham.tech/#work">Molham’s portfolio ↗</Nav.Link></Navbar.Collapse>
    </Container></Navbar>
    <div className="demo-notice" role="note"><Container><strong>Interactive portfolio demo.</strong> Snippets are saved only in this browser. Visibility settings are a preview; there are no accounts or shared links.</Container></div>
    <main id="demo-main">{children}</main>
    <footer className="py-4 border-top border-secondary text-center text-white"><Container>BitBin · Built with Laravel + React by Molham<br/><a href="https://github.com/Molham-arch/Laravel-React" className="text-decoration-underline">View the full project on GitHub ↗</a></Container></footer>
  </>;
}
