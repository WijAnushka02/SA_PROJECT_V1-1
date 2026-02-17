import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa'

function Navbar() {
    return (
        <BootstrapNavbar
            expand="lg"
            sticky="top"
            className="bg-blue-800 shadow"
            variant="dark"
        >
            <Container fluid className="px-4">

                {/* Logo */}
                <BootstrapNavbar.Brand
                    as={Link}
                    to="/home"
                    className="d-flex align-items-center gap-2 text-3xl fw-bold m-0"
                >
                    <FaBookOpen className="text-warning fs-4" />
                    <span className="text-white">
                        Bookfair<span className="text-warning">Zone</span>
                    </span>
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

                <BootstrapNavbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto align-items-center">

                        <Nav.Link
                            as={Link}
                            to="/home"
                            className="text-white fs-5 fw-semibold me-4 nav-hover"
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/stalls"
                            className="text-white fs-5 fw-semibold me-4 nav-hover"
                        >
                            Stalls
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/employee"
                            className="text-white fs-5 fw-semibold me-4 nav-hover"
                        >
                            Employee Portal
                        </Nav.Link>

                        <Button
                            variant="outline-light"
                            className="logout-btn"
                        >
                            Logout
                        </Button>

                    </Nav>

                </BootstrapNavbar.Collapse>

            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar
