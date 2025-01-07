import { title } from 'process'
import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    title: 'Study Typescript',
    description: 'Watch lessons online',
    priority: 'important',
    status: 'pending'
  },
  {
    title: 'Pay gym bill',
    description: 'Download digital bill',
    priority: 'urgent',
    status: 'finished'
  },
  {
    title: 'Go to gym',
    description: 'Chest, triceps, HIIT',
    priority: 'important',
    status: 'pending'
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
