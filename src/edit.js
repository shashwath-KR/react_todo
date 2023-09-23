import React from "react";
import { useState } from "react";

const Edit = ({todos, onSave}) => {
  const[input, setInput] = useState(todos.userData)

  return (
     <form className="savecard" onSubmit={(e) => onSave(e, input)}>
     <input type='text' className='input1' value={input} placeholder='enter' onChange={(e) => setInput(e.target.value)} />
     <button className="save">Save</button>
      </form>
  )
}

export default Edit;