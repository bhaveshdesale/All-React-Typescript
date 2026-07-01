const user = { name:"Bhumika", age:20}
console.log(user.name)
// console.log(user.email)


const obj={
  name:"bhavesh",
  age:22
}
console.log(obj.age);

const signIn=(username:string, email:string, isSingIn:boolean, password:string)=>{
  if(isSingIn){
    return `username ${username} is already exist! `
  }
  return `${username} with ${email} sign in successfull!`

}

console.log(signIn("bhavesh", "bhaveshdesale16@gmail.com", false, "bhavesh@2004"))



const arr