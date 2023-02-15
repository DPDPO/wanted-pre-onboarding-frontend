import axios from "axios";

const url = `https://pre-onboarding-selection-task.shop/`;

export const createTodo = async (token, data) => {
  try {
    const res = await axios({
      url: `${url}todos`,
      method: "post",
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {}
};

export const getTodo = async (token) => {
  try {
    const res = await axios({
      url: `${url}todos`,
      method: "get",
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {}
};

export const deleteTodo = async (token, id) => {
  try {
    const res = await axios({
      url: `${url}todos/${id}`,
      method: "delete",
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {}
};

export const editTodo = async (token, id, data) => {
  try {
    const res = await axios({
      url: `${url}todos/${id}`,
      method: "put",
      headers: { Authorization: `Bearer ${token}` },
      data,
    });
    return res;
  } catch (error) {}
};
