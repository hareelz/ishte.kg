// import React, { useDebugValue, useEffect } from "react";
// import "./Navbar.css";
// import { Link, useNavigate } from "react-router-dom";

// import { Avatar, IconButton, Tooltip } from "@mui/material";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="nav-bcg">
//       <a href="/" className="logo-home">
//         <img
//           src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg"
//           alt=""
//           className="navbar-logo"
//         />
//       </a>

//       <div className="search">
//         <input className="inp_search" type="text" />
//         <button className="btn_search">Поиск</button>
//       </div>
//       <ul className="navbar_list">
//         <li className="nav-list-item">
//           <Link to={"/roster"} className="link-nav"></Link>
//         </li>
//         <li className="nav-list-item">
//           <Link to={"/cardPage"} className="link-nav">
//             Посты
//           </Link>
//         </li>
//         <li className="nav-list-item">
//           <Link to={"/admin"} className="link-nav">
//             Admin
//           </Link>
//         </li>
//         <li className="nav-list-item">
//           <Link to={"/cartPage"} className="link-nav">
//             Cart
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar style={{}} expand="lg" className="bg-body-tertiary">
      <Container
        style={{
          background: "#000",
          margin: "0",
        }}
        fluid
      >
        <Navbar.Brand href="#">
          <span className="block_logo">
            <a href="/" className="logo-home">
              <img
                src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg"
                alt=""
                className="navbar-logo"
              />
            </a>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              style={{ fontWeight: "600", color: "#fff" }}
              href="/posts"
            >
              Посты
            </Nav.Link>
            <Nav.Link style={{ fontWeight: "600", color: "#fff" }} href="/chat">
              Чат
            </Nav.Link>
            <NavDropdown
              title="Войти"
              id="navbarScrollingDropdown"
              style={{
                color: "#fff",
                background: "#fff",
                borderRadius: ".2em",
                fontWeight: "600",
              }}
            >
              <NavDropdown.Item href="/auth">Customer</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/auth">Freelancer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              user name
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Поиск..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Найти</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
