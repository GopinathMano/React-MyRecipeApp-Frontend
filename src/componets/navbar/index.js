import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MYContext } from "../../context";
import axios from "../../Axios";
import { useHistory } from "react-router-dom";
import "./nav.css";
import logo from "./chef.png";

function AppNavbar() {
  const history = useHistory();
  const { user, setUser } = useContext(MYContext);

  function handleLogout() {
    axios.post("/logout").then((res) => {
      localStorage.removeItem("token");
      setUser(null);
      history.replace("/");
    });
  }
  return (
    <Navbar expand="sm" sticky="top" bg="myBlue" variant="dark" >
      <Container>
        <Navbar.Brand>
          <img src={logo} width="30" height="30" alt="Recipe logo" />
        </Navbar.Brand>
        <Navbar.Brand>My Recipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {!user && (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
              </>
            )}
            {user && (
              <>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>

                <LinkContainer to="/my-favorites">
                  <Nav.Link>Favorite Recipies</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          {user && 
      <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <span className="font-weight-bold">{user.email}</span> 🤤
    </Navbar.Text>
  </Navbar.Collapse>
}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
