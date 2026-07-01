export interface User {

 name:{
  first:string;
  last:string;
 };

 email:string;

 phone:string;

 picture:{
  large:string;
 };

 location:{
  country:string;
 };
}