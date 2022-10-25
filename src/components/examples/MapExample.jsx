import React ,{useState}from 'react'

export default function MapExample () {

let itemxs=[{name:"Orange",color:'orange'},{name:"Mango",color:'yellow'},{name:"Grapes",color:'green'},{name:"cherry",color:'red'}]

    
     const [items,setItems]=useState(itemxs);
    function handleDel(each)
    {
   
     let temp= items.filter((e)=>{
       if(e.name==each.name) return false;
       else return true;
      })
      setItems(temp);
      
    }
    
  return (
    <div>
    
  {items.map((each,i)=>{
    return (<div key={i} style={{display:'flex'}}><p style={{color:each.color}} >{each.name}</p>
    <button onClick={()=>{handleDel(each)}}>Del</button>
    </div> )
    
  })}
    
    </div>
  )
}



