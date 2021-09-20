import {useState} from 'react';
import { Button,Navbar , Container,Nav,NavDropdown,Jumbotron} from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import './Detail.scss';
import axios from 'axios';

import {Link, Route, Switch} from 'react-router-dom';
function App() {

  let [shoes, shoes변경] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">shopping</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as = {Link}to="/">Home</Nav.Link>
        <Nav.Link as = {Link}to="/detail">Detail</Nav.Link>
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


<Switch>


<Route exact path = "/">
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
             return<Card shoes={shoes[i]} i={i} key = {i}/>
            })
          }
        </div>
        <button className = "btn btn-primary" onClick={()=>{
          //fetch('https://codingapple1.github.io/shop/data2.json').then()
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            console.log('result.data')
          })
          .catch(()=>{
            console.log('실패했어요')
          })

        }}>더보기</button>
    </div>

</Route>











<Route path="/detail/:id">
  <Detail shoes={shoes}/>
</Route>

<Route path = "/:id">
  <div>아무거나</div>
</Route>

</Switch>
{/* <Route path = "/어쩌구" component={Modal}></Route> */}






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
