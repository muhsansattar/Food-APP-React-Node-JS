import Signupfooter from "./Signupfooter";
import Signupheader from "./Signupheader";
import Form from "./form/form";
import { BodyWrapper } from "../../styles/loginstyles";
import { Container } from "../../styles/loginstyles";

const Signup = () => {
  return (
    <BodyWrapper>
      <Container>
        <Signupheader />
        <Form />
        <Signupfooter />
      </Container>
    </BodyWrapper>
  );
};

export default Signup;
