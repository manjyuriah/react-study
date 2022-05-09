import React, { useState } from 'react';
import Youtube from './Youtube';
import Netflix from './Netflix';
import Cal from './Cal';
import './App.css';


function App() {
  let [index,setIndex]=useState(0)
  let [plus,setPlus]=useState(2)
  let [reset,setReset]=useState(0)
  let [minus,setMinus]=useState(1)
  let [times,setTimes]=useState([1,2,3,4,5,6,7,8,9])

  const [check,useCheck]=useState(true);

  // console.log(youtubeData.data[0]);
  function Onclick(){
    // useCheck(false)
    useCheck(check=>!check)//클릭때마다 ! not 실행
  }

  return (
    <div>
      <Youtube />
      <Netflix />
      <div>
          <h2>값 : {index}</h2>
          <button onClick={()=>{setIndex(index-1)}}>-1</button>
          <button onClick={()=>{setIndex(index=0)}}>Reset</button>
          <button onClick={()=>{setIndex(index+2)}}>+2</button>
      </div>
      <Cal index={index} times={times}/>
      <div className='box'>
        {/* {check && <div>true!</div>} */}
        {check === true
        ?<div className='true'>true</div>
        :<div className='false'>false</div>
        }
        <button onClick={Onclick}>click!</button>
      </div>
    </div>
  );
}

export default App;