import {
  TasksCounterContainer,
  TasksCreated,
  TasksDone,
  TasksHistoryContainer,
} from './styles'

export function TasksHistory() {
  return (
    <TasksHistoryContainer>
      <TasksCounterContainer>
        <TasksCreated></TasksCreated>
        <TasksDone></TasksDone>
      </TasksCounterContainer>
    </TasksHistoryContainer>
  )
}
