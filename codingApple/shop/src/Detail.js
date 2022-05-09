import React,{useContext,useEffect,useState} from 'react'
import { useHistory,useParams } from 'react-router';
import styled from 'styled-components'
import './Detail.scss';
import {stockContext} from './App.js'
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import {CSSTransition} from "react-transition-group"
import {connect} from 'react-redux'

let Title=styled.h4`
    font-size:25px;
    margin-top:20px;
    color:${props => props.color}
`
function Detail(props){
  let [alert,alertState]=useState(true); //상단 alert창 컨트롤
  let [data,dataState]=useState('')
  let stock=useContext(stockContext)
  let [tab,setTab]=useState(0)
  let [btn,setBtn]=useState(false)

    useEffect(()=>{//컴포넌트가 mount됐을때,update될때
      let timer=setTimeout(()=>{
        alertState(false)
      },5000 )

      return ()=>{
        //react 라이프사이클에서 unmount역할 즉, detail이라는 컴포넌트가 사라질때
        clearTimeout(timer)
      }
    },[alert]);//실행 조건 : alert라는 state가 변경될때만
    
    let history = useHistory();
    let {id}=useParams();//파라미터 값 가져오기
    let product=props.data.filter((item)=>{// ES6 문법
        return item.id==id
    })
    useEffect(()=>{
      //상세보기 들어가면 최근 본 상품 UI
      console.log(document.location.href.split("/")[4]);
      // localStorage.setItem("id",[document.location.href.split("/")[4]])
      let arr=localStorage.getItem('watched');
      if(arr == null){
        arr=[]
      }else{
        arr=JSON.parse(arr)
      }

      // arr.push(document.location.href.split("/")[4])
      arr.push(id)
      arr=new Set(arr) //중복 제거해주는 함수
      arr=[...arr]
      localStorage.setItem('watched',JSON.stringify(arr))

    })
    return (
        <div className="container">
            <Title color="tomato" className="title">상세페이지</Title>
            {/* 조건문은 중괄호 안에 */}
            {
              alert === true
              ?(<div className="alert-yellow">
                  <p>현재 품절 임박!</p>
                </div>)
              :null
            }
          <input onChange={(e)=>{dataState(e.target.value)}} />
          {dataState}
          <div className="row">
            <div className="col-md-6">
              <img src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
            <h4>{props.data[id].title} </h4>
            <p>{props.data[id].content}</p>
            <p>{(props.data[id].price).toLocaleString()}</p>
            <Stock stock={props.stock}/>
              <button className="btn btn-danger" onClick={()=>{props.setStock([9,8,7])}}>주문하기</button> 
              <button className="btn btn-danger" onClick={()=>{props.dispatch({type : 'cart',
              payload : {id :id ,name : props.data[id].title, quan : 1} });
              history.push('/cart');
              // 리액트는 페이지 이동하면 data바뀐게 다시 reset됨 그걸 history.push()로 강제 이동 해서 방지
            }}>
                장바구니</button> 
              <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
            </div>
          </div>
          <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={()=>{setBtn(false); setTab(0)}}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={()=>{setBtn(false); setTab(1)}}>Option 2</Nav.Link>
            </Nav.Item>
          </Nav>

          <CSSTransition in={btn} classNames="ani" timeout={500}>
            <TabContent tab={tab} setBtn={setBtn}></TabContent>
          </CSSTransition>

          </div> 
    )
  }
  function TabContent(props){
    useEffect(()=>{
      props.setBtn(true)
    })
    if(props.tab===0){
      return <div>0번째</div>
    }
    else if(props.tab===1){
      return <div>1번째</div>
    }
  }
  function Stock(props){
    let stock=useContext(stockContext)
    return (
      <p>{stock} 재고 : {props.stock[0]}</p>
    )
  }

  function product(state){
    return{
      state : state.reducer,
      alert : state.reducer2
    }
}
export default connect(product)(Detail)