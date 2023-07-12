import { ButtonFODAS } from './styles'

interface ButtonProps {
  color?: 'primary'
}

export function Button({ color = 'primary' }: ButtonProps) {
  return <ButtonFODAS variant={color} />
}
