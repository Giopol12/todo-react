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
    border-radius:
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-200']};
  };
`
export const TasksDone = styled.div``
export const WithoutTasksContainer = styled.div``
