import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #827a8a;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #625672;
    }

    body {
        margin: 0;
        padding: 0;
        background: no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1734%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1735)'%3e%3c/rect%3e%3cpath d='M0 0L314.49 0L0 192.18z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 192.18L314.49 0L830.08 0L0 223.91z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 223.91L830.08 0L856.61 0L0 267.59z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 267.59L856.61 0L945.14 0L0 428.61z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L1112.13 560L1440 499.48z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 499.48L1112.13 560L795.8000000000002 560L1440 228.27000000000004z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 228.27000000000004L795.8 560L567.9399999999999 560L1440 226.35000000000005z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 226.35000000000002L567.9399999999999 560L286.2699999999999 560L1440 112.94000000000003z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1734'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='84.72%25' y1='139.29%25' x2='15.28%25' y2='-39.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1735'%3e%3cstop stop-color='rgba(60%2c 13%2c 114%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(170%2c 156%2c 56%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3  {
        font-family: 'Raleway', Sans-Serif;
        font-weight: 100;
        color: #343434;
        margin: 0;
    }

    h4, h5 {
        font-family: 'Staatliches', cursive;
        color: #343434;
        margin: 0;
    }

    hr {
        border: 0;
        height: 1px;
        background: rgb(242,242,242);
        background: linear-gradient(351deg, rgba(242,242,242,0) 0%, rgba(211,208,218,1) 20%, rgba(211,208,218,1) 50%, rgba(211,208,218,1) 80%, rgba(242,242,242,0) 100%);        
        width: 80%;
        margin: auto;

    .lightSVG > path, .cls-1 > path {
        fill: #ececec
    }

    .lightSVG > path, .cls-1 > path {
        fill: #ececec
    }

    
}

`

export default GlobalStyle;