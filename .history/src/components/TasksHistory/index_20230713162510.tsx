import { ClipboardText } from 'phosphor-react'
import {
  DoneButton,
  Task,
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
        <TasksCreated>
          <p>
            Tarefas criadas <span>0</span>
          </p>
        </TasksCreated>
        <TasksDone>
          <p>
            Concluidas <span>0</span>
          </p>
        </TasksDone>
      </TasksCounterContainer>
      {/* <WithoutTasksContainer>
        <ClipboardText size="3.5rem" weight="thin" />
        <p>
          Você ainda não tem tarefas cadastradas <br />
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </WithoutTasksContainer> */}
      <Task>
        <DoneButton></DoneButton>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </Task>
    </TasksHistoryContainer>
  )
}
