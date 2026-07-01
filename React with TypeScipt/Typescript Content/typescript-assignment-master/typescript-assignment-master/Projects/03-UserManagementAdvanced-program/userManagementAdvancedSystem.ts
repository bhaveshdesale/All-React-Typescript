// Project: User Management Advanced
// Problem Statement

// Build a TypeScript-based User Management System that demonstrates:

// ✅ Interfaces
// ✅ Literal Types
// ✅ Arrays
// ✅ Objects
// ✅ Functions
// ✅ Generics
// ✅ Partial
// ✅ Pick
// ✅ Omit
// ✅ Record
// ✅ Readonly
// User Model

// Each user should contain:

// id
// name
// email
// password
// role
// isActive

// Where role can only be:

// admin
// user
// manager
// Requirements
// Add users.
// Display all users.
// Update users using Partial.
// Return user preview using Pick.
// Return public users using Omit.
// Create a readonly system configuration.
// Create a role directory using Record.
// Create a generic function that returns the first element of any array.
// Get users by role.






// ======================
// User Model
// ======================



type Role = "admin" | "user" | "manager";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  isActive: boolean;
}

// ======================
// Users Array
// ======================

const users: User[] = [
  {
    id: 1,
    name: "Bhavesh",
    email: "bhavesh@gmail.com",
    password: "123",
    role: "admin",
    isActive: true,
  },
  {
    id: 2,
    name: "Akash",
    email: "akash@gmail.com",
    password: "456",
    role: "user",
    isActive: true,
  },
  {
    id: 3,
    name: "Saurabh",
    email: "saurabh@gmail.com",
    password: "789",
    role: "manager",
    isActive: false,
  },
];

// ======================
// 1. Display Users
// ======================

const displayUsers = (): User[] => {
  return users;
};

console.log(displayUsers());

// ======================
// 2. Partial
// Update User
// ======================

const updateUser = (
  id: number,
  updatedData: Partial<User>
): string => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return "User Not Found";
  }

  Object.assign(user, updatedData);

  return "User Updated Successfully";
};

console.log(
  updateUser(1, {
    name: "Bhavesh Desale",
    isActive: false,
  })
);

// ======================
// 3. Pick
// User Preview
// ======================

type UserPreview = Pick<User, "name" | "email">;

const getUserPreview = (
  id: number
): UserPreview | undefined => {
  const user = users.find((user) => user.id === id);

  if (!user) return undefined;

  return {
    name: user.name,
    email: user.email,
  };
};

console.log(getUserPreview(1));

// ======================
// 4. Omit
// Public User
// ======================

type PublicUser = Omit<User, "password">;

const getPublicUsers = (): PublicUser[] => {
  return users.map(({ password, ...rest }) => rest);
};

console.log(getPublicUsers());

// ======================
// 5. Readonly
// System Config
// ======================

type AppConfig = Readonly<{
  appName: string;
  version: string;
  adminEmail: string;
}>;

const config: AppConfig = {
  appName: "User Management System",
  version: "1.0.0",
  adminEmail: "admin@gmail.com",
};

console.log(config);

// ❌ Error
// config.appName = "New App";

// ======================
// 6. Record
// ======================

const roleDirectory: Record<string, string> = {
  admin: "Bhavesh",
  user: "Akash",
  manager: "Saurabh",
};

console.log(roleDirectory);

// ======================
// 7. Generic Function
// ======================

function getFirstElement<T>(
  arr: T[]
): T | undefined {
  return arr[0];
}

console.log(
  getFirstElement(["A", "B", "C"])
);

console.log(
  getFirstElement([1, 2, 3])
);

console.log(
  getFirstElement(users)
);

// ======================
// 8. Bonus
// Get Users By Role
// ======================

const getUsersByRole = (
  role: Role
): User[] => {
  return users.filter(
    (user) => user.role === role
  );
};

console.log(
  getUsersByRole("admin")
);