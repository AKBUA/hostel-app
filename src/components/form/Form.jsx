import React, { useState } from 'react'
import './Form.css'
export default function Form() {
    const [text,setText]=useState("");
    // function handleChange (event){
    //     event.preventDefault();
    // setText(event.target.value)

       

    // }

    function handleParent(event){
     console.log("cliekd on parent")
    }

    function handleChild(event){
        event.preventDefault();
        event.stopPropagation();
        console.log("cliekd on child")
    }
    return (
    <>
{/*<h1>{text}</h1>
    <input type="text" name="name" onChange={handleChange} placeholder='my name enter' /> */}
    <div className='parent' onClick={handleParent} 
    onMouseOver={(event)=>{console.log("MOUSE OVER")}}
    onMouseLeave={(event)=>{console.log("MOUSE LEAVE")}}
    onWheel={(event)=>{ console.log("SCROLIGN",event)}}
    >
     <div className='child' onClick={handleChild}>
     </div>
    </div>
    
    </>
                                
                                
 )
}
