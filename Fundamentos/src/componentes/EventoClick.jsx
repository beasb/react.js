const EventoClick = () => {
//8 função com handleClick
const handleClick = () => {
    console.log("handleClick executou")
}

//9 função de renderização
const renderizando = (x) => {
    if(x) {
        return <h1>Renderizando X</h1>
    }else {
        return <h1>Renderizando Y</h1>
    }
}

  return (
    <div>
    <div>
        <button onClick = {() => console.log("teste click")}>CLIQUE AQUI</button>
    </div>

    {/*Chamando função com handleClick */}
    <div>
        <button onClick={handleClick}>Botão com Função</button>
    </div>

{/*Retornando a função com renderização */}
{renderizando(true)}
{renderizando(false)}

    </div>
  )
}

export default EventoClick;