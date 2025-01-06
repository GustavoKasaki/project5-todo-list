import Task from '../../components/Task'
import { Container } from './styles'

const TodoList = () => (
  <Container>
    <p>2 tasks marked as: &quot;category&quot; and &quot;term&quot;</p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </Container>
)

export default TodoList
