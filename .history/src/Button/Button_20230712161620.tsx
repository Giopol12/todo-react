import { ButtonFODAS } from './styles'

interface ButtonProps {
  color?: 'primary'
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonFODAS variant={variant} />
}
