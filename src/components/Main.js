import styled from "styled-components";
import Card from "./Card";

export default function Main({ cards }) {
    return (
        <ContainerMain>
            {cards.map((card, i) =>
                <Card card={card} i={i} />
            )}
        </ContainerMain>
    );
}

const ContainerMain = styled.main`
    margin-top: 150px;
    margin-bottom: 70px;

    display: flex;
    flex-direction: column;

    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: #333333;
`