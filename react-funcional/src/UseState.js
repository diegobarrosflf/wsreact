import {useState} from 'react';

function UseState() {
  
  const [numeroA, setNumeroA] = useState()
  const [numeroB, setNumeroB] = useState()
  const [resultado, setResultado] = useState();

  const somar = () => {
    const numeroAInt = parseInt(numeroA)
    const numeroBInt = parseInt(numeroB)

    setResultado(numeroAInt + numeroBInt)
  }
  
  return (
    <div>
      Numero 1:<br/>
      <input type="text" value={numeroA} onChange={e => setNumeroA(e.target.value)}/><br/>
      Numero 2:<br/>
      <input type="text" value={numeroB} onChange={e => setNumeroB(e.target.value)} /><br/>
      <button onClick={somar}>Somar</button><br/>
      Resultado:<br/>
      <input type="text" value={resultado}/><br/>
    </div>
  );
}

export default UseSatate;
