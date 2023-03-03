import styled from "styled-components";
export default function ZapOptions({ cardStage }) {
    if (cardStage === 3) {
        return (
            <ZapContainer>
                <Red>Não lembrei</Red>
                <Yellow>Quase não lembre</Yellow>
                <Green>Zap!</Green>
            </ZapContainer>
        );
    }
}

const Red = styled.button`
    background-color: #FF3030;
`

const Yellow = styled.button`
    background-color: #FF922E;
`

const Green = styled.button`
    background-color: #2FBE34;
`
const ZapContainer = styled.div`
    width: 264px;
    height: 37px;

    margin-top: 22px;

    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    
    display: flex;
    justify-content: space-between;

    button {
        width: 85px;
        height: 37px;
        border-radius: 5px;
        color: #FFFFFF;
    }
`