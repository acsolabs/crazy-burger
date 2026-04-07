import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OrderPage from "../order/OrderPage";

function LoginForm() {
  //state
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order"); // alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //render
  return (
    <form onSubmit={handleSubmit}>
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
      <Link to={"/order"}>
        <button>Accéder à votre espace</button>
      </Link>
    </form>
  );
}

export default LoginForm;
