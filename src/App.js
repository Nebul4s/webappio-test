import { useState } from "react";

function App() {
  const [things, setThings] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    setThings((things) => [...things, text]);
    console.log(things);
  };

  const changeText = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <h1>Thing Lister</h1>
      <h2>A completely useless react app</h2>
      <h3>Why did i do this? I guess I'll never know...</h3>
      <div>
        <input type="text" onChange={changeText} />
        <button onClick={addItem}>Submit</button>
      </div>
      <ul>
        {things &&
          things.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
