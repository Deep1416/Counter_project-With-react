import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Counter.css";

function App() {
  let [counter , setCounter] = useState(0);

  const Add = () => {
    if (counter < 20) setCounter(++counter);

    console.log("hello " + counter);
  };

  const sub = () => {
    if (counter > 0) setCounter(--counter);
    console.log("hii", counter);
  };

  return (
    <>
      <h1>Hello React</h1>
      <div className="box">
        <h2>Counter Number :<p>{counter}</p> </h2>
        <div className="container">
          <button onClick={Add}>Incerease</button>

          <button onClick={sub}>Decerase</button>
        </div>
      </div>
    </>
  );
}

export default App;
