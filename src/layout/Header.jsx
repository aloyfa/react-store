import CodeStoreLogo from "../assets/00609_Polygon_design_free_logos_online-05.png";
// import styles from "./Header.module.css";
import { Navbar, Nav,Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from "react-router-dom";

const Header = () => {
  const {totalCount} = useSelector(state=> state.cart)
  const wishListNumber = useSelector(state => state.fav.favList.length)
  return (
    <Navbar bg="light" expand="xl">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              src={CodeStoreLogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to=''><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to='products'><Nav.Link>Products</Nav.Link></LinkContainer>
            <LinkContainer to='wishlist'><Nav.Link>Wishlist({wishListNumber})</Nav.Link></LinkContainer>

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
            <NavLink to='/cart'><AiOutlineShoppingCart size={30} color='black'/>({totalCount})</NavLink>
          <Form className="d-flex ms-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
