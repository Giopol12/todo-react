import { PlusCircle } from 'phosphor-react'
import { TasksButton, TasksInboxContainer, TasksInputContainer } from './styles'

export function TasksInput() {
  return (
    <TasksInboxContainer>
      <TasksInputContainer placeholder="Adicione uma nova tarefa" />
      <TasksButton type="submit">
        Criar <PlusCircle size={16} />
      </TasksButton>
    </TasksInboxContainer>
  )
}
