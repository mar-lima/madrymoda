import styled from "styled-components";
import backImg from "../../assets/backImage.png";

export const Section = styled.div`
  padding-top: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 650px) {
    padding-top: 80px;
  }
`;

export const Container = styled.div`
  padding-bottom: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  overflow-x: hidden;
  background-image: url(${backImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  .welcome {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    height: 150px;
    background-color: rgb(249 250 250 / 45%);
    box-shadow: 0px 0px 3px 6px rgb(249 250 250 /45%);
  }

  @media (max-width: 1024px) {
    .welcome {
      max-width: 450px;
      height: 100px;
    }
    .welcome h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 650px) {
    background-size: cover;
    background-position: right;
    .welcome {
      max-width: 350px;
      height: 80px;
    }
    .welcome h1 {
      font-size: 22px;
    }
  }
  /* @media (max-width: 650px){
    .welcome {
      max-width: 350px;
      height: 80px;
    }
    .welcome h1 {
      font-size: 22px;
    }
  } */
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
  /* position:${(props) => (props.back ? "relative" : "static")}; */
  position: relative;
  top: 12%;
  left: ${(props) => (props.back ? "0%" : "-200%")};
  transition: all ease-in-out 1.5s;
  span {
    font-size: 32px;
    text-align: center;
  }

  @media (max-width: 1024px) {
    max-width: 600px;

    span {
      padding: 5px;
      font-size: 26px;
    }
  }

  @media (max-width: 650px) {
    max-width: 400px;

    span {
      padding: 5px;
      font-size: 16px;
    }
  }
`;
