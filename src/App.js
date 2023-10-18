import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from "./components/Counter.js"

function App() {
  const [data, setData] = useState("React is fun!!");
  function handleClick(){

    setData("This is another value!!!");

  }


 return (
  <div className="App">
    {data}
    <button onClick={handleClick}>Click Me</button>

    <Counter />


  </div>
 );
}

export default App;
