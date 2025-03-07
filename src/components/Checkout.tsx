import { Link, useNavigate } from "react-router-dom"
import { Table, Button, Alert, Card, Modal } from "react-bootstrap"
import { FaTrash } from "react-icons/fa"
import { TCheckout } from "../types"
import { getImageUrl } from "../utils"
import { useState } from "react"

function Checkout({ cart, removeFromCart, clearCart }: TCheckout) {
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        return total + parseFloat(item.price)
      }, 0)
      .toFixed(2)
  }

  const handleCheckout = () => {
    setShowModal(true) // Show modal with order details
  }

  const confirmCheckout = () => {
    setShowModal(false)
    clearCart()
    navigate("/items") // Redirect to items list
  }

  if (cart.length === 0) {
    return (
      <div>
        <h2 className='mb-4'>Your Cart</h2>
        <Alert variant='info'>
          Your cart is empty. <Link to='/items'>Browse items</Link> to add
          something to your cart.
        </Alert>
      </div>
    )
  }

  return (
    <div>
      <h2 className='mb-4'>Your Cart</h2>
      <Table
        responsive
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Item</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={`${item.id}-${Math.random()}`}>
              <td style={{ width: "100px" }}>
                <img
                  src={getImageUrl(item.img)}
                  alt={item.name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  // onError={(e) => {
                  //   e.target.src =
                  //     "https://via.placeholder.com/75?text=No+Image"
                  // }}
                />
              </td>
              <td>{item.name}</td>
              <td>${parseFloat(item.price).toFixed(2)}</td>
              <td>
                <Button
                  variant='danger'
                  size='sm'
                  onClick={() => removeFromCart(index)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Card className='mt-4 mb-4'>
        <Card.Body className='d-flex justify-content-between'>
          <h4 className='mb-0'>Total:</h4>
          <h4 className='mb-0'>${calculateTotal()}</h4>
        </Card.Body>
      </Card>

      <div className='d-flex justify-content-end'>
        <Button
          variant='success'
          size='lg'
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </div>

      {/* Checkout Confirmation Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header
          closeButton
          className='bg-light'
        >
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h5 className='text-success fw-bold'>
            Thank you for shopping with us!
          </h5>
          <p className='text-muted'>Your order has been successfully placed.</p>
          <h4 className='fw-bold text-dark'>Total: ${calculateTotal()}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant='primary'
            onClick={confirmCheckout}
          >
            Continue Shopping
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Checkout
