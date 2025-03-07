import { Link } from "react-router-dom"
import { Table, Button, Alert, Card } from "react-bootstrap"
import { FaTrash } from "react-icons/fa"
import { TCheckout } from "../types"

function Checkout({ cart, removeFromCart }: TCheckout) {
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        return total + parseFloat(item.price)
      }, 0)
      .toFixed(2)
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
                  src={item.img}
                  alt={item.name}
                  style={{ width: "75px", height: "75px", objectFit: "cover" }}
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
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Checkout
