import styled from "styled-components";

export default function Footer({ cards, counter }) {
    return (
        <FooterContainer data-test="footer">
            {counter}/{cards.length} CONCLUIDOS
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0px;

    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    background-color: #FFFFFF;

    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 26.1px;
    color: #333333;
`