import {useState} from 'react';
import useStore from './somaReducer'

function ReducerHook() {
  
  const [numeroA, setNumeroA] = useState()
  const [numeroB, setNumeroB] = useState()

  const [store, dispatch] = useStore()
  
  const somar = () => {
    const numeroAInt = parseInt(numeroA)
    const numeroBInt = parseInt(numeroB)

    dispatch({
        type: 'SOMA',
        payload: numeroAInt + numeroBInt
        })
  }

  const subtrair = () => {
    const numeroAInt = parseInt(numeroA)
    const numeroBInt = parseInt(numeroB)

    dispatch({
        type: 'SUBTRACAO',
        payload: numeroAInt - numeroBInt
        })
  }

  return (
    <div>
      Numero 1:<br/>
      <input type="text" value={numeroA} onChange={e => setNumeroA(e.target.value)}/><br/>
      Numero 2:<br/>
      <input type="text" value={numeroB} onChange={e => setNumeroB(e.target.value)} /><br/>
      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button><br/>
      Resultado:<br/>
      <input type="text" value={store.resultado} readOnly/><br/>
    </div>
  );
}

export default ReducerHook;
