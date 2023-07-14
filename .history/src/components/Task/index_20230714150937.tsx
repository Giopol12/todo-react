import { Check, Trash } from 'phosphor-react'
import { DoneButton, TaskContainer, TrashButton } from './styles'

interface TaskProps {
  task: {
    id: number
    content: string
    done: boolean
  }
}

export function Task({ task }: TaskProps) {
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
