import { DoneButtonContainer } from './styles'

interface DoneButtonProps {
  done: booleean
}

export function DoneButton({ done = false }) {
  return <DoneButtonContainer></DoneButtonContainer>
}
