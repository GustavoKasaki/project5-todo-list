import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utility/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  subtitle: string
  criteria: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ subtitle, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const verifyIsActive = () => {
    const sameCriteria = filter.criteria === criteria
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }

  const taskCounter = () => {
    if (criteria === 'all') return tasks.items.length
    if (criteria === 'priority') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (criteria === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
  }

  const filterDispatch = () => {
    dispatch(
      changeFilter({
        criteria,
        value
      })
    )
  }

  const active = verifyIsActive()
  const counter = taskCounter()

  return (
    <S.Card active={active} onClick={filterDispatch}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default CardFilter
