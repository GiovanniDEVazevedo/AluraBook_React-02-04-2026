import styled from 'styled-components'

const Opcao = styled.li`
  font-size: 16px;
  min-width: 120px;
  
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 10%;
  padding: 0 5px;
  cursor: pointer;
  
`
const Opcoes = styled.ul`
  display: flex;
  justify-content: space-around;
  
`

const textOpcoes = ['Categoria', 'Estante', 'Meus favoritos']

function OpcoesHeader() {
    return(
     <Opcoes>
          {textOpcoes.map((texto) => (
            <Opcao className='opcao'><p>{ texto }</p></Opcao>
          ) ) }
        </Opcoes>
)
}

export default OpcoesHeader