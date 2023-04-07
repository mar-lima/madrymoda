import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  .img {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
  }

  .welcome {
    width: 600px;
    height: 200px;
    position: absolute;
    background-color: rgb(249 250 250 / 45%);
    box-shadow: 0px 0px 3px 6px rgb(249 250 250 /45%);
    top: 30%;
    left: 24%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

type headerMenu = {
  back?: boolean;
};

export const AnimeText = styled.div<headerMenu>`
  background-color: rgb(249 250 250 / 45%);
  box-shadow: 0px 0px 3px 6px rgb(249 250 250 /45%);
  color: ${(prop) => prop.theme.colors.black};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  position: absolute;
  top: 85%;
  /* left: 17%; */
  left: ${(props) => (props.back ? "17%" : "-200%")};
  transition: all ease-in-out 1.5s;
  span {
    font-size: 32px;
  }
`;
