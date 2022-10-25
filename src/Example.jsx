import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import './Example.css';
import deletePic from './assets/delete-icon.png';
import deleteI from './assets/delete.png';
import edtingI from './assets/editing.png';
import EditForm from './components/editForm/EditForm';
import { useHistory } from "react-router-dom";

const URL = "https://task-todolist-app.herokuapp.com/students";

export default function Example() {
  const [students, setStudents] = useState([])
  const [editMode, setEditMode] = useState(false);
  const [nameEdit, setNameEdit] = useState({ name: "", id: "" });

  useEffect(() => {
    axios.get(URL).then((response) => {
      setStudents(response.data.data)


    });
  }, [editMode]);




  function deleteStudent(x ) {

    axios.delete(`https://task-todolist-app.herokuapp.com/students/${x._id}`);


    let temp = students.filter(e => e._id !== x._id);
    setStudents(temp);
  };
 

  function handleEdit(x) {
    console.log(x)
    setEditMode(true);
    setNameEdit(x)


  }

  return (
    <>
      {!editMode ? <div className='studentList'>
        {students.map((each, i) => {
          return <div className='items' key={each._id}>
            <p className='itmespara'>{each.firstName}  {each.lastName}
              <div><img onClick={() => { deleteStudent(each) }} src={deleteI} width="25px" alt="" />
                <img onClick={() => { handleEdit(each) }} src={edtingI} width="25px" alt="" />  </div>

            </p>

          </div>
        })}
      </div> : <EditForm name={nameEdit} setEditMode={setEditMode} />}


    </>
  )

};