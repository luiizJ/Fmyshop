import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: bordex-box;
}
body{
    background-color: #fff;
}
body, button{
    font-family:'poppins'
}
button{
    cursor: pointer;

    &:hover{
        filter: brightness(1.3);
        transition: 0.5s;
    }
}
`;
