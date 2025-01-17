import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utility/enums/Task'
import * as S from './styles'
import { Button, Input } from '../../styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      {showFilters ? (
        <>
          <Input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => dispatch(changeTerm(e.target.value))}
          />
          <S.Filter>
            <CardFilter
              value={enums.Status.PENDING}
              criteria="status"
              subtitle="pending"
            />
            <CardFilter
              value={enums.Status.DONE}
              criteria="status"
              subtitle="done"
            />
            <CardFilter
              value={enums.Priority.URGENT}
              criteria="priority"
              subtitle="urgent"
            />
            <CardFilter
              value={enums.Priority.IMPORTANT}
              criteria="priority"
              subtitle="important"
            />
            <CardFilter
              value={enums.Priority.NORMAL}
              criteria="priority"
              subtitle="normal"
            />
            <CardFilter criteria="all" subtitle="all" />
          </S.Filter>
        </>
      ) : (
        <Button onClick={() => navigate('/')}>Discard and go back</Button>
      )}
    </S.Aside>
  )
}
export default Sidebar
