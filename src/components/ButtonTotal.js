import React from 'react';
import styled,{css} from 'styled-components';
import { darken } from 'polished';
//배경색
const colorStyle = css`
${({theme,color})=>{
    const selected = theme.palette[color];
    return css`
    background: ${selected};
    &:hover {
        background: ${darken(0.1,selected)};
    }
    `;
}}
`
//사이즈
const sizes = {
    large:{
        height: '3em',
        fontSize: '1.25em',
        width: '40%'
    },
    medium:{
        height: '2.5em',
        fontSize: '1em',
        width: '25%'
    },
    small:{
        height: '1.75em',
        fontSize: '0.825em',
        width: '15%'
    }
}
const sizeStyle = css`
${({size})=>css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    width: ${sizes[size].width};
`}
`;
const fullWidthStyle = css`
    ${props=>
    props.fullWidth &&
    css`
    width: 100%;
  `
 }
`;
const StyledButton = styled.button`
/*공통스타일*/
display: inline-flex;
outline: none;
border:none;
border-radius:4px;
color: white;
font-weight: bold;
cursor: pointer;
padding-left: 1em;
padding-right: 1em;
justify-content:center;  

/*크기*/
font-size: 1em;
margin: 0.5em;
align-items: center;

/*색상*/
${colorStyle}

/*크기스타일*/
${sizeStyle}
${fullWidthStyle}


&+& {
    margin-left:1em;
}
`
const ButtonTotal = ({ children, ...rest }) => {
    
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
};
ButtonTotal.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default ButtonTotal;