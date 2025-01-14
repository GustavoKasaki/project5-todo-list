import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
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

  const showFilterResults = (amount: number) => {
    let msg = ''
    const complement =
      term !== undefined && term.length > 0 ? `and "${term}"` : ''

    if (criteria === 'all') {
      msg = `${amount} task(s) marked as: "all" ${complement}`
    } else {
      msg = `${amount} task(s) marked as: "${`${criteria} = ${value}`}" ${complement}`
    }

    return msg
  }

  const tasks = taskFilter()
  const message = showFilterResults(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{message}</Title>
      <ul>
        <li>{term}</li>
        <li>{criteria}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {tasks.map((t) => (
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
    </MainContainer>
  )
}

export default TodoList
