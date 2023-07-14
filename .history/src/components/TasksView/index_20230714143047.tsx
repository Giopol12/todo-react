import { useState } from 'react'
import { TasksHistory } from '../TasksHistory'
import { TasksInput } from '../TasksInput'
import { TasksContainer } from './styles'

export function TasksView() {
  const [tasks, setTasks] = useState([])
  function addNewTask(task) {
    setTasks((state) => [...state, task])
  }
  return (
    <TasksContainer>
      <TasksInput />
      <TasksHistory />
    </TasksContainer>
  )
}
