import { Check, Trash } from 'phosphor-react'
import { DoneButton, TaskContainer, TrashButton } from './styles'
import { TaskType } from '../TasksInput'

interface TaskProps {
  task: {
    id: number
    content: string
    done: boolean
  }
  removeTask: (taks: TaskType) => void
  doneTask: (taks: TaskType) => void
}

export function Task({ task, removeTask, doneTask }: TaskProps) {
  return (
    <TaskContainer>
      <div>
        <DoneButton>
          {task.done ?? <Check size={12} color="#6f5681" />}
        </DoneButton>
        <p>{task.content}</p>
      </div>
      <TrashButton>
        <Trash size={20} />
      </TrashButton>
    </TaskContainer>
  )
}
