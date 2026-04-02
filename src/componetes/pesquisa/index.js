import Input from "../input";
import styled from "styled-components";

const Titulo = styled.h2`
    font-size: 34px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 24px;
`
const Subtitulo = styled.h3`
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    color: #fff;
    margin-bottom: 40px;
`
const PesquisaContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    
`
function Pesquisa() {
    return (
        <PesquisaContainer>
            <Titulo>Ja sabe por onde comecar</Titulo>
            <Subtitulo>Encontre seu livro em nossa Estante</Subtitulo>
            <Input
                placeholder="O que vamos Ler hoje?"
            />
        </PesquisaContainer>
    )
}
export default Pesquisa;