import EmployeeCard
from "./components/EmployeeCard";

import {
 type PublicEmployee
} from "./types/employee";

function App(){

 const employee:
 PublicEmployee = {

  id:1,

  name:"Bhavesh",

  email:
   "bhavesh@gmail.com",

  department:"IT",

  salary:50000
 };

 return (
  <>
   <EmployeeCard
    employee={employee}
   />
  </>
 );
}

export default App;