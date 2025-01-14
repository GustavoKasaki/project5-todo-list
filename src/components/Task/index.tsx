import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'

import * as S from './styles'
import * as enums from '../../utility/enums/Task'
import { remove, edit, changeStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { Button, SaveBtn } from '../../styles'

type Props = TaskClass

const Task = ({
  description: originalDescription,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEdit() {
    setIsEditing(false)
    setDescription(originalDescription)
  }

  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus({ id, done: e.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.DONE}
          onChange={changeTaskStatus}
        />
        <S.Title>
          {isEditing && <em>Editing: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={!isEditing}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveBtn
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Save
            </SaveBtn>
            <S.CancelBtn onClick={cancelEdit}>Discard changes</S.CancelBtn>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.CancelBtn onClick={() => dispatch(remove(id))}>
              Remove
            </S.CancelBtn>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
