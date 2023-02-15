import axios from "axios";

const url = `https://pre-onboarding-selection-task.shop/`;

export const signUp = async (data) => {
  try {
    const res = await axios({
      url: `${url}auth/signup`,
      method: "post",
      data,
    });
    return res;
  } catch (error) {}
};

export const signIn = async (data) => {
  try {
    const res = await axios({
      url: `${url}auth/signin`,
      method: "post",
      data,
    });
    return res;
  } catch (error) {}
};
