import styled from 'styled-components'
interface DoneButtonProps {
  done: boolean
}
export const DoneButtonContainer = styled.button<DoneButtonProps>`
  padding: 0.5rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme['blue-300']};
  border-radius: 9999px;
  cursor: pointer;
`
