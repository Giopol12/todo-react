import { ClipboardText, Trash } from 'phosphor-react'
import {
  DoneButton,
  Task,
  TaskDone,
  TasksCounterContainer,
  TasksCreated,
  TasksDone,
  TasksHistoryContainer,
  TraskButton,
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
        <div>
          <DoneButton></DoneButton>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis sem
          </p>
        </div>
        <TrashButton>
          <Trash size={20} />
        </TrashButton>
      </Task>
      <TaskDone>
        <div>
          <DoneButton></DoneButton>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis sem
          </p>
        </div>
        <TrashButton>
          <Trash size={20} />
        </TrashButton>
      </TaskDone>
    </TasksHistoryContainer>
  )
}
