import React from 'react'
import './App.css';
import MyButton from "./MyButton";
import {ThemeProvider} from "styled-components";
import {primaryTheme} from "./primaryTheme";
import {Button} from "@mui/material";

function App() {
    return (
        <ThemeProvider theme={primaryTheme}>
            <div className="App">
                <MyButton>Buy NOW!</MyButton>
                <MyButton variant={'contained'}>Contained</MyButton>
                <MyButton variant={'outlined'}>Outlined</MyButton>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
        </ThemeProvider>

    );
}

export default App;
