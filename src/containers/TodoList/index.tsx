import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const taskFilter = () => {
    let filteredTasks = items

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criteria === 'priority') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criteria === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    } else {
      return items
    }
  }

  return (
    <Container>
      <p>2 tasks marked as: &quot;category&quot; and &quot;{term}&quot;</p>
      <ul>
        <li>{term}</li>
        <li>{criteria}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {taskFilter().map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
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
}

export default TodoList
