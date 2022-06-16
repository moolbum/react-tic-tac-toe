import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
	
  *{
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }

  body {
  font: 14px "Century Gothic", Futura, sans-serif;
  }
`;

export default GlobalStyle;
