import React, { useState } from "react";

export default function One(){
    const [task,setTask] = useState("")
    const [todo,setTodo] = useState([])
    let addtext = (e)=>{
        setTask(e.target.value)
    }
    let handleclick = () =>{
        setTodo([...todo,task])
    }
    console.log(todo)
    return(
        <>
        <input type="text" value={task} placeholder="Enter your task" onChange={addtext} />
        <button onClick={handleclick}>Add</button>
        {todo.map((item)=>{
            return <h1>{item}</h1>
        })}
        </>
    )
}