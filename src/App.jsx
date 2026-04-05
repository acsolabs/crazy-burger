import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${name}`);
    setName("");
  };

  return (
    <>
      <Header title="Bienvenue chez nous !" />
      <Form
        title2="Connectez-vous"
        placeholder="Entrez votre prénom..."
        btnValue="Accédez à votre espace"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={name}
      />
    </>
  );
};
export default App;
