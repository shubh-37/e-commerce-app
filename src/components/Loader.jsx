import React from 'react'
import "../css/loader.css";
import loader from "../loader.gif";
export default function Loader(){
  return (
    <div className='loader-div'>
        <img src={loader} alt='loading'/>
    </div>
  )
}