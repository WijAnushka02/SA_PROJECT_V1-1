import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import {
    FaBookOpen,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaHeadset
} from "react-icons/fa"

function Footer() {
    return (
        <footer className="modern-footer text-white mt-auto">

            <Container className="py-5">
                <Row>

                    {/* LOGO SECTION */}
                    <Col md={3} className="mb-4">
                        <h5 className="fw-bold d-flex align-items-center gap-2">
                            <FaBookOpen className="text-warning" />
                            BookfairZone
                        </h5>
                        <p className="small opacity-75">
                            Reserve your stalls and manage your book fair experience easily.
                        </p>
                    </Col>

                    {/* CONTACT SECTION */}
                    <Col md={3} className="mb-4">
                        <h6 className="fw-bold mb-3">Contact Us</h6>

                        <p className="footer-contact">
    <FaMapMarkerAlt className="me-2 text-warning" />
    Bandaranaike Memorial International Conference Hall (BMICH), 
    Bauddhaloka Mawatha, Colombo 07, Sri Lanka.
</p>


                        <p className="footer-contact">
                            <FaEnvelope className="me-2 text-warning" />
                            info@bookfairzone.com
                        </p>

                        <p className="footer-contact">
                            <FaHeadset className="me-2 text-warning" />
                            Hotline: 1911
                        </p>

                        <p className="footer-contact">
                            <FaPhoneAlt className="me-2 text-warning" />
                            +94 11 2786200
                        </p>
                    </Col>

                    {/* QUICK LINKS */}
                    <Col md={3} className="mb-4">
                        <h6 className="fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li>
                                <Link to="/home" className="footer-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/stalls" className="footer-link">Stalls</Link>
                            </li>
                            <li>
                                <Link to="/employee" className="footer-link">Employee Portal</Link>
                            </li>
                        </ul>
                    </Col>

                    {/* SOCIAL MEDIA */}
                    <Col md={3} className="mb-4">
                        <h6 className="fw-bold mb-3">Follow Us</h6>
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
