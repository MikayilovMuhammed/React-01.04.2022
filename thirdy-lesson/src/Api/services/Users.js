import { HttpClient } from "../HttpClient";

class UsersService extends HttpClient {
  constructor() {
    super("users.com");
  }

  getAllTodos() {
    return this.get("users");
  }
}

export const usersService = new UsersService();
