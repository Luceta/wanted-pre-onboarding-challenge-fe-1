import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
   * {
    box-sizing: border-box;
  }
  html{
    width:100%;
    height:100%;
  }
  button{
    background:inherit;
    border:none;
    padding:0;
    cursor: pointer;
  }
  input:focus{
    outline:none;
  }
`;

export default GlobalStyle;
