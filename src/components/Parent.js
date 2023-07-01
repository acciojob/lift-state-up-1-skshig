import React, { useState } from 'react'
import Child from "./Child";

const Parent = ()=> {
let [modal, setModal] = useState(false);

    return(
        <div className='parent'>
            <h1>Parent Component</h1>
            <Child modal={modal} setModal={setModal} />
        </div>
    )
}

export default Parent;