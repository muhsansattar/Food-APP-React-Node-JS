import Loginfooter from "./Loginfooter";
import Loginheader from "./Loginheader";
import Form from "./form/form";
import { BodyWrapper } from "../../styles/loginstyles";
import { Container } from "../../styles/loginstyles";
import GoogleLoginComponent from "../../components/googleLogin";

const Login = () => {
  return (
    <BodyWrapper>
      <Container>
        <Loginheader />
        <Form />
        <GoogleLoginComponent />
        <Loginfooter />
      </Container>
    </BodyWrapper>
  );
};

export default Login;
