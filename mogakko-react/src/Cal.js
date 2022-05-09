import React, { useState } from 'react';

function Cal(props) {
    let [index,setIndex]=useState(1)

    function onClick(){
        console.log('test');
        setIndex(index+1)
    }
    return (
    <div>
        <ul>
            {
                props.times.map((a,i)=>{
                    return (
                        <li><p>{index} x {props.times[i]} = {index*props.times[i]}</p></li>
                    )
                })
            }
            
        </ul>
        <button onClick={onClick}>구구단</button>
    </div>
    )
  }
  
  export default Cal;