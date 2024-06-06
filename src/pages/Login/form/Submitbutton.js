import { StyledButton } from "../../../styles/loginstyles";

const Submitbutton = (props) => {
  return (
    <StyledButton type="submit" onClick={props.handle}>
      Access
    </StyledButton>
  );
};

export default Submitbutton;
