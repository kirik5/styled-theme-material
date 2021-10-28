import React from 'react'
import styled, {css} from 'styled-components'
import {defaultTheme} from "./defaultTheme";

const ButtonStyled = styled.button`
  padding: 10px 20px;
  color: grey;
  background-color: white;
  border: 1px solid grey;
  border-radius: 30px;

  ${props => props.variant === "contained" && css`
    color: ${props => props.theme.palette.primary};
    background-color: ${props => props.theme.palette.background};
    border: 1px solid ${props => props.theme.palette.primary};
  `}

  ${props => props.variant === "outlined" && css`
    color: ${props => props.theme.palette.background};
    background-color: ${props => props.theme.palette.primary};
    border: 1px solid ${props => props.theme.palette.primary};
  `}
  
  &:hover {
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);
  }
`

ButtonStyled.defaultProps = {
    theme: defaultTheme,
}

const MyButton = ({children, ...rest}) => {
    return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default MyButton