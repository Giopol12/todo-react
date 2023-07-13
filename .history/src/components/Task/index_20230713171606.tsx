import { DoneButton, TaskContainer, TrashButton } from './styles'

export function Task() {
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
