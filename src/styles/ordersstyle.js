import { styled } from "styled-components";

const OrderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0f0f0;
  margin: 0;
`;
const OrderDetailsContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  font-size: 14px;
`;

const Orderheadercontainer = styled.div`
  height: 100px;
`;

const Orderfootercontainer = styled.div`
  height: 100px;
`;

const OrderButton = styled.button`
  padding: 10px;
  margin: 10px;
`;

export {
  OrderBody,
  OrderDetailsContainer,
  Orderheadercontainer,
  Orderfootercontainer,
  OrderButton,
};
