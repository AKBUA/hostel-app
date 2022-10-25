import React, { useEffect, useState } from 'react'
import './IncreaseCount.css'
export default function IncreaseCount(props) {
    console.log("REALOAD")

    
//    useState(0);
 const [counter1,setCounter1]=useState({zero:0,color:"yellow"});
 const [counter2,setCounter2]=useState(true);
 const [counter3,setCounter3]=useState(0);
 
 function handleCounter1(){
    if(counter1.color=="yellow"){
        setCounter1({zero:counter1.zero+1,color:"red"});

    }
    else
    setCounter1({zero:counter1.zero+1,color:"yellow"});

 }
 function handleCounter2(){
setCounter2(!counter2);
 };
 function handleCounter3(){
    setCounter3(counter3+1);
 };

 useEffect(()=>{

console.log("counter 2| 1 changed")
 },[counter3])
 useEffect(()=>{

    console.log("counter 2| 1 changed")
     },[counter3,counter2])
// function  handleInc1(){
//  setCounter({...counter,counter1:counter.counter1+1});
//  //console.log(counter)
// }
// function  handleInc2(){
//     setCounter({...counter,counter2:counter.counter2+1});
//     //console.log(counter)
//    }
//    function  handleInc3(){
//     setCounter({...counter,counter3:counter.counter3+1});
//     //console.log(counter)
//    }

  return (<React.Fragment>
    
    
    <h1>Original Count {props.count} </h1>
    <h1   style={{color:counter1.color,fontSize:counter1.zero}}>{counter1.zero} {counter1.color}</h1>
    <h1 className={counter2?"yellowc":"redc"}>HELLOQ</h1>
    <h1>{counter3}</h1>
     <button  onClick={handleCounter1} >INC 0</button>
     <button  onClick={handleCounter2} >INC 1</button>
     <button  onClick={handleCounter3} >INC 2</button>


    </React.Fragment>
    
  )
}




