import { Trash } from 'phosphor-react'
import { DoneButton, TaskContainer, TrashButton } from './styles'
import { TaskType } from '../TasksInput'

export function Task({ task }: TaskType) {
  return (
    <TaskContainer>
      <div>
        <DoneButton></DoneButton>
        <p>Integer urna interdum massa libero auctor neque turpis turpis sem</p>
      </div>
      <TrashButton>
        <Trash size={20} />
      </TrashButton>
    </TaskContainer>
  )
}
