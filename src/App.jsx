import { useState, createContext } from 'react';
import './App.css';
import FormWrapper from './FormWrapper';
import CalculatorWrapper from './CalculatorWrapper';

export const OperandContext = createContext(null);

function App() {
  const [operand, setOperand] = useState(0);

  return (
    <main>
      <h1>MultiCalc</h1>
      <OperandContext.Provider value={{ operand, setOperand }}>
        <FormWrapper />
        <CalculatorWrapper />
      </OperandContext.Provider>
    </main>
  );
}

export default App;
