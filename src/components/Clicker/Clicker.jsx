import {useState} from 'react'; // useState is the hook

function Clicker (props) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count +1)
    }
    // or in onClick: {() => {setCount(count + 1)}}

    return (
        <>
            <button onClick={handleClick}>Click me! {props.emoji}</button>
            <p>I've clicked the button {count} times.</p>
        </>
    )
}

export default Clicker