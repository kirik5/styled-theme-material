import React from 'react'
import {styled} from '@mui/material/styles';
import {Button} from "@mui/material";

const MyMaterialButtonStyled = styled(Button)({

})

const MyMaterialButton = ({children, ...rest}) => {
    return <MyMaterialButtonStyled {...rest}>{children}</MyMaterialButtonStyled>
}

export default MyMaterialButton