import { ClipboardText, Trash } from 'phosphor-react'
import {
  TasksCounterContainer,
  TasksCreated,
  TasksDone,
  TasksHistoryContainer,
  WithoutTasksContainer,
} from './styles'
import { Task } from '../Task'
import { useState } from 'react'

export function TasksHistory() {
  const [tasks, setTasks] = useState(1)
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
      {tasks > 0 ? <div>oi</div> : <div>nao</div>}
      <WithoutTasksContainer>
        <ClipboardText size="3.5rem" weight="thin" />
        <p>
          Você ainda não tem tarefas cadastradas <br />
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </WithoutTasksContainer>
      <Task />
    </TasksHistoryContainer>
  )
}
