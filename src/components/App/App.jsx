import './App.css';
import Clicker from '../Clicker/Clicker';
import Name from '../Name/Name.jsx'
// {useState} is a shortcut for:
// import react from 'react'
// let useState = react.useState

function App() {

    return (
        <div className="App">
            <Name />
            <Clicker emoji='🦄'/>
            <Clicker emoji='🐼'/>
            <Clicker emoji='🍟'/>
        </div>
    );
}

export default App;
