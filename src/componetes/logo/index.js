import logo from '../../imagens/logo.svg'

import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 20px;
  text-align: center;
  justify-content: center;
`
const LogoImage = styled.img`
  margin-right: 10px;
`


function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                alt='logo'
                src={logo}
                className='logo-img'
            />
            
            <p><strong>ALura</strong>Books</p>
       </LogoContainer>
    )
}
export default Logo