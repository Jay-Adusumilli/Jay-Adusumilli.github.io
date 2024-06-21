import { useRoutes, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import HomePage from "./HomePage";
import LinksPage from "./LinksPage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";

interface NavBarProps {
  title: string;
}

function NavBar({ title }: NavBarProps) {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/links", element: <LinksPage /> },
    { path: "/projects", element: <ProjectsPage /> },
    { path: "/about", element: <AboutPage /> },
  ]);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/links">
                Links
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {routes}
    </>
  );
}

export default NavBar;
