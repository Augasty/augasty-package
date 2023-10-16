import React, { useState } from 'react'

const Incrementer = () => {
    const [val, setVal] = useState(0)
  return (
    <div>
        <div>{val}</div>
        <button onClick={()=>setVal(val+1)}>Increment</button>
        <br/>
        <button onClick={()=>setVal(0)}>Reset</button>
    </div>
  )
}

export default Incrementer