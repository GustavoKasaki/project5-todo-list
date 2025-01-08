import { useDispatch } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'
import * as enums from '../../utility/enums/Task'
import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ description, priority, status, title, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveBtn onClick={() => setIsEditing(false)}>Save</S.SaveBtn>
            <S.CancelBtn>Discard changes</S.CancelBtn>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Edit</S.Button>
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
