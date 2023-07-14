import { PlusCircle } from 'phosphor-react'
import { TasksButton, TasksInboxContainer, TasksInputContainer } from './styles'
import { ChangeEvent, useState } from 'react'

interface TaskType {
  content: string
  done: boolean
  id: number
}

interface TaskInputProps {
  addNewTask: (taks: TaskType) => void
}
export function TasksInput({ addNewTask }: TaskInputProps) {
  const [newTextTask, setNewTextTask] = useState('')
  function handleNewTextTask(e: ChangeEvent<HTMLInputElement>) {
    setNewTextTask(e.target.value)
  }
  return (
    <TasksInboxContainer>
      <TasksInputContainer
        onChange={handleNewTextTask}
        placeholder="Adicione uma nova tarefa"
      />
      <TasksButton onSubmit={} type="submit">
        Criar <PlusCircle size={16} />
      </TasksButton>
    </TasksInboxContainer>
  )
}
