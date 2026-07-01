import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../services/userService";
import type { User } from "../../type/user";

export const fetchUsers =
createAsyncThunk<User[],  void>(
  "users/fetchUsers",

  async () => {
    return await getUsers();
  }
);