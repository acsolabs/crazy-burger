import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForwardOutline } from "react-icons/io5";
import TextInput from "../reusable-ui/TextInput";
import { PiUserCircleFill } from "react-icons/pi";

function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //render
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <TextInput
        Icon={<PiUserCircleFill className="iconUser" />}
        handleChange={handleChange}
        inputValue={inputValue}
        placeholder={"Entrez votre prénom"}
      />
      <button>
        Accéder à votre espace
        <IoChevronForwardOutline className="iconChevron" />
      </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 48px;
    padding: 20px;
    position: relative;
    font-family: "AmaticSC-Bold";
    line-height: 61px;
    letter-spacing: 0%;
    text-align: center;
    color: white;
    &::after {
      content: "";
      position: absolute;
      background: #f56a2c;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -50%);
      height: 3px;
      width: 400px;
    }
  }

  h2 {
    font-family: "AmaticSC-Bold";
    font-size: 36px;
    line-height: 46px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    color: white;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 55px;
    background-color: #ff9f1b;
    color: white;
    border: none;
    border-radius: 4px;
    margin: 10px;
    cursor: pointer;
    color: white;
    border: none;
    outline: none;
    margin: 10px;

    &:hover {
      background: white;
      color: #ff9f1b;
    }
    &:hover .iconChevron {
      color: #ff9f1b;
    }
    .iconChevron {
      color: white;
    }
  }
`;

export default LoginForm;
