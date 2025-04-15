import { Container, Row, Col } from "react-bootstrap";
import { Telephone, Envelope, GeoAlt, Facebook, TwitterX, Instagram, Youtube, Linkedin, Tiktok } from "react-bootstrap-icons";

export default function BitbinFooter() {
    return (
        <>
            <footer className="bg-dark text-white mb-0 p-3">
                <Container fluid>
                    <Row className="pb-3 pt-2 text-center text-lg-start d-flex justify-content-center">
                        <Col className="col-5 col-md-3">
                            <h3>We are BitBin</h3>
                            <p className="small">A simple, fast, and friendly way to share code with friends and colleagues. BitBin lets you paste, share and collaborate - no clutter, just clean code sharing for teams, devs and anyone who develops.</p>
                        </Col>

                        <Col className="col-5 col-md-3">
                            <h5>Navigation: </h5>
                            <a href="/">Home</a><br />
                            <a href="/getcode">Get Code</a><br />
                            <a href="/allsnippets">All snippets</a><br />
                            <a href="/faq">FAQ's</a><br />
                        </Col>

                        <Col className="col-5 col-md-3 text-white pt-3 pt-md-0">
                            <h5>Contact us:</h5>
                            <p className="small"><Telephone/> : +31 123456789</p>
                            <p className="small"><Envelope/> : Help@BitBin.com</p>
                            <p className="small"><GeoAlt/> : Harmonielaan 1, Nieuwegein</p>
                        </Col>

                        <Col className="col-5 col-md-3 text-white pt-3 pt-md-0">
                            <h5>Follow us:</h5>
                            <div className="d-flex justify-content-between">
                                <Facebook/>
                                <TwitterX/>
                                <Instagram/>
                                <Youtube/>
                                <Linkedin/>
                                <Tiktok/>
                            </div>
                        </Col>


                    </Row>
                    <Row>
                        <p className="small text-muted">By using BitBin you agree to our <span style={{color: "lightgray"}}>cookies-policy</span> to enchance your experience</p>
                    </Row>
                </Container>
            </footer>
        </>
    );
}
