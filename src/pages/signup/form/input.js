import { FormItems } from "../../../styles/loginstyles";

const Input = (props) => {
  return (
    <FormItems
      type={props.type}
      value={props.value}
      onChange={(e) => props.set(e.target.value)}
    ></FormItems>
  );
};

export default Input;
