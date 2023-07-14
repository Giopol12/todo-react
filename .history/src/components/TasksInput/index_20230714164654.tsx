import { PlusCircle } from 'phosphor-react'
import { TasksButton, TasksInboxContainer, TasksInputContainer } from './styles'
import { ChangeEvent, FormEvent, useState } from 'react'

export interface TaskType {
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
  function handleCreateTask(e: FormEvent) {
    e.preventDefault()
    addNewTask({ content: newTextTask, done: false, id: Math.random() })
    setNewTextTask('')
  }
  return (
    <TasksInboxContainer onSubmit={handleCreateTask}>
      <TasksInputContainer
        value={newTextTask}
        onChange={handleNewTextTask}
        placeholder="Adicione uma nova tarefa"
      />
      <TasksButton type="submit">
        Criar <PlusCircle size={16} />
      </TasksButton>
    </TasksInboxContainer>
  )
}
