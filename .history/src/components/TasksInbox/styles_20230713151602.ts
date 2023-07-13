import styled from 'styled-components'

export const TasksInboxContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: -1.5rem;
`
export const TasksInput = styled.input`
  flex: 1;
  padding: 0.5rem;
`
export const TasksButton = styled.button`
  padding: 1rem;
  background: ${(props) => props.theme['blue-500']};
  border: none;
  border-radius: 8px;

  font-size: 0.875rem;
  font-weight: bold;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`
