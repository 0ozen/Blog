import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './post.css';

export default function Post({children,id,title}) {
 
  const navigate = useNavigate();
  const titleMod = title.replace(" ","-")

  const handleClick = (id)=>{ 
    navigate(`/${titleMod}`);
  }
 
  return (
    <article className='post' onClick={()=>handleClick(id)}>   
      {children}
    </article>
  )
}
