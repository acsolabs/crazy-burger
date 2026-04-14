import { PiUserCircleFill } from "react-icons/pi";
import styled from "styled-components";

const TextInput = ({ handleChange, inputValue, Icon, ...extraProps }) => {
  return (
    <InputStyled className="input-container">
      {Icon && Icon}
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        {...extraProps}
      />
    </InputStyled>
  );
};

export default TextInput;

const InputStyled = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: 55px;
  margin: 10px;
  border-radius: 4px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: white;
  .iconUser {
    color: #ababab;
    font-size: 1.5rem;
  }
  input {
    border: none;
    outline: none;
    width: 136px;
    height: 17px;
  }
`;
