// Project: Student Management System
// Problem Statement

// Create a TypeScript program to manage students in a college.

// Each student should have:

// id
// name
// age
// isActive
// Requirements
// Add students to the system.
// Display all students.
// Search a student by ID.
// Count total students.
// Display only adult students (age >= 18).
// Check whether a student is active or inactive.
// Create a greeting function using a default parameter.



// 1) My try


type student={
  id:number,
  name:string,
  age:number,
  isActive:boolean
}
let Students:student[]=[];

//1) Add Students
const addStudent=(st:student)=>{
   Students.push(st);

}
addStudent({id:1, name:"bhavesh",age:22, isActive:true});
addStudent({id:2, name:"saurabh",age:22, isActive:false});
addStudent({id:3, name:"bhumika",age:22, isActive:true});




// 2) Display all students
const displayStudents=()=>{
  return Students;

}

console.log(displayStudents());


// 3) search by id
const searchStudent=(id:number)=>{
  return Students.map((st)=> {
    if(st.id==id){
      console.log("Student Found " +st.name);
    }
   

  })

}

console.log(searchStudent(1));


// 4) Count Total Students
const countTotalStudent=()=>{
  return Students.length;
}

console.log(countTotalStudent());


// 5) get adult Student
const adultStudent=()=>{
 return Students.filter((st)=> st.age>=18);
}

console.log(adultStudent());




// 2)  Ai code


// Student Type
// type Student = {
//   id: number;
//   name: string;
//   age: number;
//   isActive: boolean;
// };

// // Students Array
// let students: Student[] = [];

// // 1) Add Student
// const addStudent = (student: Student): void => {
//   students.push(student);
// };

// // Adding Students
// addStudent({
//   id: 1,
//   name: "Bhavesh",
//   age: 22,
//   isActive: true,
// });

// addStudent({
//   id: 2,
//   name: "Saurabh",
//   age: 17,
//   isActive: false,
// });

// addStudent({
//   id: 3,
//   name: "Bhumika",
//   age: 20,
//   isActive: true,
// });

// // 2) Display All Students
// const displayStudents = (): Student[] => {
//   return students;
// };

// console.log("All Students:");
// console.log(displayStudents());


// // 3) Search Student By ID
// const searchStudent = (id: number): Student | undefined => {
//   return students.find((student) => student.id === id);
// };

// console.log("Search Student:");
// console.log(searchStudent(1));


// // 4) Count Total Students
// const countTotalStudents = (): number => {
//   return students.length;
// };

// console.log("Total Students:");
// console.log(countTotalStudents());


// // 5) Get Adult Students
// const getAdultStudents = (): Student[] => {
//   return students.filter((student) => student.age >= 18);
// };

// console.log("Adult Students:");
// console.log(getAdultStudents());


// // 6) Check Student Status
// const checkStatus = (isActive: boolean): string => {
//   return isActive ? "Active" : "Inactive";
// };

// console.log("Student Status:");
// console.log(checkStatus(true));
// console.log(checkStatus(false));


// // 7) Greeting Function (Default Parameter)
// const greetStudent = (
//   name: string = "Guest"
// ): string => {
//   return `Hello ${name}`;
// };

// console.log(greetStudent("Bhavesh"));
// console.log(greetStudent());