// 1) Partial - Makes all properties optional.
interface User{
  id:number,
  name:string,
  email:string
}
 const userA=(user:Partial<User>):Partial<User>=>{
  return user;
 }
console.log(userA({name:"Bhavesh"}));

const userB:Partial<User>={
  id:2
}

console.log(userB);


// 2) Pick - Select only required fields

const userC=(user:Pick<User, "id" | "name">)=>{
     return user;
}
console.log(userC({id:1, name:"bhavesh"}));


// 3) Omit - Creates a type by removing specific properties.
const userD=(user:Omit<User,"name">)=>{
  return user;
}
console.log(userD({id:1, email:"bhaveshdesale16@gmail.com"}));


// 4) Record - Creates an object type with specific key and value types.
const userE: Record<string, string>={
  admin:"Bhavesh",
  user:"Akash"

}

console.log(userE);

// 5 Readonly - Makes all properties immutable.
const userF=(user:Readonly<User>)=>{
  // const data=user.email="bhavesh"
return user

}
console.log(userF({id:1, name:"bhavesh", email:"bhaveshdesale"}));