import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import Rating from "../Rating";
import axios from "axios";
import Product from "../Product";

function ProductScreen({ params }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchproduct() {
      const { data } = await axios.get(`/api/product/${id}`);
      // console.log(data)
      setProduct(data);
    }
    fetchproduct();
  }, [id]);
  

  const addToCartHandler = async () => {
    try {
        const { data } = await axios.post('/api/product/${id}/add-to-cart/', {
            product_id: product.id,
            // quantity: 1,  
        });
        console.log('Product added to cart:', data);
        setMessage(data.message);
    } catch (error) {
        console.error('Error adding to cart', error);
    }
};
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-dark my-3">
          Go Back
        </Link>
        {message && <div className="alert alert-success">{message}</div>}
      </div>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.productname} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.productname}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text>
                <div>{product.rating}</div>
              </Card.Text>
              <Rating value={product.rating} color={"#FFDF00"} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>
            <ListGroup.Item>Description {product.pdesc}</ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status: &nbsp;
                {product.stock >0 ? "In Stock" : "Out of Stock"}</Col>
              </Row>
              </ListGroup.Item>
            <ListGroup.Item>
              <Button onClick={addToCartHandler} className=" btn-success" disabled={product.stock==0} type="button">
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
