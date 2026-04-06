import { useState } from "react";

function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}

export default LoginForm;
