import { TasksHistory } from '../TasksHistory'
import { TasksInbox } from '../TasksInbox'
import { TasksContainer } from './styles'

export function TasksView() {
  return (
    <TasksContainer>
      <TasksInbox />
      <TasksHistory />
    </TasksContainer>
  )
}
