import { useState } from "react";

const Dados = () => {
 
    let mostreDados = 10;

  //12 atribuindo novo valor
  const [novoNumero, setNovoNumero] = useState(15);

    return(
<div>
    <p>Valor: {mostreDados}</p>

    {/*Exibindo novo valor atribuido */}
    <p>Novo valor: {novoNumero}</p>
    
    {/*exibindo um novo valor através de um evento de click */}
<button onClick={() => setNovoNumero(20)}>Mudando o valor após click</button>

</div>

 )
}

export default Dados;