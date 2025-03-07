import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <Container>
      <Row className='text-center mb-4'>
        <Col>
          <h1>Welcome to RandoStore</h1>
          <p className='lead'>Your one-stop shop for random items!</p>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col
          md={4}
          className='mb-4'
        >
          <Card className='h-100 shadow-sm'>
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Browse Items</Card.Title>
              <Card.Text>
                Check out our collection of random items that you can add to
                your cart.
              </Card.Text>
              <Link
                to='/items'
                style={{ textDecoration: "none" }}
              >
                <Button
                  className='mt-auto'
                  variant='primary'
                >
                  Browse Items
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col
          md={4}
          className='mb-4'
        >
          <Card className='h-100 shadow-sm'>
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Your Cart</Card.Title>
              <Card.Text>
                View the items in your cart and proceed to checkout.
              </Card.Text>
              <Link
                to='/checkout'
                style={{ textDecoration: "none" }}
              >
                <Button
                  className='mt-auto'
                  variant='success'
                >
                  Go to Cart
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col
          md={4}
          className='mb-4'
        >
          <Card className='h-100 shadow-sm'>
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Add New Item</Card.Title>
              <Card.Text>
                Have something random to sell? Dont worry. Add it to our store!
              </Card.Text>
              <Link
                to='/add-item'
                style={{ textDecoration: "none" }}
              >
                <Button
                  className='mt-auto'
                  variant='info'
                >
                  Add Item
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
