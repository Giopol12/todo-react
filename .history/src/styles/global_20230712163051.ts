import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
background: #1E1E1E;
color:${(props) => props.theme.white};
-webkit-font-smoothing:antialiased;
}
body, input, textarea, button{
	font-family:x;
	font-weight:400;
	font-size:1rem;
}`
