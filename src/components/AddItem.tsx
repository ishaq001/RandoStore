import { Button, Container, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { TItem } from "../types"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const AddItem = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TItem>()

  const onSubmit = async (data: TItem) => {
    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // Send JSON with image URL
      })

      const result = await response.json()

      if (response.ok) {
        toast(`${data.name} added to cart.`)
        navigate("/items")
        reset()
      } else {
        console.error("Error adding item:", result.error)
      }
    } catch (error) {
      console.error("Failed to add item:", error)
    }
  }

  return (
    <Container className='mt-4'>
      <h2>Add New Item</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <Form.Group
          controlId='name'
          className='mt-3'
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Item Name'
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className='text-danger'>{errors.name.message}</p>}
        </Form.Group>

        {/* Price Field */}
        <Form.Group
          controlId='price'
          className='mt-3'
        >
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Price'
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
              min: { value: 1, message: "Price must be at least 1" },
            })}
          />
          {errors.price && (
            <p className='text-danger'>{errors.price.message}</p>
          )}
        </Form.Group>

        {/* Image Upload */}
        <Form.Group
          controlId='img'
          className='mt-3'
        >
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            type='text'
            {...register("img", { required: "Image is required" })}
          />
          {errors.img && <p className='text-danger'>{errors.img.message}</p>}
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
          className='mt-3'
        >
          Add Item
        </Button>
      </Form>
    </Container>
  )
}

export default AddItem
