import {
  TasksCounterContainer,
  TasksCreated,
  TasksDone,
  TasksHistoryContainer,
  WithoutTasksContainer,
} from './styles'

export function TasksHistory() {
  return (
    <TasksHistoryContainer>
      <TasksCounterContainer>
        <TasksCreated></TasksCreated>
        <TasksDone></TasksDone>
      </TasksCounterContainer>
      <WithoutTasksContainer></WithoutTasksContainer>
    </TasksHistoryContainer>
  )
}
