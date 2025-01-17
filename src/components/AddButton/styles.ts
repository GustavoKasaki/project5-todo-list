import { Link } from 'react-router-dom'
import styled from 'styled-components'
import _var from '../../styles/var'

export const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${_var.green};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
`
