import styled from 'styled-components'

export const TasksInboxContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
`
export const TasksInput = styled.input`
  flex: 1;
  padding: 0.5rem;
`
export const TasksButton = styled.button`
  color: ${(props) => props.theme.white};
`
