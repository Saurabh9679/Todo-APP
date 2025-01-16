import React, { useState } from 'react'

const Todo = (props) => {

 const [inputText,setInputText]=useState("")

  return (
    <div className='input-container'>
        <input className='input-box-todo'
        placeholder='enter your todo'
        onChange={(e)=>{
             setInputText(e.target.value)
        }}
        value={inputText}
        ></input>
        <button className='add-btn'
        onClick={()=>{
         props.addList(inputText)
         setInputText("")

        }}>+</button>
    
      
    </div>
  )
}

export default Todo
