import * as S from './styles'
import { useState } from 'react'
import * as enums from '../../utility/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ description, priority, status, title }: Props) => {
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
            <S.CancelBtn>Remove</S.CancelBtn>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
