import { DoneButtonContainer } from './styles'

interface DoneButtonProps {
  done: boolean
}

export function DoneButton({ done = false }: DoneButtonProps) {
  return <DoneButtonContainer></DoneButtonContainer>
}
