import { ClipboardText } from 'phosphor-react'
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
      <WithoutTasksContainer>
        <ClipboardText size={32} color="#6f5681" />
      </WithoutTasksContainer>
    </TasksHistoryContainer>
  )
}
