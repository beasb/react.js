import './App.css'

//10 Importando imagem do Assets
import ibirapuera from "./assets/Ibirapuera.jpg";

//11 Importando Hooks - useState
import Dados from './assets/componentes/dados';

function App() {
  

  return (
    <div className="Appavancado">
      <h1>Próximos passos React js</h1>
      
      {/*9 Inserindo imagem do public*/}
      <img src="/SP.jpg" alt="imagem de cima, são paulo" />

{/*Importando imagem do assets*/}
<img src={ibirapuera} alt="foto do parque ibirapuera" />

{/*Importando Hooks*/}
<Dados />
    </div>
  )
}

export default App
