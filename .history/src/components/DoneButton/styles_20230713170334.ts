import styled from 'styled-components'
interface DoneButtonContainerProps {
  done: boolean
}
export const DoneButtonContainer = styled.button<DoneButtonContainerProps>`
  padding: 0.5rem;
  ${(props) => props.done ? }
  border-radius: 9999px;
  cursor: pointer;
`
