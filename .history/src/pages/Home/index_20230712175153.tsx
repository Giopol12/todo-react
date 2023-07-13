import { Header } from '../../components/Header'
import { Tasks } from '../../components/Tasks'
import { TasksInbox } from '../../components/TasksInbox'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Tasks />
    </HomeContainer>
  )
}
