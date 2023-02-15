import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signIn } from "../API/userAPI";

const SignIn = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onIdHandler = (e) => {
    setId(e.target.value);
  };
  const onPwHandler = (e) => {
    setPw(e.target.value);
  };

  const checkEmail = /\@+/;
  let data = {
    email: id,
    password: pw,
  };
  const onSignup = async () => {
    const res = await signIn(data);
    if (res?.status === 200) {
      const token = res.data?.access_token;
      localStorage.setItem("token", token);
      navigate("/todo");
    } else {
      alert("등록되지 않은 아이디 입니다.");
    }
  };
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <Navigate to="/todo"></Navigate>
      ) : (
        <>
          <BackGround>
            <Layout>
              <label>ID (@포함)</label>
              <form>
                <input hidden="hidden" />
                <input
                  onChange={onIdHandler}
                  type="id"
                  className="id"
                  data-testid="email-input"
                />
              </form>
              <label>Password (8자리 이상)</label>
              <form>
                <input hidden="hidden" />
                <input
                  onChange={onPwHandler}
                  className="pw"
                  type="password"
                  autoComplete="off"
                  data-testid="password-input"
                />
              </form>
              <button
                onClick={onSignup}
                disabled={!(checkEmail.test(id) && pw.length > 7)}
                type="button"
                className="btn"
                data-testid="signup-button"
              >
                로그인
              </button>
              <Link to="/signup">
                <button className="btn">회원가입</button>
              </Link>
              <Link to="/">
                <button className="btn">메인 페이지</button>
              </Link>
            </Layout>
          </BackGround>
        </>
      )}
    </>
  );
};

export default SignIn;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  display: flex;
  margin-top: 160px;
  flex-direction: column;
  width: 160px;
  justify-content: center;
  .id {
    height: 25px;
    margin-bottom: 16px;
  }
  .pw {
    height: 25px;
    margin-bottom: 16px;
  }
  .btn {
    width: 120px;
    margin-left: 10px;
    margin-bottom: 16px;
  }
`;
