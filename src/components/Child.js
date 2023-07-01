import React, { useState } from 'react'

const Child = (props)=> {
    const modal = props.modal;
    const setModal = props.setModal
    console.log(modal)
    function showContent(){
        console.log("boo")
       setModal(!modal);
    }
    if(modal === false){
        return(
            <div className='child'>
                <h1>Child Component</h1>
                <button onClick={showContent}>Show Modal</button>

            </div>
        )
    }
    else{
        return (
            <div className='child'>
            <h1>Child Component</h1>
            <button onClick={showContent}>Show Modal</button>
            <h1>Modal Content</h1>
            <h2>
                This is modal content
            </h2>
        </div>
        )
    }

}

export default Child;