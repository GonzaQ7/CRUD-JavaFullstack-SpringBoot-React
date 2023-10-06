import { useState } from "react";
import "./App.css";
import ListadoResultados from "./components/ListadoResultados";
import FormularioNumeros from "./components/FormularioNumeros";

function App() {
  const [operaciones, setOperaciones] = useState([]);

  function sumar(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.valor1.value);
    const v2 = parseInt(event.target.valor1.value);
    const suma = v1 + v2;

    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2,
    };
    setOperaciones([nuevo, ...operaciones]);

    event.target.valor1.value = "";
    event.target.valor2.value = "";
  }

  return (
    <div>
      <FormularioNumeros onSumar={sumar} />
      <ListadoResultados resultados={operaciones} />
    </div>
  );
}

export default App;
