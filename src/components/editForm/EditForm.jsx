import axios from 'axios';
import React from 'react'
import './EditForm.css'

export default function EditForm(props) {
    const URL = "https://task-todolist-app.herokuapp.com/students";
   async function   handleSumbit  (event) {
    event.preventDefault();
   
         
        await axios(
            {
        url:`${URL}/${props.name._id}`,
        method:"put",
        data: {firstName:event.target[0].value,
            lastName:event.target[1].value}
        
        } );

     props.setEditMode(false);
     
  }
  return (      <div className='form-area'>
    <h1> Edit Name Of {props.name.firstName} {props.name.lastName}</h1>
    
    <form action="" onSubmit={handleSumbit}>
    
     <input type="text" name="firstName" />
     <input type="text" name='lastName' />
     <button>Submit</button>
    </form>
  

    </div>
  )
}
