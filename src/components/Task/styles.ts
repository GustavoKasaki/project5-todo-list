import styled from 'styled-components'
import _var from '../../styles/var'
import * as enums from '../../utility/enums/Task'

type TagProps = {
  priority?: enums.Priority
  status?: enums.Status
  parameter: 'status' | 'priority'
}

function returnBgColor(props: TagProps): string {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.URGENT) return _var.red
    if (props.priority === enums.Priority.IMPORTANT) return _var.yellow2
  } else {
    if (props.status === enums.Status.PENDING) return _var.yellow
    if (props.status === enums.Status.DONE) return _var.green
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  background-color: ${(props) => returnBgColor(props)};
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  background-color: #2f3640;
  color: #fff;
`

export const SaveBtn = styled(Button)`
  background-color: ${_var.green};
`

export const CancelBtn = styled(Button)`
  background-color: ${_var.red};
`
