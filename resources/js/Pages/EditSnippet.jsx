import MasterLayout from '@/Layouts/MasterLayout';
import { Head, useForm } from '@inertiajs/react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function EditSnippet({ snippet }) {
    const { data, setData, patch } = useForm({
        title: snippet.title,
        content: snippet.content,
        description: snippet.description,
        CodingLanguage: snippet.CodingLanguage,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('snippets.update', snippet.slug));
    };

    return (
        <MasterLayout>
            <Head title="Edit Snippet" />
            <Container style={{ minHeight: 'calc(100vh - 348px)' }} className="py-5">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <Card className="bg-dark text-white shadow">
                            <Card.Header className="border-bottom border-secondary">
                                <h4>Edit Snippet: {snippet.title}</h4>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={data.title}
                                                    onChange={(e) => setData('title', e.target.value)}
                                                    className="bg-dark text-white border-secondary"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={data.description}
                                                    onChange={(e) => setData('description', e.target.value)}
                                                    className="bg-dark text-white border-secondary"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Label>Code</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={10}
                                                    value={data.content}
                                                    onChange={(e) => setData('content', e.target.value)}
                                                    className="bg-dark text-white border-secondary"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="mb-4">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Language</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={data.CodingLanguage}
                                                    onChange={(e) => setData('CodingLanguage', e.target.value)}
                                                    className="bg-dark text-white border-secondary"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className="d-flex justify-content-end">
                                        <Button variant="warning" type="submit" className="text-white">
                                            Update Snippet
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </MasterLayout>
    );
}
