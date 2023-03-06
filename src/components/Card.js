import styled from "styled-components";
import { useState } from "react";
import ZapOptions from "./ZapOptions";

export default function Card({ card, i, setCounter, counter }) {
    const [cardStage, setCardStage] = useState(1);

    let texto, img, dataTest;
    if (cardStage === 1 || cardStage % 4 === 0) {
        texto = "pergunta " + (i + 1)
        if (cardStage === 4) {
            img = "/assets/icone_erro.png";
            dataTest = "no-icon";
        } else if (cardStage === 8) {
            img = "/assets/icone_quase.png";
            dataTest = "partial-icon";
        } else if (cardStage === 12) {
            img = "/assets/icone_certo.png";
            dataTest = "zap-icon";
        } else {
            img = "/assets/seta_play.png";
            dataTest = "play-btn";
        }

    } else if (cardStage === 2) {
        texto = card.question;
        img = `/assets/seta_virar.png`;
        dataTest = "turn-btn";
    } else if (cardStage === 3) {
        texto = card.answer;

    } else {
    }



    return (
        <CardContainer data-test="flashcard" cardStage={cardStage}>
            <div>
                <span data-test="flashcard-text">{texto}</span>
            </div>
            <img data-test={dataTest} onClick={cardStage < 4 ? () => { setCardStage(cardStage + 1) } : () => { return }} src={img} />
            <ZapOptions cardStage={cardStage} setCardStage={setCardStage} setCounter={setCounter} counter={counter} />
        </CardContainer>
    );
}

function isOpen(propsCardStage) {
    return propsCardStage === 2 || propsCardStage === 3;
}
const CardContainer = styled.div`

    width: 300px;
    min-height: ${props => isOpen(props.cardStage) ? "131px" : "65px"};
    height: ${props => isOpen(props.cardStage) ? "auto" : "65px"};
    margin-bottom: 25px;
    
    display: flex;
    flex-direction: ${props => props.cardStage === 3 ? "column" : ""};
    flex-wrap: ${props => props.cardStage === 3 ? "wrap" : ""};
    justify-content: space-between;
    padding-top: ${props => isOpen(props.cardStage) ? 18 : 20}px;
    padding-bottom: ${props => props.cardStage === 2 ? 6 : props.cardStage === 3 ? 10 : 22}px;
    padding-left: 15px;
    padding-right: 15px;

    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    background-color: #FFFFFF;
    font-weight: ${props => isOpen(props.cardStage) ? 400 : 700};
    line-height: ${props => isOpen(props.cardStage) ? 21.6 : 19.2}px;

    color: ${props => props.cardStage === 4 ? "#FF3030" : props.cardStage === 8 ? "#FF922E" : props.cardStage === 12 ? "#2FBE34" : ""};

    div {
        display: flex;
        align-items: ${props => isOpen(props.cardStage) ? "flex-start" : "center"};
    }

    img {
        height: ${props => isOpen(props.cardStage) ? 20 : 23}px;
        margin-top: ${props => isOpen(props.cardStage) ? 85 : 0}px;
        display: ${props => props.cardStage === 3 ? "none" : ""};
    }
`