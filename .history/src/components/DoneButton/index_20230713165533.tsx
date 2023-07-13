import { DoneButtonContainer } from './styles'

interface DoneButtonProps {
  done: boolean
}

export function DoneButton({ done = false }) {
  return <DoneButtonContainer></DoneButtonContainer>
}
