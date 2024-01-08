import {useState} from 'react'; // useState is the hook

function Name() {
    const [name, setName] = useState('Ryan');

    return (
        <p>Hello! My name is {name}.</p>
    )
}

export default Name