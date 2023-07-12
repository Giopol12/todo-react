import { ButtonFODAS } from './styles'

interface ButtonProps {
  variant?: 'primary'
}

export function Button(color: ButtonProps) {
  return <ButtonFODAS variant="primary" />
}
