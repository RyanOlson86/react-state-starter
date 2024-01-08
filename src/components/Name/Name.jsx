import { useState } from "react"; // useState is the hook

function Name() {
  const [name, setName] = useState("DEFAULT VALUE");
  const [nameInput, setNameInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setName(nameInput);
    setNameInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Hello! My name is {name}.</p>
      <label htmlFor="nameInput">Your Name!</label>
      <input 
        onChange={(event) => setNameInput(event.target.value)} 
        type="text" 
        id="nameInput" 
        value={nameInput}
        />
      <button type="submit">Change Display Name</button>
    </form>
  );
}

export default Name;
