import { useState, useEffect } from 'react';

function Form({ operand, setOperand }) {
  const [workingOperand, setWorkingOperand] = useState(0);

  useEffect(() => {
    setWorkingOperand(operand);
  }, [operand]);

  function handleSubmit(e) {
    e.preventDefault();
    if (workingOperand != '') {
      setOperand(parseFloat(workingOperand));
    }
  }
  return (
    <form>
      <label htmlFor="value">Calculate with: </label>
      <input
        type="number"
        id="value"
        value={workingOperand}
        onChange={(e) => setWorkingOperand(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={workingOperand === ''}>
        Submit
      </button>
    </form>
  );
}

export default Form;
