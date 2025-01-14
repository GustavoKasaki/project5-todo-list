import styled from 'styled-components'

export const FormDiv = styled.form`
  max-width: 560px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666666;

  textarea {
    margin: 16px 0;
    height: 160px;
    resize: none;
  }
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  input {
    margin-right: 4px;
  }

  label {
    margin-right: 6px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
