import styled, { createGlobalStyle } from 'styled-components'
import _var from './var'

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Title = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Input = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  background-color: ${_var.darkblue};
  color: #fff;
`

export const SaveBtn = styled(Button)`
  background-color: ${_var.green};
`

export default GlobalStyle
