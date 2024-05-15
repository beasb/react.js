
const TemplateExpressions = () => {

// 4 - Criando uma variável
const nome = "Ana"

// 5 - objeto

const dados = {
  idade: 34,
  profissao: "professora"
}

return (
 <div>
  <p>A soma é {4 + 9}</p>
  <h3>Boas-vindas {nome} </h3>
  <p>Vi aqui que você tem {dados.idade} anos e é {dados.profissao} </p>
 </div>
)

}


export default TemplateExpressions;

