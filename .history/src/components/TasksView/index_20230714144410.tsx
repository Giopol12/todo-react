import { useState } from 'react'
import { TasksHistory } from '../TasksHistory'
import { TaskType, TasksInput } from '../TasksInput'
import { TasksContainer } from './styles'

export function TasksView() {
  const [tasks, setTasks] = useState([])
  function addNewTask(task: TaskType) {
    setTasks((state) => [...state, task])
  }
  return (
    <TasksContainer>
      <TasksInput addNewTask={addNewTask} />
      <TasksHistory />
    </TasksContainer>
  )
}
