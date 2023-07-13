import { PlusCircle } from 'phosphor-react'
import { TasksButton, TasksInboxContainer, TasksInput } from './styles'

export function TasksInbox() {
  return (
    <TasksInboxContainer>
      <TasksInput />
      <TasksButton>
        Criar <PlusCircle size={32} />
      </TasksButton>
    </TasksInboxContainer>
  )
}
