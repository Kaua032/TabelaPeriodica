import React from 'react'
import { ElementBackground } from './ElementStyled'

const Element = ({category, number, symbol}) => {
  return (
    <ElementBackground category={category}>
        <h2>{number}</h2>
        <h3>{symbol}</h3>
    </ElementBackground>
  )
}

export default Element