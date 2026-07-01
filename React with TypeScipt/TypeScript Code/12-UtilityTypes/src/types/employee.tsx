export interface Employee{
  id:number,
  name:string,
  email:string,
  department:string,
  salary:number,
  password:number
}

export type EmployeeCardData=Pick<Employee, "name"| "email">

export type PublicEmployee=Omit<Employee, "password">
export interface DashboardConfig {

 appName:string;

 version:string;
}