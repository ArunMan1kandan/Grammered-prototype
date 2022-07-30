import styled from "styled-components";
import { Link } from "react-router-dom";

const background = require("../../images/bg.svg").default;
const mobilebg = require("../../images/mobilebg.svg").default;

export const Container = styled.div `
min-height:692px;
position:fixed;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
background-image:url(${background});
background-repeat: no-repeat;

@media screen and(max-width:480px)
{
    background-image:url(${mobilebg});
    background-repeat:no-repeat;
}
`


export const FormWrap = styled.div `
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and(max-width:400px)
{
    height:70%;
}
`

export const Icon = styled(Link)
`
margin-left:32px;
margin-top:12px;
text-decoration:none;
color:rgb(1, 191, 113);
font-weight:500;
font-size:32px;

@media screen and(max-width:480px)
{
    margin-left:16px;
    margin-top:8px;
}
`


export const FormContent = styled.div `
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and(max-width:480px)
{
    padding:10px;
}
`

export const Form = styled.form `
background:rgba(255,255,255,0,15);
box-shadow:0 1px 22px 0 rgba(31,38,135,0.37);
backdrop-filter:blur(8.5px);
max-width:400px;
height:auto;
width:100%;
border-radius:20px;
z-index:1;
display:grid;
margin:0 auto;
padding:80px 32px;



@media screen and (max-width:400px)
{
    padding : 32px 32px;
}
`

export const FormH1 = styled.h1 `
margin-bottom:40px;
color:black;
font-size:25px;
font-weight:500;
text-align:center;
`

export const FormLabel = styled.label `
margin-bottom:8px;
font-size:14px;
color:#fff;
`

export const FormInput = styled.input `
padding:16px 16px;
margin-bottom:25px;
border:none;
border-radius:30px;
background:rgba(255,255,255,0.15);
box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
outline:none;
&:focus
{
    display:inline-block;
    box-shadow:0 0 0 2px black;
    backdrop-filter:blur(12rem);
    border-radius:2rem;
}

&::placeholder
{
    color:black;
    font-weight:100;
}
`

export const FormButton = styled.button `
background:#2ED397;
padding:16px 0;
border:none;
border-radius:4px;
color:white;
font-size:18px;
cursor:pointer;
border-radius:30px;
margin-top:10px;
`

export const Text = styled.span `
text-align:center;
margin-top:24px;
color:white;
font-size:14px;
cursor:pointer;
`

export const StyledIcon = styled.div `
display:flex;
justify-content:space-evenly;
align-items:center;
border-radius:20px;
color:white;
cursor:pointer;
margin-top:50px;

svg
{
    width:1.5rem;
    height:1.5rem;
}

`