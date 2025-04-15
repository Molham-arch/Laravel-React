import MasterLayout from "@/Layouts/MasterLayout";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Head, usePage, Link } from "@inertiajs/react";

export default function ShowAllSnippets() {
    const { props } = usePage();
    const snippets = props.snippets || [];

    return (
        <MasterLayout>
            <Head title="All snippets" />

            <Container fluid style={{ minHeight: "calc(100vh - 294px)" }}>
                <Row className="text-center my-3">
                    <h1>All Snippets</h1>
                </Row>

                <Row className="d-flex justify-content-center">
                    {snippets.map((snippet) => (
                        <Col key={snippet.id} xs={12} md={6} lg={4} className="mb-4">
                            <Card className="bg-light text-white shadow h-100">
                                <Card.Body>
                                    <Card.Title>{snippet.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {snippet.CodingLanguage}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {snippet.description?.slice(0, 80)}...
                                    </Card.Text>
                                    <Link href={`/snippets/${snippet.slug}`}>
                                        <Button variant="primary">View</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </MasterLayout>
    );
}
