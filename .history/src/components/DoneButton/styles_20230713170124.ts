import styled from 'styled-components'
interface DoneButtonContainerProps {
  done: boolean
}
export const DoneButtonContainer = styled.button<DoneButtonContainerProps>`
  padding: 0.5rem;
  ${(props) => props.done === false}
  border-radius: 9999px;
  cursor: pointer;
`
