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
    const indexToUpdate = tasks.findIndex((task) => task.id === taskId)
    if (indexToUpdate !== -1) {
      const updatedTask = { ...updatedTasks[indexToUpdate] }

      updatedTask.done = !updatedTask.done

      updatedTasks[indexToUpdate] = updatedTask

      setTasks(updatedTasks)
    }
  }
  return (
    <TasksContainer>
      <TasksInput addNewTask={addNewTask} />
      <TasksHistory tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
    </TasksContainer>
  )
}
