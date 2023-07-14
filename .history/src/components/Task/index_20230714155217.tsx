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
        <DoneButton onClick={handleToggleDone}></DoneButton>
        {task.done === true ?? <Check size={24} color="#6f5681" />}
        <p>{task.content}</p>
      </div>
      <TrashButton onClick={handleRemoveTask}>
        <Trash size={20} />
      </TrashButton>
    </TaskContainer>
  )
}
