import { Header } from '../../components/Header'
import { TasksView } from '../../components/TasksView'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <TasksView />
    </HomeContainer>
  )
}
