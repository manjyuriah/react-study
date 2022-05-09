import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'

let start = [
  {id:0,name:'Nike',quan:2},
  {id:1,name:'Adidas',quan:1},
  {id:2,name:'Newbalance',quan:0},
]

function reducer(state = start, action){
  if(action.type === "cart"){
    let copy=[...state];
    let found=state.findIndex((a)=>{return a.id === action.payload.id})
    // a=state의 배열 안 데이터
      if(found >=0){
        copy[found].quan++;
        return copy

      } else{
        copy.push(action.payload)
        return copy
      }

  }  else if(action.type === "plus"){ //"plus"가 작동할때
    console.log(action.payload);
    let copy=[...state]; //deepcopy로 독립적인 복사본 만들기
    copy[action.index].quan++; //해당 복사본의 수량부분 ++ 으로 수정
    return copy //복사본 내보내기

  }
  else if(action.type === "minus"){
    let copy=[...state]; 
    copy[action.index].quan--;
    if(copy[0].quan <=0){
      copy[0].quan =0
    } 
    return copy

  }else{ //그게아니면 무조건 기본 값 내보내기
    return state
  }
}
let close = true;

function reducer2(state=close,action){
  if(action.type==="close"){
    close=false;
    return close
  }else{
    return close
  }
}

// let store = createStore(reducer);
let store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
