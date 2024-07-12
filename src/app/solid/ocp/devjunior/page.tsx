import Input from './Input';
import InputLabel from './InputLabel';

export default function OCP() {
  return (
    <div>
      <h2>
        <a href="https://youtu.be/VsC1pm4CUFM">Open-Closed Principle</a>
      </h2>
      <Input label="Name" leftIcon placeholder="Informe seu nome" >
        <InputLabel id="Input">
          Nome
        </InputLabel>
      </Input>
    </div>
  );
}
