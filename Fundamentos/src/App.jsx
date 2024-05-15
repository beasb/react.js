import './App.css';

import PrimeiroComponente from './componentes/PrimeiroComponente';


// 3 - Importando Template Expressions
import TemplateExpressions from './componentes/TemplateExpressions';


// 2 - Exibindo componente importado na tela
function App() {
  return(
    <div className="AppFundamentos">
      <h1> Fundamentos do React</h1>
      <PrimeiroComponente />
      <TemplateExpressions />
    </div>
  )  
 }

export default App;