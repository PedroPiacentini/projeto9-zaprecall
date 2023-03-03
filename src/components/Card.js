import styled from "styled-components";
import { useState } from "react";

export default function Card({ card, i }) {
    let isOpen = false;
    let isQuestion = true;
    const [cardStage, setCardStage] = useState([isOpen, isQuestion]);

    let texto, img;
    if (!cardStage[0]) {
        texto = "pergunta" + (i + 1)
        if (cardStage[1]) {
            img = "/assets/seta_play.png"
        } else {
            img = `/assets/seta_virar.png`
        }
    } else {
        if (!cardStage[1]) {
            texto = card.question;
            img = `/assets/seta_virar.png`;
        }
    }


    return (
        <CardContainer cardStage={cardStage}>
            <div>
                {texto}
            </div>
            <img onClick={() => { setCardStage([true, false]); console.log("uis ") }} src={img} />
        </CardContainer>
    );
}

let isOpen;
let isQuestion;
const CardContainer = styled.div`


    width: 300px;
    height: ${props => props.cardStage[0] ? 131 : 65}px;
    margin-bottom: 25px;
    
    display: flex;
    justify-content: space-between;
    padding: 20px ${props => props.cardStage[0] ? 18 : 20}px;

    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    background-color: #FFFFFF;
    font-weight: ${props => props.cardStage[0] ? 400 : 700};
    line-height: ${props => props.cardStage[0] ? 21.6 : 19.2}px;

    div {
        display: flex;
        align-items: ${props => props.cardStage[0] ? "flex-start" : "center"};
    }

    img {
        height: ${props => props.cardStage[0] ? 20 : 23}px;
    }
`