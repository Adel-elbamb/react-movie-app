import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styles from "./Header.module.css";
import { Link } from "react-router";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

export default function Header() {
  // const tvWatchList = useSelector((state) => state.tvShowsList);
  // console.log(tvWatchList.length);
  const Wishlist = useSelector((state) =>
    state.wishlist.value.filter((item) => item.type == "show")
  );
  return (
    <Navbar expand="lg" className={`${Styles.bg} sticky-top`}>
      <Container>
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Movies List
            </Nav.Link>
            <NavDropdown title="TV Shows" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tv">
                Popular
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link as={Link} to="/tvShowsWishList">
            <Badge className="mx-2" bg="danger">
              TV WatchList <Badge bg="danger">{Wishlist.length}</Badge>
            </Badge>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
