import Form from './Form';

function FormWrapper({ operand, setOperand }) {
  return (
    <>
      <Form operand={operand} setOperand={setOperand} />
      <hr />
    </>
  );
}
export default FormWrapper;
