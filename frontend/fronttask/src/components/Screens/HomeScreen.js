import React ,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import {Row,Col, Card} from 'react-bootstrap'
import Product from '../Product'


function HomeScreen() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchproducts(){
      const {data} = await axios.get('/api/products/')
      // console.log(data)
      setProducts(data)
    }
    fetchproducts()

  },[])
 
  return (
    <>
    <Container>
      <br />
      <h1>Products</h1>
    
      <Row>
      {products.map((product)=>(
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          {/* <Card className="my-3 p-3 rounded"><img src={product.image}/></Card>
          
          <h3>{product.productname}</h3>
          <h6>{product.category}</h6>
          <h6>₹{product.price}</h6>
          <h6>{product.pdesc}</h6>
          <h6>{product.rating}</h6> */}
          {/* <h6>{product.image}</h6> */}
          <Product product={product} />
        </Col>
        
      ))}

      </Row>
    </Container>
    </>
  )
}

export default HomeScreen
