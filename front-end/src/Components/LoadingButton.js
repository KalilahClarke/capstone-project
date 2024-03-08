import React from 'react'
import "./LoadingButton.css";

export default function LoadingButton({loading, text, handleClick}) {
  
  return (
    <button onClick={handleClick}> {text}
         <div className="loading">{loading && "Loading..."}</div> 
    </button>
  )
}
