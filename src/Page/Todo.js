import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createTodo, getTodo } from "../API/todoAPI";
import TodoList from "../component/TodoList";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const onTodo = (e) => {
    setTodo(e.target.value);
  };
  const data = {
    todo: todo,
  };
  const submit = () => {
    createTodo(token, data);
    window.location.reload();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    async function getNewTodo() {
      const res = await getTodo(token);
      setList(res?.data);
    }
    getNewTodo();
  }, [setList]);

  return (
    <>
      {token ? (
        <Layout>
          <input onChange={onTodo} data-testid="new-todo-input" />
          <button onClick={submit} data-testid="new-todo-add-button">
            추가
          </button>
          {Array.isArray(list) && list.length > 0 ? (
            list.map((e, idx) => (
              <div key={idx}>
                <TodoList item={e}></TodoList>
              </div>
            ))
          ) : (
            <div></div>
          )}
          <Link to="/">
            <button style={{ marginRight: "12px" }} className="btn">
              메인 페이지
            </button>
          </Link>
          <button onClick={logout} className="btn">
            로그아웃
          </button>
        </Layout>
      ) : (
        <>
          <Navigate to="/signin"></Navigate>
          {alert("로그인해 주세요.")}
        </>
      )}
    </>
  );
};

export default Todo;

const Layout = styled.div`
  margin-top: 160px;
  text-align: center;
  .btn {
    margin-top: 100px;
    width: 90px;
    height: 30px;
    font-size: 16px;
    border-radius: 8px;
  }
`;
