import styled from "styled-components";

// export const CatalogSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
//   height: 100vh;
// `;
// export const Container = styled.div`
//   width: 100%;
//   height: auto;
//   display: flex;
//   /* flex-wrap: nowrap; */
//   align-items: center;
//   justify-content: space-around;
// `;
export const GaleryContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  transition: all ease-in-out 0.3s;
  border-radius: 15px;

  &:hover {
    transform: scale(1.1);
    #next,
    #prev {
      display: flex;
      opacity: 0.8;
      visibility: visible;
    }
  }

  svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 750px) {
  }
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.graySecundary};
  width: 250px;
  /* height: 250px; */
  cursor: pointer;

  img {
    height: 100%;
    max-height: 250px;
  }

  @media (max-width: 750px) {
    margin-top: 50px;
  }
`;

type scrollBox = {
  move: number;
  wid: number;
};

export const BoxContainer = styled.div<scrollBox>`
  display: flex;
  flex-wrap: nowrap;
  width: ${(props) => props.wid};
  margin-left: ${(props) => props.move + "px"};
  margin-right: ${(props) => props.move + "px"};
  transition: all ease-in-out 0.3s;
`;

export const Prev = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  height: 100%;
  top: 0px;
  left: 0px;
  color: ${(props) => props.theme.colors.black};
  transition: all ease-in-out 0.3s;
  cursor: pointer;
`;
export const Next = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  align-items: center;
  height: 100%;
  top: 0px;
  right: 0px;
  color: ${(props) => props.theme.colors.black};
  transition: all ease-in-out 0.3s;
  cursor: pointer;
`;
