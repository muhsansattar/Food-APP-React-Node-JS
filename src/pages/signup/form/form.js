import Label from "./label";
import Input from "./input";
import Submitbutton from "./submitbutton";
import { ContainerItem2 } from "../../../styles/loginstyles";
import { useState } from "react";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const HandleLogin = async () => {
    const userData = {
      email,
      password,
    };
    const response = await fetch(
      "http://localhost:8000/api/v1/vendor/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    if (!response) return alert("Unable to create : " + data.status);
    alert(`Vender Saved ${data.status}`);
  };

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
