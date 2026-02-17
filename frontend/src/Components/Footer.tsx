import { Container, Row, Col } from "react-bootstrap"
import { FaBookOpen } from "react-icons/fa"

function Footer() {
    return (
        <footer className="bg-blue-900 text-white mt-5 pt-4 pb-3">
            <Container>
                <Row>

                    {/* Left Section */}
                    <Col md={4} className="mb-3">
                        <h5 className="fw-bold d-flex align-items-center gap-2">
                            <FaBookOpen className="text-warning" />
                            BookfairZone
                        </h5>
                        <p className="small">
                            Your online platform to reserve stalls and explore
                            amazing literary collections.
                        </p>
                    </Col>

                    {/* Middle Section */}
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li>Home</li>
                            <li>Stalls</li>
                            <li>Employee Portal</li>
                        </ul>
                    </Col>

                    {/* Right Section */}
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">Contact</h6>
                        <p className="small mb-1">Email: info@bookfairzone.com</p>
                        <p className="small mb-0">Phone: +94 77 123 4567</p>
                    </Col>

                </Row>

                <hr className="border-light" />

                <p className="text-center small mb-0">
                    © {new Date().getFullYear()} BookfairZone. All rights reserved.
                </p>
            </Container>
        </footer>
    )
}

export default Footer;
