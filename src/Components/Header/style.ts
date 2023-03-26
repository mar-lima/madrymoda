import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${props=> props.theme.colors.black};
    color: ${props=> props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-shadow: 2px 1px 8px 1px #fff,
    2px 4px 6px 6px #000;
    
`