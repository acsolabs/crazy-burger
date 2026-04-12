import styled from "styled-components";

const Logo = () => {
  return (
    <LogoStyled>
      <h2> Crazyy</h2>
      <img src="/images/logo-orange.png" alt="logo Crazy Burger" />
      <h2>Burger</h2>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  min-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transform: scale(2.1);

  h2 {
    font-family: "AmaticSC-Bold";
    color: #ff9f1b;
    font-size: 36px;
    line-height: 0px;
    letter-spacing: 1.5px;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
  }
  img {
    width: 80px;
    height: 60px;
    object-fit: contain;
    object-position: center;
  }
`;

export default Logo;
