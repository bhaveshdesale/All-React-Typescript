export interface User {
  id: number;
  firstName?: string;
  lastName?: string;
  maidenName?: string;
  age?: number;

  email?: string;
  phone?: string;

  image?: string;

  username: string;
}

export interface UpdateUserRequest {
  id:number,
  firstName: string;
  lastName: string;
  email: string;
}