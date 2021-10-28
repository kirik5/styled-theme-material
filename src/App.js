import React from 'react'
import './App.css';
import MyButton from "./MyButton";

function App() {
    return (
        <div className="App">
            <MyButton>Buy NOW!</MyButton>
            <MyButton variant={'contained'}>Contained</MyButton>
            <MyButton variant={'outlined'}>Outlined</MyButton>
        </div>
    );
}

export default App;
