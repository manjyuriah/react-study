import React from 'react';
import {Table} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props){
    
    let state = useSelector((state)=>state)//redux안 모든 state
    let dispatch = useDispatch();
    console.log(state);
    return(
        <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경</th>
                </tr>
              </thead>
              <tbody>
                  {
                      state.reducer.map((a,i)=>{
                          return(
                              <tr key={i}>
                                <td>{i}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td><button onClick={()=>{dispatch({type : "plus", payload : {name : "kim"},index : a.id}) }}>+</button>
                                <button onClick={()=>{ props.dispatch({type : "minus",index : a.id}) }}>-</button></td>
                                {/* 데이터 수정 요청은 무조건 props.dispatch() */}
                              </tr>
                          )
                      })
                  }
              </tbody>
            </Table>
            {props.alert === true
                ? (<div className="alert">
                    <p>신규회원 20% 할인!</p>
                    <button onClick={()=>{ props.dispatch({type :"close"}) }}>x</button>
                </div>)
                : null
            }
        </div>
    )
}
/*
function product(state){
    console.log(state);
    return{
        state : state.reducer,
        alert : state.reducer2
        // name : state[0].name
    }
}
*/
// export default connect(product)(Cart)
export default Cart;