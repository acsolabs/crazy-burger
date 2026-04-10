import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <input
        type="text"
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        required
        value={inputValue}
      />
      <button>Accéder à votre espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  border: 2px solid green;
  background-color: #00800046;
  display: flex;
  flex-direction: column;
`;

export default LoginForm;
