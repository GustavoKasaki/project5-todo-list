import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <S.Input type="text" placeholder="Search" />
    <S.Filter>
      <CardFilter />
      <CardFilter />
      <CardFilter />
      <CardFilter />
      <CardFilter />
      <CardFilter active />
    </S.Filter>
  </S.Aside>
)
export default Sidebar
