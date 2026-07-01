export type Role = "admin" | "user";

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  role: Role;
  address?: string;
}

export interface ProfileCardProps {
  profileData: User[];
}