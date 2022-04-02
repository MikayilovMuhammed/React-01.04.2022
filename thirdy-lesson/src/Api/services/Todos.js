import { HttpClient } from "../HttpClient";

class TodosService extends HttpClient {
  constructor() {
    super("localhost:3000");
  }

  getAllTodos() {
    return this.get("blogs");
  }
  getTodosById(id) {
    return this.getById("todos", id);
  }
}

export const todosService = new TodosService();
