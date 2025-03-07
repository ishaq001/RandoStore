import { useEffect, useState } from "react"
import { Alert, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap"
import { TItem, TItemLIst } from "../types"
import { toast } from "react-toastify"

import { getImageUrl } from "../utils"

function ItemList({ addToCart }: TItemLIst) {
  const [items, setItems] = useState<TItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  const [searchTerm, setSearchTerm] = useState<string>("")
  const [sortOrder, setSortOrder] = useState<string>("")

  useEffect(() => {
    fetchItems()
  }, [])

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

  const handleAddToCart = (item: TItem) => {
    toast(`${item.name} added to cart.`)
    addToCart(item)
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "price-asc")
      return parseFloat(a.price) - parseFloat(b.price)
    if (sortOrder === "price-desc")
      return parseFloat(b.price) - parseFloat(a.price)
    return 0
  })

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
      <h2 className='mb-4'>Available Items</h2>

      {/* Search and Sorting Controls */}
      <Row className='mb-3'>
        <Col md={6}>
          <Form.Control
            type='text'
            placeholder='Search items...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value=''>Sort by</option>
            <option value='price-asc'>Price: Low to High</option>
            <option value='price-desc'>Price: High to Low</option>
          </Form.Select>
        </Col>
      </Row>
      {items.length === 0 ? (
        <Alert variant='info'>No items available in the store.</Alert>
      ) : (
        <Row
          xs={1}
          md={2}
          lg={3}
          className='g-4'
        >
          {sortedItems.map((item) => (
            <Col key={item.id}>
              <Card className='h-100 shadow-sm'>
                <Card.Img
                  alt='image'
                  variant='top'
                  src={getImageUrl(item.img || "")}
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
