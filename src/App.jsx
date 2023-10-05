import { useState } from "react";
import "./App.css";
import Dado from "./components/Dado";

function App() {
  function generarValor() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  function tirar() {
    setvalor1(generarValor());
    setvalor2(generarValor());
    setvalor3(generarValor());
  }

  const [valor1, setvalor1] = useState(0);
  const [valor2, setvalor2] = useState(0);
  const [valor3, setvalor3] = useState(0);

  return (
    <div>
      <Dado valor={valor1} />
      <Dado valor={valor2} />
      <Dado valor={valor3} />
      <br></br>
      <button onClick={tirar}>Tirar Dados</button>
    </div>
  );
}

export default App;
