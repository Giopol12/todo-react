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
  align-items
`
