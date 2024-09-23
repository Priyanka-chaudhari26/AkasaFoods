import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={ `/product/${product.id}`}>
        <Card.Img variant='top' src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`} className='text-dark'>
          <Card.Title>
            {product.productname}
          </Card.Title>
        </Link>
        
        <Card.Text as="h5">
          <div className='my-3'>
            ₹{product.price} 
          </div>
        </Card.Text>
        <Card.Text>
          <div>
            {product.rating} 
          </div>
        </Card.Text><Rating value={product.rating} color={"#FFDF00"} />
      </Card.Body>

      {/* Add your favorite product details here */}
      {/* <Card.Text>Price: $9.99</Card.Text> */}
      {/* <Card.Text>Quantity: 5</Card.Text> */}
      {/* <Card.Text>Category: Food</Card.Text> */}

      

    </Card>
  )
}

export default Product
