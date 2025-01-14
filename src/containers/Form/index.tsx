import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Input, MainContainer, SaveBtn, Title } from '../../styles'
import { FormDiv, Options, Option } from './styles'
import * as enums from '../../utility/enums/Task'
import { register } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      register({
        description,
        priority,
        status: enums.Status.PENDING,
        title
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Create new task</Title>
      <FormDiv onSubmit={registerTask}>
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Title"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Description"
        />
        <Options>
          <p>Priority:</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                id={priority}
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveBtn type="submit">Create</SaveBtn>
      </FormDiv>
    </MainContainer>
  )
}

export default Form
