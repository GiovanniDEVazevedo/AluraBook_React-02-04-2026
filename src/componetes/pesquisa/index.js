import Input from "../input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";
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
    flex-direction: column; /* Empilha a 'Busca' em cima da 'Vitrine' */
    align-items: center;
    padding: 60px 0;
    width: 100%;
    
`


export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 220px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Capa = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const Titulos = styled.h3`
  font-size: 1.1rem;
  margin: 10px 0;
  color: #000000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;


const ColunaDestaque = styled.div`
  display: flex;
    flex-direction: column; /* Empilha os 3 elementos de texto/input */
    align-items: center;
    margin-bottom: 40px;
`;const VitrineCards = styled.div`
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;       
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;   
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);   
`;
function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisado] = useState([])
    
    return (
        <PesquisaContainer>
            <ColunaDestaque>
            <Titulo>Ja sabe por onde comecar</Titulo>
            <Subtitulo>Encontre seu livro em nossa Estante</Subtitulo>
            <Input
                placeholder="O que vamos Ler hoje?"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.titulo.includes(textoDigitado))
                    setLivrosPesquisado(resultadoPesquisa)
                    
                } }
                />
            </ColunaDestaque>
           <VitrineCards>
                {livrosPesquisados.map(livro => (
                    <Card key={livro.id}>
                        <Capa src={livro.src} />
                        <Titulos>{livro.titulo}</Titulos>
                    </Card>
                ))}
            </VitrineCards>
        </PesquisaContainer>
    );
}
export default Pesquisa;