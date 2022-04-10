import React, { useState } from 'react'


export default function Textform() {
    const [count,setCount] = useState(0)
    let inc = (num) =>{
        setCount(count + num)
    }
    let dic = (num) =>{
        setCount(count - num)
    }
    let double = (num) =>{
        setCount(count * num)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>inc(1)}>Inc</button>
    <button onClick={()=>dic(1)}>dic</button>
    <button onClick={()=>double(2)}>Double</button>
    </>
  )
}
