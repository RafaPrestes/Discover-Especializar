import React from 'react'
import './card.css'

const Card = (props) => { //props é usado para acessar as propriedades
  return (
    <div className='card'>
        <strong>{props.name}</strong>
        <small>{props.time}</small>
    </div>
  )
}

export default Card