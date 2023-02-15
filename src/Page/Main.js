import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <TitleContainer>
        <div>프리온보딩 과제</div>
      </TitleContainer>
      <ButtonContainer>
        <Link to="/todo">
          <button className="todo">할일</button>
        </Link>
        <Link to="/signin">
          <button className="login">로그인</button>
        </Link>
        <Link to="/signup">
          <button className="signup">회원가입</button>
        </Link>
      </ButtonContainer>
    </>
  );
};

export default Main;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  font-size: 80px;
  font-weight: 800;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .login {
    margin-right: 20px;
    width: 120px;
    height: 60px;
    font-size: 16px;
    border-radius: 8px;
  }
  .signup {
    width: 120px;
    height: 60px;
    font-size: 16px;
    border-radius: 8px;
  }
  .todo {
    margin-right: 20px;
    width: 120px;
    height: 60px;
    font-size: 16px;
    border-radius: 8px;
  }
`;
