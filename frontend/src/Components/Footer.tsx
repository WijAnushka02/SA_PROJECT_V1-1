import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { 
    FaBookOpen, 
    FaFacebookF, 
    FaTwitter, 
    FaInstagram, 
    FaLinkedinIn 
} from "react-icons/fa"

function Footer() {
    return (
        <footer className="modern-footer text-white mt-auto">

            <Container className="py-4">
                <Row>

                    {/* LEFT SECTION */}
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold d-flex align-items-center gap-2">
                            <FaBookOpen className="text-warning" />
                            BookfairZone
                        </h5>
                        <p className="small opacity-75">
                            Reserve your stalls, explore genres and manage your
                            book fair experience easily.
                        </p>
                    </Col>

                    {/* QUICK LINKS */}
                    <Col md={4} className="mb-4">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li>
                                <Link to="/home" className="footer-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/stalls" className="footer-link">
                                    Stalls
                                </Link>
                            </li>
                            <li>
                                <Link to="/employee" className="footer-link">
                                    Employee Portal
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    {/* SOCIAL MEDIA */}
                    <Col md={4} className="mb-4">
                        <h6 className="fw-bold">Follow Us</h6>
                        <div className="d-flex gap-3 mt-2">
                            <a href="#" className="social-icon"><FaFacebookF /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaLinkedinIn /></a>
                        </div>
                    </Col>

                </Row>

                <hr className="border-light opacity-25" />

                <p className="text-center small mb-0 opacity-75">
                    © {new Date().getFullYear()} BookfairZone. All rights reserved.
                </p>

            </Container>
        </footer>
    )
}

export default Footer
