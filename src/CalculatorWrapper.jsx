import Calculator from './Calculator';

function CalculatorWrapper({ operand }) {
  return (
    <>
      <h2>Calculations</h2>
      <Calculator operand={operand} />
    </>
  );
}

export default CalculatorWrapper;
