import React from 'react'


export interface ButtonProps{
    label: string;
}

// todo, add a usestate here for checking
const Button = (props:ButtonProps) => {
  return (
    <button>{props.label}</button>
  )
}

export default Button