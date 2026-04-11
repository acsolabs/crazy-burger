import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../reusable-ui/Logo";

function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  position: relative;
  /* background: url("/images/burger-background.jpg") center/cover; */
  background-blend-mode: darken;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/images/burger-background.jpg") center/cover
      rgba(0, 0, 0, 0.735);
    background-blend-mode: darken;
    z-index: -1;
  }
`;

export default LoginPage;
