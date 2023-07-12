import { ButtonFODAS } from './styles'

interface ButtonProps {
  color?: 'primary'
}

export function Button({ color }: ButtonProps) {
  return <ButtonFODAS variant={color} />
}
