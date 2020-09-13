import React from 'react'
import styled from 'styled-components'
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go'

const TogglerLink = styled.a`
  display: flex;
  align-items: center;
  :focus {
    outline-style: none;
  }
  color: inherit;
  cursor: pointer;
  :hover {
    color: #cc4700;
  }
  .icon {
    width: 20px;
    flex-shrink: 0;
  }
`

export const ExpandableSection = ({ on, getTogglerProps, children }) => {
  const Icon = on ? GoTriangleDown : GoTriangleRight
  return (
    <TogglerLink {...getTogglerProps()}>
      <Icon size={20} className="icon" />
      {children}
    </TogglerLink>
  )
}
