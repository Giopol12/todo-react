import { TasksHistory } from '../TasksHistory'
import { TasksInput } from '../TasksInput'
import { TasksContainer } from './styles'

export function TasksView() {
  return (
    <TasksContainer>
      <TasksInput />
      <TasksHistory />
    </TasksContainer>
  )
}
