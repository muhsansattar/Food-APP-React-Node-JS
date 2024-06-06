import { StyledButton } from "../../../styles/loginstyles";

const Submitbutton = (props) => {
  return (
    <StyledButton type="submit" onClick={props.handle}>
      Sign Up
    </StyledButton>
  );
};

export default Submitbutton;
