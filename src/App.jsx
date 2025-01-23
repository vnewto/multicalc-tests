import { useState } from 'react';
import './App.css';
import FormWrapper from './FormWrapper';
import CalculatorWrapper from './CalculatorWrapper';

function App() {
  const [operand, setOperand] = useState(0);

  return (
    <main>
      <h1>MultiCalc</h1>
      <FormWrapper operand={operand} setOperand={setOperand} />
      <CalculatorWrapper operand={operand} />
    </main>
  );
}

export default App;
