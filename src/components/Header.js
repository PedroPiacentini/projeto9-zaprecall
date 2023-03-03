import styled from "styled-components";
export default function Header() {
    return (
        <HeaderContainer>
            <img src="/assets/logo.png" />
            <h1>ZapRecall</h1>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    position: fixed;

    width: 100%;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FB6B6B;

    img {
        width: 52px;
        height: 60px;
    }

    h1 {
    width: 203px;

    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    line-height: 44.7px;
    letter-spacing: -1.2%;
    text-align: center;
    color: #FFFFFF;
}
`;