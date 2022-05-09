import React,{useState,useContext} from 'react'
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import './App.css';
import data from './data.js'
import {Link,Route,Router,Switch, useHistory} from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import Cart from './Cart.js';

export let stockContext=React.createContext();//같은 변수값을 공유할 범위 생성

function App() {

  let [shoes,setShoes]=useState(data);
  let [stock,setStock]=useState([10,11,12])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <Switch>
      <Route exact path="/">
        <div className="box">
          <h1 className='mainTitle'>20% season off</h1>
          <p className='mainTitle'>
          조만간 정식 서비스 런칭으로 
          유저 여러분의 영상편집을 쉽고 편리하게 도와드리겠습니다. 
          </p>
          <Button variant="primary">Primary</Button>
          <p>
          </p>
        </div>
        <div className="container">

          <stockContext.Provider value={stock}>
          <div className="row">
            {
              shoes.map((a,i)=>{ 
                return <Card shoes={shoes[i]} key={i} i={i}/>
              })
            }
          </div>
          </stockContext.Provider>

          <Button variant="primary" onClick={()=>{
            //로딩중 ui
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((response)=>{
            //로딩중 ui 삭제
              console.log(response.data);
              setShoes([...shoes, ...response.data])
            })
            .catch((error)=>{
            //로딩중 ui 삭제
              console.log(error);
            })
          }}>더보기</Button>
        </div>
      </Route>

      <Route path="/detail/:id">
        {/* :id 뒤에 어떤 문자가 와도 해당 path로 이동 */}
        <stockContext.Provider value={stock}>
        <Detail data={data} stock={stock} setStock={setStock}></Detail>
        </stockContext.Provider>
      </Route>
      {/* <Route path="/:id">
        <div>아무거나</div>
      </Route>  */}

      <Route path="/cart">
        <Cart />
      </Route>

      </Switch>
      {/* Route전체를 <Switch>로 감싸면 하나작동시 하나 미작동(가장 상단 작동)
      - 중복매칭 미허용 */}
    </div>
  );
}

function Card(props){

  let stock=useContext(stockContext)
  let history=useHistory();
  let i=props.i+1
  // useContext(stockContext) : 괄호안에는 <stockContext.Provider> 위에서 값 공유할 범위로 만든 컴포넌트
  return (
    <div className="col-md-4" onClick={()=>{history.push('./detail/'+i)}}>
      <img src={'https://codingapple1.github.io/shop/shoes' + i + '.jpg'} width="100%"></img>
      <h4>{props.shoes.title} </h4>
      <p>{props.shoes.content}</p>
      <p>{(props.shoes.price).toLocaleString()}</p>
      {stock[0]}
    </div>
  )
}
export default App;
