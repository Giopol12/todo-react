import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
background:${(props) => props.theme.background}; 
color:${(props) => props.theme.white};
-webkit-font-smoothing:antialiased;
}
body, input, textarea, button{
	font-family:'Inter', sans-serif;;
	font-weight:400;
	font-size:1rem;
	outline:none;
	color:${(props) => props.theme['gray-100']};
}`
