import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import {  Link } from "react-router-dom";
// navbar feature - 2
// navbar feature - 3
const Header = () => {
  return (
    <>
      <Container className="">
        <Navbar
          // data-bs-theme="dark"
          id="navbar"
          sticky="top"
          expand="md"
          bg="primary"
          variant="dark"
        >
          <Navbar.Brand href='http://localhost:3000/'>Home</Navbar.Brand>
          <Navbar.Brand href="http://localhost:3000/blogs">Take a sip</Navbar.Brand>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;