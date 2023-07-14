import { useState } from 'react'
import { TasksHistory } from '../TasksHistory'
import { TaskType, TasksInput } from '../TasksInput'
import { TasksContainer } from './styles'

export function TasksView() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  function addNewTask(task: TaskType) {
    setTasks((state) => [...state, task])
  }
  function removeTask(taskId: number) {
    const newTasksList = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasksList)
  }
  function doneTask(taskId: number) {
    const updatedTasks = [...tasks]
    const indexToUpdate = tasks.indexOf((task) => task.id === taskId)
  }
  return (
    <TasksContainer>
      <TasksInput addNewTask={addNewTask} />
      <TasksHistory tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
    </TasksContainer>
  )
}
