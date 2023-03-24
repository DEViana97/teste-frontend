import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  }

  user-select, li{
    padding: 0;
    margin: 0;
  }

  body {
    background: #F3f5f7	;
    
  }
`;
