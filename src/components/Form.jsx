const Form = ({
  title2,
  placeholder,
  btnValue,
  handleChange,
  handleSubmit,
  name,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{title2}</h2>
      <input
        type="text"
        required
        placeholder={placeholder}
        onChange={handleChange}
        value={name}
      />
      <button>{btnValue}</button>
    </form>
  );
};

export default Form;
