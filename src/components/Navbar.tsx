import { useState } from "react"
import { Badge, Container, Nav, Navbar } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

function NavBar() {
  const [cartItemCount, setCartItemCount] = useState<number>(1)
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to='/'
        >
          RandoStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              as={Link}
              to='/'
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/items'
            >
              Browse Items
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/add-item'
            >
              Add New Item
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to='/checkout'
              className='d-flex align-items-center'
            >
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <Badge
                  bg='danger'
                  pill
                  className='ms-1'
                >
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
