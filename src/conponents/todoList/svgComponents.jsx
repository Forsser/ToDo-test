import ComplexitySvg from '../styles/symbol-defs.svg'
import {Arrow} from '../styles/toDoList.styled'

const SVGComponent = ({ color }) => (
  <svg width="30" height="30" fill={color}>
          <use href={ComplexitySvg + '#icon'}></use>
  </svg>

);

const SvgArrow = ({ isOpen }) => (
  <Arrow isOpen={ isOpen }>
          <use href={ComplexitySvg + '#icondown'}></use>
  </Arrow>

);

export  {SVGComponent,SvgArrow};