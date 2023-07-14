import { Check, Trash } from 'phosphor-react'
import { DoneButton, TaskContainer, TrashButton } from './styles'

interface TaskProps {
  task: {
    id: number
    content: string
    done: boolean
  }
  removeTask: (taksId: number) => void
  doneTask: (taksId: number) => void
}

export function Task({ task, removeTask, doneTask }: TaskProps) {
  function handleToggleDone() {
    doneTask(task.id)
  }
  function handleRemoveTask() {
    removeTask(task.id)
  }

  return (
    <TaskContainer>
      <div>
        <DoneButton onClick={handleToggleDone}>
          {task.done ? <Check size={12} /> : ''}
        </DoneButton>
        <p>{task.content}</p>
      </div>
      <TrashButton onClick={handleRemoveTask}>
        <Trash size={18} />
      </TrashButton>
    </TaskContainer>
  )
}
