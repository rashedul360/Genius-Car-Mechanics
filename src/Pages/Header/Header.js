import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./header.css";

const Header = () => {
  const { logOut, user } = UseAuth();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">motor</Link>
          <Nav className="me-auto">
            <Link to="/home">home</Link>
            <Link to="/register">registration</Link>
            <Link to="/dash">Dashboard</Link>
            <Link to="/login">login</Link>
            <button onClick={logOut}>logout {user.displayName}</button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
