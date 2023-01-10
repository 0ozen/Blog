import React from 'react'
import "./section.css"
import code from "./code.jpg"

export default function Section() {
  return (
    <div className='section'>
      <div >
        <img src={code} loading="lazy" alt=""  width={"230px"}/>
        <p>section post</p>
      </div>
    </div>
  )
}

