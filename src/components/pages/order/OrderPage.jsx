import { Link, useLocation } from "react-router-dom";
function OrderPage({ name }) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>Bonjour {name}</h1>
      <Link to={"/"}>
        {" "}
        <button>Déconnexion</button>
      </Link>
    </>
  );
}

export default OrderPage;
