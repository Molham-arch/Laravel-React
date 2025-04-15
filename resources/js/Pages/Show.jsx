import MasterLayout from '@/Layouts/MasterLayout';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { Head, usePage, Link, router } from '@inertiajs/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { route } from 'ziggy-js';

export default function Show() {
  const { props } = usePage();
  const snippet = props.snippet;
  const codeRef = useRef();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCopy = () => {
    if (codeRef.current) {
      const textToCopy = codeRef.current.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        toast.success('✅ Code copied to clipboard!', {
          position: 'bottom-right',
          autoClose: 3000,
          theme: 'dark',
        });
      });
    }
  };

  const confirmDelete = () => {
    router.delete(route('snippets.destroy', { slug: snippet.slug }), {
      onSuccess: () => {
        toast.success('🗑️ Snippet deleted!', {
          position: 'bottom-right',
          theme: 'dark',
        });
      },
    });
    setShowConfirm(false);
  };

  const handleDownload = () => {
    const extension = snippet.CodingLanguage.toLowerCase();
    const blob = new Blob([snippet.content], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${snippet.title}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!snippet) return <div>Loading...</div>;

  return (
    <>
      <MasterLayout>
        <Head>
          <title>{snippet.title}</title>
        </Head>

        <Container fluid style={{ minHeight: 'calc(100vh - 348px)' }}>
          <Row className="d-flex justify-content-center my-5">
            <Col className="col-11 col-lg-6">
              <Card className="bg-light border-white text-white shadow">
                <Card.Body>
                  <Row className="d-flex justify-content-between flex-wrap align-items-center gap-2 mb-4">
                    {/* Action Buttons */}
                    <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                      <Button
                        className="fw-bold text-white px-3 py-2"
                        style={{
                          backgroundColor: '#dc3545',
                          fontSize: '1rem',
                          border: 'none',
                        }}
                        onClick={() => setShowConfirm(true)}
                      >
                        🗑️ Delete
                      </Button>

                      <Link
                        href={route('snippets.edit', { slug: snippet.slug })}
                        className="btn fw-bold text-dark px-3 py-2"
                        style={{ backgroundColor: '#f0a500', fontSize: '1rem' }}
                      >
                        📝 Edit
                      </Link>

                      <Button
                        className="fw-bold text-white px-3 py-2"
                        style={{
                          backgroundColor: '#00cfff',
                          fontSize: '1rem',
                          border: 'none',
                        }}
                        onClick={handleCopy}
                      >
                        📋 Copy
                      </Button>

                      <Button
                        className="fw-bold text-white px-3 py-2"
                        style={{
                          backgroundColor: '#9ee37d',
                          fontSize: '1rem',
                          border: 'none',
                        }}
                        onClick={handleDownload}
                      >
                        💾 Download
                      </Button>
                    </div>
                  </Row>

                  {/* Highlighted Code */}
                  <div ref={codeRef}>
                    <SyntaxHighlighter
                      language={snippet.CodingLanguage.toLowerCase()}
                      style={gruvboxDark}
                    >
                      {snippet.content}
                    </SyntaxHighlighter>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-11 col-md-6">
              <Card className="bg-light border-white text-white">
                <Card.Body>
                  <p>
                    <strong>Language:</strong> {snippet.CodingLanguage}
                  </p>
                  <p>
                    <strong>Visibility:</strong>{' '}
                    {snippet.visibility === 1
                      ? 'Public'
                      : snippet.visibility === 2
                      ? 'Unlisted'
                      : 'Private'}
                  </p>

                  <p>
                    <strong>Description:</strong> {snippet.description}
                  </p>
                </Card.Body>
              </Card>

              <Card className="bg-light border-white text-white mt-4">
                <Card.Header className="border-bottom border-white">
                  Raw Paste Data
                </Card.Header>
                <Card.Body>
                  <pre
                    style={{
                      backgroundColor: '#1e1e1e',
                      color: 'white',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      overflowX: 'auto',
                      maxHeight: '40vh',
                      fontSize: '0.85rem',
                    }}
                  >
                    {snippet.content}
                  </pre>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Toast */}
        <ToastContainer />

        {/* Custom Delete Modal */}
        <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
          <Modal.Header closeButton className="bg-dark text-white">
            <Modal.Title>⚠️ Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">
            Are you sure you want to delete this snippet? This action cannot be
            undone.
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button variant="secondary" onClick={() => setShowConfirm(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </MasterLayout>
    </>
  );
}
