import React, {useState} from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Search from "./Components/Search";


const App = () => {
   const [input, setInput] = useState("");

  const inputHandler = (e)=>{
    setInput(console.log(e.target.value));
    setInput(e.target.value);
  }


  return (
    <div className = "container">
      <Search inputUpdate={inputHandler} input={input}></Search>
      <Cards />
    </div>
  );
}

export default App;
