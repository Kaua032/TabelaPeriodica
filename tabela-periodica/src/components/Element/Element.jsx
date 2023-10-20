import React from 'react'
import { ElementBackground } from './ElementStyled'

const Element = ({category, number, symbol}) => {
  return (
    <ElementBackground category={category}>
        <h2>{number}</h2>
        <h2>{symbol}</h2>
    </ElementBackground>
  )
}

export default Element