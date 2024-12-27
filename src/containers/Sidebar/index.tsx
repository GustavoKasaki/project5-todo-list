import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <S.Input type="text" placeholder="Search" />
    <S.Filter>
      <CardFilter counter={3} subtitle="pending" />
      <CardFilter counter={2} subtitle="finished" />
      <CardFilter counter={5} subtitle="urgent" />
      <CardFilter counter={1} subtitle="important" />
      <CardFilter counter={1} subtitle="normal" />
      <CardFilter active counter={12} subtitle="all" />
    </S.Filter>
  </S.Aside>
)
export default Sidebar
