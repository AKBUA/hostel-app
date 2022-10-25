import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import IncreaseCount from './components/increaseCount/IncreaseCount';
import NumberCount from './components/numberCount/NumberCount';
import Result from './components/result/Result';

function App() {
let itemxs=[{name:"Orange",color:'orange'},{name:"Mango",color:'yellow'},{name:"Grapes",color:'green'},{name:"cherry",color:'red'}]

 const [number,setNumber] =  useState(null);
 const [items,setItems]=useState(itemxs);
 function handleDel(each){

  let temp= items.filter((e)=>{
    if(e.name==each.name) return false;
    else return true;
   })
   setItems(temp);
   
 }
  return (
   <>  
  {/*<IncreaseCount count={10} text={"HELLO"}/> */} 


  {items.map((each,i)=>{
    return (<div key={i} style={{display:'flex'}}><p style={{color:each.color}} >{each.name}</p>
    <button onClick={()=>{handleDel(each)}}>Del</button>
    </div> )
    
  })}
 
  <NumberCount  setNumber={setNumber} number={number} />
  <Result  number={number}   setNumber={setNumber}/>
    <Form></Form>
</> 

  );
}


export default App;
