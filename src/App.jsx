import { useState } from "react";
import "./App.css";
import Dado from "./components/Dado";
import Contador from "./components/Contador";

function App() {
  /*
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
  */
  function realizarConteo() {
    setNumero(numero + 1);
  }
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <Contador valor={numero} />
      <br />
      <button onClick={realizarConteo}>+</button>
    </div>
  );
}

export default App;
