import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]

const Icone = styled.li`
    margin-right: 40px;
    padding: 0 5px;
    width: 25px;
    cursor: pointer;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
`

function IconesHeader() {
    return(<Icones>
          {icones.map((imgs) => (
            <Icone><img src={imgs} alt='icone'></img></Icone>
          ))}
        </Icones>)
}

export default IconesHeader