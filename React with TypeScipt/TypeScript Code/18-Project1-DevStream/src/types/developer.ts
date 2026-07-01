export interface Developer {
  id: number;
  
  firstName: string;

  lastName: string;

  maidenName: string;

  age: number;

  gender: string;

  email: string;

  phone: string;

  username: string;

  birthDate: string;

  image: string;

  company: {
    title: string;
    department: string;
    name: string;
  };

  address: {
    city: string;
    state: string;
    country: string;
  };
}
export interface DeveloperResponse {
  users: Developer[];
  total: number;
  skip: number;
  limit: number;
}
