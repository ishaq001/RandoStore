import { useEffect, useState } from "react"
import {
  Alert,
  Button,
  Card,
  Col,
  Row,
  Spinner,
  ToastContainer,
} from "react-bootstrap"

type TItem = {
  name: string
  id: number
  img: string
  price: string
}

function ItemList() {
  const [items, setItems] = useState<TItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    fetchItems()
  }, [])

  console.log({ items })

  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/items")

      if (!response.ok) {
        throw new Error("Failed to fetch items")
      }
      const data = await response.json()
      setItems(data)
      setError("")
    } catch (error) {
      setError("Error Loading Items, Please try again later")
      console.error("Error Fetching Items", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = (item) => {}

  if (loading) {
    return (
      <div className='text-center my-5'>
        <Spinner
          animation='border'
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    )
  }

  if (error) {
    return <Alert variant='danger'>{error}</Alert>
  }

  return (
    <div>
      <ToastContainer position='top-end' />
      <h2 className='mb-4'>Available Items</h2>
      {items.length === 0 ? (
        <Alert variant='info'>No items available in the store.</Alert>
      ) : (
        <Row
          xs={1}
          md={2}
          lg={3}
          className='g-4'
        >
          {items.map((item) => (
            <Col key={item.id}>
              <Card className='h-100 shadow-sm'>
                <Card.Img
                  alt='image'
                  variant='top'
                  src={item.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className='text-muted mb-0'>
                    ${parseFloat(item.price).toFixed(2)}
                  </Card.Text>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    variant='primary'
                    className='mt-auto'
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default ItemList
