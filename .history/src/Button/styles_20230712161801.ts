import styled from 'styled-components'

interface ButtonFODASprops {
  variant: 'primary'
}

export const ButtonFODAS = styled.button<ButtonFODASprops>`
  padding: 4px;
  background-color: ${(props) => props.theme};
`
