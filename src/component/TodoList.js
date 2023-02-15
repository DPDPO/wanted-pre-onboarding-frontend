import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteTodo, editTodo } from "../API/todoAPI";

const TodoList = ({ item }) => {
  const [modify, setModify] = useState("");
  const [edit, setEdit] = useState(false);
  const [check, setCheck] = useState(false);
  const token = localStorage.getItem("token");

  const onDelete = (id) => {
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      alert("삭제되었습니다");
      deleteTodo(token, id);
      window.location.reload();
    }
  };
  const onCheck = (id, text) => {
    setCheck(!check);
    const data = {
      todo: text,
      isCompleted: check,
    };
    editTodo(token, id, data);
  };
  const onEdit = () => {
    setEdit(true);
  };
  const onEditSubmit = async (id) => {
    const content = {
      todo: modify,
      isCompleted: !check,
    };
    const res = await editTodo(token, id, content);
    if (res?.status === 200) {
      window.location.reload();
    } else {
      alert("입력해주세요");
    }
  };
  const onModify = (e) => {
    setModify(e.target.value);
  };
  const onCancle = () => {
    setEdit(false);
  };
  useEffect(() => {
    {
      item?.isCompleted ? setCheck(false) : setCheck(true);
    }
  }, [check]);
  return (
    <>
      <>
        {edit ? (
          <Container>
            <li key={item.id}>
              <label className="todo">
                <input
                  onClick={() => onCheck(item.id, item.todo)}
                  type="checkbox"
                  defaultChecked={item.isCompleted}
                />
              </label>
              <input
                defaultValue={item.todo}
                onChange={onModify}
                data-testid="modify-input"
              />
              <button
                onClick={() => onEditSubmit(item.id)}
                data-testid="submit-button"
              >
                제출
              </button>
              <button onClick={onCancle} data-testid="cancel-button">
                취소
              </button>
            </li>
          </Container>
        ) : (
          <Container>
            <li key={item.id}>
              <label className="todo">
                <input
                  onClick={() => onCheck(item.id, item.todo)}
                  type="checkbox"
                  defaultChecked={item.isCompleted}
                />
                <span>{item.todo}</span>
              </label>
              <button onClick={() => onEdit(true)} data-testid="modify-button">
                수정
              </button>
              <button
                onClick={() => onDelete(item.id)}
                data-testid="delete-button"
              >
                삭제
              </button>
            </li>
          </Container>
        )}
      </>
    </>
  );
};

export default TodoList;

const Container = styled.div`
  margin-top: 8px;
  .todo {
    margin-right: 12px;
  }
`;
