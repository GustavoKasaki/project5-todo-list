import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <S.Input
        type="text"
        placeholder="Search"
        value={term}
        onChange={(e) => dispatch(changeTerm(e.target.value))}
      />
      <S.Filter>
        <CardFilter counter={3} subtitle="pending" />
        <CardFilter counter={2} subtitle="done" />
        <CardFilter counter={5} subtitle="urgent" />
        <CardFilter counter={1} subtitle="important" />
        <CardFilter counter={1} subtitle="normal" />
        <CardFilter active counter={12} subtitle="all" />
      </S.Filter>
    </S.Aside>
  )
}
export default Sidebar
