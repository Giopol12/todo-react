import { Header } from '../../components/Header'
import { Tasks } from '../../components/Tasks'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Tasks />
    </HomeContainer>
  )
}
