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
  padding: 0.5rem;
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;
`
