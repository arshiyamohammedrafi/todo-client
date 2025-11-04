import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Main from "./Main";
function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
    <Main />
    </>
  );
}

export default App;
