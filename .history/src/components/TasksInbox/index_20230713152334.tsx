import { PlusCircle } from 'phosphor-react'
import { TasksButton, TasksInboxContainer, TasksInput } from './styles'

export function TasksInbox() {
  return (
    <TasksInboxContainer>
      <TasksInput placeholder="Adicione uma nova tarefa" />
      <TasksButton type="submit">
        Criar <PlusCircle size={16} />
      </TasksButton>
    </TasksInboxContainer>
  )
}
