import { ButtonFODAS } from './styles'

interface ButtonProps {
  variant?: 'primary'
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonFODAS variant={variant} />
}
