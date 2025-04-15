import { Container, Row, Col, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import MasterLayout from '@/Layouts/MasterLayout';
import Form from 'react-bootstrap/Form';
import { Head, useForm } from '@inertiajs/react';

export default function Welcome() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        description: '',
        CodingLanguage: '',
        visibility: 1, // default to public
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/snippets', {
            onSuccess: () => {
                // Succesvolle redirect wordt geregeld door Laravel controller
            },
        });
    };

    return (
        <>
            <MasterLayout>
                <Head>
                    <title>Home</title>
                </Head>

                <Container className='bg-light py-3 text-white' fluid style={{ minHeight: "calc(100vh - 318px)" }}>
                    <Row className='text-center my-2'>
                        <h1>Welcome to BitBin</h1>
                    </Row>

                    <Form onSubmit={handleSubmit}>
                        <Row className='d-flex justify-content-center'>
                            <Col className='col-11 col-md-10'>
                                <Form.Label>Paste your code here:</Form.Label>
                                <Form.Control
                                    className='bg-light shadow'
                                    as="textarea"
                                    style={{ height: '40vh', color: "white" }}
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                />
                                {errors.content && <div className="text-danger">{errors.content}</div>}
                            </Col>
                        </Row>

                        <Row className='d-flex justify-content-center mt-4'>
                            <Col className='col-11 col-md-5'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    className='bg-light text-white mb-2 shadow'
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                {errors.title && <div className="text-danger">{errors.title}</div>}

                                <Form.Label className='mt-2'>Syntax highlight</Form.Label>
                                <Form.Select
                                    className='mb-2 shadow costum-select'
                                    value={data.CodingLanguage}
                                    onChange={(e) => setData('CodingLanguage', e.target.value)}
                                >
                                    <option value="">None</option>
                                    <option value="PHP">PHP</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="Html">Html</option>
                                    <option value="Python">Python</option>
                                    <option value="Css">Css</option>
                                    <option value="C#">C#</option>
                                    <option value="C">C</option>
                                    <option value="C++">C++</option>
                                </Form.Select>
                                {errors.CodingLanguage && <div className="text-danger">{errors.CodingLanguage}</div>}

                                <Form.Label className='mt-2'>Paste exposure</Form.Label>
                                <ButtonGroup className="d-flex gap-2 mb-2">
                                    {[{ label: '🌍 Public', value: 1, variant: 'outline-success' },
                                      { label: '🔗 Unlisted', value: 2, variant: 'outline-warning' },
                                      { label: '🔒 Private', value: 3, variant: 'outline-danger' }].map(option => (
                                        <ToggleButton
                                            key={option.value}
                                            id={`visibility-${option.value}`}
                                            type="radio"
                                            name="visibility"
                                            value={option.value}
                                            variant={option.variant}
                                            checked={data.visibility === option.value}
                                            onChange={(e) => setData('visibility', parseInt(e.currentTarget.value))}
                                        >
                                            {option.label}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>

                                <Button
                                    type="submit"
                                    className='mt-2 text-white border-white shadow'
                                    disabled={processing}
                                >
                                    Create new snippet
                                </Button>
                            </Col>

                            <Col className='col-11 col-md-5'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    className='bg-light shadow'
                                    as="textarea"
                                    style={{ height: "211px", color: "white" }}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                                {errors.description && <div className="text-danger">{errors.description}</div>}
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </MasterLayout>
        </>
    );
}
