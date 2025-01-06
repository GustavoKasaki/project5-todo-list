import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Title>Task Name</S.Title>
    <S.Tag>Important</S.Tag>
    <S.Tag>Pending</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Button>Edit</S.Button>
      <S.Button>Remove</S.Button>
    </S.ActionBar>
  </S.Card>
)

export default Task
