import React from 'react'
// import {Link} from 'react-router-dom'
// import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <>
{/*       
      <Navbar className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Akasa Foods</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <LinkContainer to="/"><Nav.Link className="nav-link active">Home
            <span className="visually-hidden">(current)</span>
          </Nav.Link>
          </LinkContainer>
        </li>
        <li className="nav-item">
          <LinkContainer to="/"><Nav.Link className="nav-link">About</Nav.Link></LinkContainer>
        </li>
        <li className="nav-item">
          <LinkContainer to="/"><Nav.Link className="nav-link">Contact Us</Nav.Link></LinkContainer>
        </li>
        <li className="nav-item">
        <LinkContainer to="/"><a className="nav-link" >Cart</a></LinkContainer>
        </li>
        <li className="nav-item">
        <LinkContainer to="/"><a className="nav-link">login</a></LinkContainer>
        </li>
        
        
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
      {/*</ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</Navbar> 
*/}
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Akasa Foods</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><i className="fa-solid fa-house"></i>&nbsp;Home</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



    </>
  )
}

export default Header
