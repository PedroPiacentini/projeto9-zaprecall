import styled from "styled-components";
export default function Card({ card, i }) {
    renderCloseCard(i);
    return (
        <CardContainer>
            <div>
                Pergunta {i + 1}
            </div>
            <img src="\assets\seta_play.png" />
        </CardContainer>
    );
}

function renderCloseCard(i) {
    let cardDone = false;
    console.log(cardDone)
    if (!cardDone) {
        console.log("aaa")
        return (
            <CardContainer>
                <div>
                    Pergunta {i + 1}
                </div>
                <img src="\assets\seta_play.png" />
            </CardContainer>
        );
    }
}

const CardContainer = styled.div`
    width: 300px;
    height: 65px;
    margin-bottom: 25px;

    display: flex;
    justify-content: space-between;
    padding: 20px 15px;

    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    background-color: #FFFFFF;

    div {
        display: flex;
        align-items: center;
    }

    img {
        width: 20px;
        height: 23px;
    }
`