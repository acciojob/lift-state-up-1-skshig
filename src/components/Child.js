import React, { useState } from 'react'

const Child = (props)=> {
    const modal = props.modal;
    const setModal = props.setModal
    function showContent(){
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
            <h3>Modal Content</h3>
            <p>
                This is the modal content.
            </p>
        </div>
        )
    }

}

export default Child;