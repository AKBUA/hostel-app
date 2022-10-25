import React ,{useState} from 'react'

import './NumberCount.css'

import Result from '../result/Result'
export default function NumberCount(props) {

 function handleClick(p){
   
 props.setNumber(p);

  }

  return (
    <div>
      <button onClick={ ()=> handleClick(1)}>1</button>
      <button onClick ={ ()=> handleClick(2)}>2</button>
      <button onClick={()=> handleClick(3)}>3</button>
    
    </div>
  )
}
