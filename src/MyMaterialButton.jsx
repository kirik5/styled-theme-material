import React from 'react'
import {styled} from '@mui/material/styles';
import {Button} from "@mui/material";

const MyMaterialButtonStyled = styled(Button)(({theme}) => ({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary}`,
}))

const MyMaterialButton = ({children, ...rest}) => {
    return <MyMaterialButtonStyled {...rest}>{children}</MyMaterialButtonStyled>
}

export default MyMaterialButton