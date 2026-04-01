import Logo from '../logo/index.js'

import IconesHeader from '../icones/iconesHeader.js';
import OpcoesHeader from '../opcoes/opcoesHeader.js';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>   
        </HeaderContainer>
      
    )
}
export default Header;