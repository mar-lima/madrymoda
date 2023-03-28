import styled from "styled-components";

export const CatalogSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  background-color: black;
`;
export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
`;
export const GaleryContainer = styled.div`
  width: 100%;
  max-width: 250px;
  background-color: azure;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  transition: all ease-in-out .3s;
  border-radius: 15px;
  

  &:hover{
    transform: scale(1.1);
  }

  .box-container {
    display: flex;
    flex-wrap: nowrap;
    /* width: 200vh; */
    /* margin-left: -300px; */
  }
  .img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.white};
    /* margin: 0 10px; */
    width: 250px;
    cursor: pointer;
  }
  .img-box img {
    /* width: 100%; */
    max-width: 250px;
    max-height: 250px;
  }
`;

type scrollBox = {
  move: number
  wid: number
}


export const BoxContainer = styled.div<scrollBox>`
  display: flex;
    flex-wrap: nowrap;
    width: ${props => props.wid};
    margin-left: ${props => props.move +'px'};
    margin-right: ${props => props.move +'px'};
    transition: all ease-in-out .3s;
`