import styled from 'styled-components'

export const TasksHistoryContainer = styled.div`
  width: 100%;
`
export const TasksCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`
export const TasksCreated = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme['blue-300']};
  span {
    background: ${(props) => props.theme['gray-400']};
    border-radius: 9999px;
    font-size: 0.75rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-200']};
  }
`
export const TasksDone = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme['purple-300']};
  span {
    background: ${(props) => props.theme['gray-400']};
    border-radius: 9999px;
    font-size: 0.75rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-200']};
  }
`
export const WithoutTasksContainer = styled.div`
  border-radius: 8px;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  svg,
  p {
    color: ${(props) => props.theme['gray-300']};
    font-weight: bold;
  }
  span {
    font-weight: 400;
  }
`
export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-400']};

  background: ${(props) => props.theme['gray-500']};
  div {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  p {
    font-size: 0.875rem;
  }
`
export const DoneButton = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme['blue-300']};
  border-radius: 9999px;
  cursor: pointer;
  & + div {
    margin-bottom: 10rem;
  }
`
export const TraskButton = styled.button`
  color: ${(props) => props.theme['gray-300']};
  background: transparent;
  border: none;
  cursor: pointer;
`
export const TaskDone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-400']};

  background: ${(props) => props.theme['gray-500']};
  div {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  p {
    font-size: 0.875rem;
  }
`
