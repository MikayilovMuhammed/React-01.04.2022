import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getAllTodos = (setState) => {
  axios.get(`${baseUrl}/todos`).then(({ data }) => setState(data));
};
