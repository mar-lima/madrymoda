import styled from "styled-components";

export const Footer = styled.div`
    margin-top: 150px;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${prop => prop.theme.colors.grayPrimary};
    color: ${prop => prop.theme.colors.graySecundary};
`