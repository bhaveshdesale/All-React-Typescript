import { useState } from "react";

function App() {
  const [name, setName] =
    useState<string>("");

  const [email, setEmail] =
    useState<string>("");

  const [age, setAge] =
    useState<number>(0);

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();

    console.log({
      name,
      email,
      age,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) =>
            setAge(Number(e.target.value))
          }
        />

        <br />

        <button type="submit">
          Register
        </button>
      </form>

      <hr />

      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Age: {age}</h2>
    </>
  );
}

export default App;







// More industry focus code

// export interface User {
//   name: string;
//   email: string;
//   age: number;
// }


// import { useState } from "react";
// import { User } from "../types/user";

// function RegistrationForm() {
//   // Form State
//   const [formData, setFormData] =
//     useState<User>({
//       name: "",
//       email: "",
//       age: 0,
//     });

//   // Submitted User
//   const [submittedUser, setSubmittedUser] =
//     useState<User | null>(null);

//   // Handle Input Changes
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         name === "age"
//           ? Number(value)
//           : value,
//     }));
//   };

//   // Handle Form Submit
//   const handleSubmit = (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     setSubmittedUser(formData);

//     setFormData({
//       name: "",
//       email: "",
//       age: 0,
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>

//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Email</label>

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Age</label>

//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">
//           Register
//         </button>
//       </form>

//       {submittedUser && (
//         <div>
//           <h2>Registered User</h2>

//           <p>
//             Name:
//             {submittedUser.name}
//           </p>

//           <p>
//             Email:
//             {submittedUser.email}
//           </p>

//           <p>
//             Age:
//             {submittedUser.age}
//           </p>
//         </div>
//       )}
//     </>
//   );
// }

// export default RegistrationForm;