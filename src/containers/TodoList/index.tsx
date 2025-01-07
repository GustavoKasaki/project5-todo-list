import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../utility/enums/Task'

const tasks = [
  {
    title: 'Study Typescript',
    description: 'Watch lessons online',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.PENDING
  },
  {
    title: 'Pay gym bill',
    description: 'Download digital bill',
    priority: enums.Priority.URGENT,
    status: enums.Status.DONE
  },
  {
    title: 'Go to gym',
    description: 'Chest, triceps, HIIT',
    priority: enums.Priority.NORMAL,
    status: enums.Status.PENDING
  }
]

const TodoList = () => (
  <Container>
    <p>2 tasks marked as: &quot;category&quot; and &quot;term&quot;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
            description={t.description}
            title={t.title}
            priority={t.priority}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default TodoList
