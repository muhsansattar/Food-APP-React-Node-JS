import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderElement = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  color: #3333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderElement></LoaderElement>
    </LoaderContainer>
  );
};

export default Loader;
