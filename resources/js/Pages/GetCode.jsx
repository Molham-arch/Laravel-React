import { useState } from 'react';
import { router } from '@inertiajs/react';
import MasterLayout from '@/Layouts/MasterLayout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Head } from '@inertiajs/react';

export default function GetCode() {
    const [slug, setSlug] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (slug.trim() !== '') {
            router.get(`/snippets/${slug.trim()}`);
        }
    };

    return (
        <MasterLayout>
            <Head>
                <title>Find Snippet</title>
            </Head>

            <Container style={{ minHeight: 'calc(100vh - 300px)' }} className='text-white'>
                <Row className='justify-content-center mt-5'>
                    <Col md={8} lg={6}>
                        <h2 className='text-center mb-4'>Find Your Snippet</h2>
                        <Form onSubmit={handleSubmit} className='shadow p-4 rounded bg-dark'>
                            <Form.Group>
                                <Form.Label>Enter Snippet Slug or Link:</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='e.g. xYz123ABC or /snippets/xYz123ABC'
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value.replace(/^.*\//, ''))} 
                                />
                            </Form.Group>
                            <Button variant='primary' className='mt-3 w-100' type='submit'>
                                Find Snippet
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </MasterLayout>
    );
}
