import styled from 'styled-components'

export const TasksInboxContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`
export const TasksInput = styled.input`
  flex: 1;
  padding: 0.5rem;
`
export const TasksButton = styled.button`
  padding: 1rem;
  background: ${(props) => props.theme['blue-500']};

  display: flex;
  justify-content: space-between;
  align-items: center;
`
