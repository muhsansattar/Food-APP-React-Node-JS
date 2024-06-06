import styled from "styled-components";

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  margin: 0;
`;

// const Button = styled.button`
//   font-family: ${montserratFont};
// `;

const Container = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  display: grid;
  grid-template-columns: 100px 300px 100px;
  grid-template-rows: 200px 300px 100px;
  justify-content: center;
`;

const ContainerItem1 = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 70px 130px;
  justify-content: center;
`;

const LButton = styled.button`
  margin-left: -90px;
  margin-top: 30px;
  width: 40px;
  font-weight: 600;
  border: none;
  box-shadow: -5px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: rgb(209, 238, 255);
  cursor: pointer;
`;

const Img = styled.img`
  padding-left: 40px;
  width: 60%;
`;

const ContainerItem2 = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
`;

const Labels = styled.label`
  font-size: 12px;
  display: block;
  color: #646464;
  margin: 5px 2px;
`;

const FormItems = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-radius: 8px;
  border: 1px solid rgb(80, 80, 80);
  box-border: ;
`;

const StyledButton = styled.button`
  width: 80%;
  padding: 20px 20px;
  border-radius: 40px;
  margin-left: 30px;
  margin-top: 30px;
  background-color: #00c2ff;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 900;
  cursor: pointer;
`;

const ContainerItem3 = styled.div`
  grid-column: 2/3;
  display: flex;
  align-content: flex-end;
  flex-wrap: wrap;

  p {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

export {
  Container,
  ContainerItem1,
  ContainerItem2,
  ContainerItem3,
  StyledButton,
  Labels,
  Img,
  LButton,
  FormItems,
  BodyWrapper,
};
