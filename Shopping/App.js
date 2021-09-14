import {useState} from 'react';
import { Button,Navbar , Container,Nav,NavDropdown,Jumbotron} from 'react-bootstrap';
import './App.css';
import Data from './data.js';

function App() {

  let [shoes, shoes변경] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">LUNATIC</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Introduction</Nav.Link>
        <NavDropdown title="Category" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Outer</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Bottoms</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Accessories</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div class="container py-4">
 

    <div class="p-5 mb-4 bg-light rounded-3 background">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">LUNATIC</h1>
        <p class="col-md-8 fs-4">대충 설명</p>
        <button class="btn btn-primary btn-lg" type="button">구매하러가기</button>
      </div>
    </div>
</div>


<div className="container">
        <div className="row">
          { 
            shoes.map((a,i)=>{
             return<Card shoes={shoes[i]} i={i} />
            })
          }
        </div>
      </div>
    </div>
  )
}


function Card(props){
  return (
    <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
    </div>
  )
}
export default App;
