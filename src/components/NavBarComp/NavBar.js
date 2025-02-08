import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import "./NavBar.css";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dynamically set the active class based on the route
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="md"
      className={scrolled ? "scrolled" : ""}
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mx-auto justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Nav.Link
              as={Link}
              to="/"
              className={isActive("/") ? "active navbar-link" : "navbar-link"}
              style={{ margin: "0 20px" }}
            >
              Calculator
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/signup"
              className={
                isActive("/signup") ? "active navbar-link" : "navbar-link"
              }
              style={{ margin: "0 20px" }}
            >
              Mapped Calculator
            </Nav.Link>

            {/* <Nav.Link
              as={Link}
              to="/projects"
              className={
                isActive("/projects") ? "active navbar-link" : "navbar-link"
              }
              style={{ margin: "0 20px" }}
            >
              CustomTrans
            </Nav.Link> */}
          </Nav>

          <span className="ex navbar-text">
            <HashLink to="/explore" style={{ margin: "0 20px" }}>
              <button className="btn">
                <span className="ex">Let’s Explore</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
