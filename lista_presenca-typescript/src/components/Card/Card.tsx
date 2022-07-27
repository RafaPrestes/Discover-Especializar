import React from 'react'
import './card.css'

export type CardProps = {
  name: string;
  time: string;
}

export function Card (props: CardProps) { //props é usado para acessar as propriedades
  return (
    <div className='card'>
        <strong>{props.name}</strong>
        <small>{props.time}</small>
    </div>
  )
}

