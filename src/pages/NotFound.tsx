import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <Container className='text-center mt-5'>
      <h1 className='display-4 text-danger'>404</h1>
      <h2 className='mb-4'>Page Not Found</h2>
      <p className='lead'>Oops! The page you're looking for doesn't exist.</p>
      <Link
        to='/'
        style={{ textDecoration: "none" }}
      >
        <Button variant='primary'>Go Home</Button>
      </Link>
    </Container>
  )
}

export default NotFound
