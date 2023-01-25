import React from 'react'
import { useParams } from 'react-router';
import "./search.css"

export default function Search() {
  const param = useParams()
  const results = param.name

  return (
    <div  className='res'>
      Resultados para: {results}
      <br />
      <small>buscador aún no implementado</small>
    </div>
  )
}
