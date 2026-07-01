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
}


// export interface User2{
//   results:[
//    name: {
//       title:string,
//       first:string,
//       last:string
//     },
//     email:string,

//     phone:string,
//     picture:{
//       large:string
//     }

//   ],
//   info:{
//     page:number
//   }
// }