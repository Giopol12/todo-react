import { ClipboardText } from 'phosphor-react'
import {
  TasksCounterContainer,
  TasksCreated,
  TasksDone,
  TasksHistoryContainer,
  WithoutTasksContainer,
} from './styles'
import { Task } from '../Task'
import { TaskType } from '../TasksInput'
import { useEffect } from 'react'

interface TasksHistoryProps {
  tasks: TaskType[]
  removeTask: (taksId: number) => void
  doneTask: (taksId: number) => void
}

export function TasksHistory({
  tasks,
  removeTask,
  doneTask,
}: TasksHistoryProps) {
  useEffect(() => {
    console.log(tasks)
  }, [tasks])
  const numOfTasksDone = tasks.reduce((acc, task) => {
    if (task.done) {
      return acc + 1, 0
    }
  })
  return (
    <TasksHistoryContainer>
      <TasksCounterContainer>
        <TasksCreated>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
        </TasksCreated>
        <TasksDone>
          <p>
            Concluidas{' '}
            <span>
              {0} de {tasks.length}
            </span>
          </p>
        </TasksDone>
      </TasksCounterContainer>
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            removeTask={removeTask}
            doneTask={doneTask}
          />
        ))
      ) : (
        <div>
          <WithoutTasksContainer>
            <ClipboardText size="3.5rem" weight="thin" />
            <p>
              Você ainda não tem tarefas cadastradas <br />
              <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
          </WithoutTasksContainer>
        </div>
      )}
    </TasksHistoryContainer>
  )
}
