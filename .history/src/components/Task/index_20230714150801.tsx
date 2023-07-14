import { Trash } from 'phosphor-react'
import { DoneButton, TaskContainer, TrashButton } from './styles'
import { TaskType } from '../TasksInput'

interface TaskProps{
  task:{
    TaskType
  }
}

export function Task({ task }: TaskType) {
  return (
    <TaskContainer>
      <div>
        <DoneButton></DoneButton>
        <p>{task.}</p>
      </div>
      <TrashButton>
        <Trash size={20} />
      </TrashButton>
    </TaskContainer>
  )
}
