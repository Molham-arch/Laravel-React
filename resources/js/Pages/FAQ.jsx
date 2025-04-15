import MasterLayout from '@/Layouts/MasterLayout';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { Head } from '@inertiajs/react';


export default function FAQ() {
    return (
        <>
            <Head>
                <title>FAQ</title>
                <link rel='icon' href='/assets/BitBin.png' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
            </Head>
            <MasterLayout>
                <Container className="bg-light text-white py-3" fluid style={{ minHeight: "calc(100vh - 298px)" }}>
                    <Row className="text-center mb-4">
                        <h4>FAQ (Frequently Asked Questions)</h4>
                    </Row>
                    <Row className='mt-4 d-flex justify-content-center'>
                        <Col md={10}>
                            <Accordion defaultActiveKey={['0']} alwaysOpen className='shadow'>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>What is BitBin all about?</Accordion.Header>
                                    <Accordion.Body>
                                        BitBin is a simple, fast, and friendly way to share code with friends and colleagues. BitBin lets you paste, share and collaborate - no clutter, just clean code sharing for teams, devs and anyone who develops.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>How does BitBin work?</Accordion.Header>
                                    <Accordion.Body>
                                        BitBin lets you share your code with other people by saving your snippet (piece of code) in our database, and generating a link to that specific paste. If it's a public paste, everyone can view your paste. If it's unlisted, only people with the link to your paste can view it. If it's private, only you can see your paste.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='2'>
                                    <Accordion.Header>Where can i see my pastes?</Accordion.Header>
                                    <Accordion.Body>
                                        You can get a list of all the pastes you have created, by going to the "My Pastes" section on your profile.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='3'>
                                    <Accordion.Header>Do I need an account to post pastes?</Accordion.Header>
                                    <Accordion.Body>
                                        No, you do not need an account to post pastes. However, you can't edit or delete anything you create while not logged in.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='4'>
                                    <Accordion.Header>Who can see my pastes?</Accordion.Header>
                                    <Accordion.Body>
                                        That depends on the visibility of your paste, if it's public: everyone can see your paste, if it's unlisted: only people with the link to your paste will be able to see your paste, if it's private: only you can see your paste.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='5'>
                                    <Accordion.Header>How long do my pastes stay online?</Accordion.Header>
                                    <Accordion.Body>
                                        Your pastes will stay online until you delete it :)
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='7'>
                                    <Accordion.Header>How many pastes can I create?</Accordion.Header>
                                    <Accordion.Body>
                                        You can create as many pastes as you like.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey='6'>
                                    <Accordion.Header>How do I delete my account?</Accordion.Header>
                                    <Accordion.Body>
                                        You can delete your account at any time by going to <a className='profile-link' href='/profile'>this page</a>. You will be asked to log into your account (if you're not logged in yet).
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </MasterLayout>
        </>
    );
}