import { ClipboardText } from 'phosphor-react'
import {
  TasksCounterContainer,
  TasksDone,
  TasksHistoryContainer,
  TasksInfo,
  WithoutTasksContainer,
} from './styles'

export function TasksHistory() {
  return (
    <TasksHistoryContainer>
      <TasksCounterContainer>
        <TasksInfo>
          <p>
            Tarefas criadas <span>0</span>
          </p>
        </TasksInfo>
        <TasksInfo>
          <p>
            Concluidas <span>0</span>
          </p>
        </TasksInfo>
      </TasksCounterContainer>
      <WithoutTasksContainer>
        <ClipboardText size="3.5rem" color="#6f5681" />
        <p>
          Você ainda não tem tarefas cadastradas <br />
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </WithoutTasksContainer>
    </TasksHistoryContainer>
  )
}
