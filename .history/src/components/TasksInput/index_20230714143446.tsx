import { PlusCircle } from 'phosphor-react'
import { TasksButton, TasksInboxContainer, TasksInputContainer } from './styles'

export function TasksInput() {
  const [newTextTask, setNewTextTask] = useState('')
  function handleNewTextTask(e: ChangeEvent) {}
  return (
    <TasksInboxContainer>
      <TasksInputContainer
        onChange={handleNewTextTask}
        placeholder="Adicione uma nova tarefa"
      />
      <TasksButton type="submit">
        Criar <PlusCircle size={16} />
      </TasksButton>
    </TasksInboxContainer>
  )
}
