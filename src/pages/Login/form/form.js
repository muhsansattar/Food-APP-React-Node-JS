import Label from "./Label";
import Input from "./input";
import Submitbutton from "./Submitbutton";
import { useDispatch } from "react-redux";
import { handlelogin } from "../../../store/loginAction";
import { ContainerItem2 } from "../../../styles/loginstyles";
import { useState } from "react";
import { useSelector } from "react-redux";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const HandleLogin = () => {
    if (!email || !password) return;
    dispatch(handlelogin(email, password));
  };

  const Token = useSelector((store) => store.account);

  return (
    <ContainerItem2>
      <Label name="Marchent ID" />
      <Input type="email" value={email} set={setemail} />
      <Label name="Password" />
      <Input type="password" value={password} set={setpassword} />
      <Submitbutton handle={HandleLogin} />
    </ContainerItem2>
  );
};

export default Form;
