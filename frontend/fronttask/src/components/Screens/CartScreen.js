import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';

function CartScreen() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      const { data } = await axios.get('/api/view-cart/');
      setCartItems(data);
    }
    fetchCart();
  }, []);

  return (
    <Container>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <ListGroup variant="flush">
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              <strong>{item.product}</strong> - {item.quantity} x ${item.price} = ${item.total}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Button className="mt-3" variant="primary">Proceed to Checkout</Button>
    </Container>
  );
}

export default CartScreen;
