type specificRole="admin" | "user"

interface User{
  id:number,
  name:string,
  email:string,
  role:specificRole,
  isActive:boolean
}

const users:User[]=[];

// 1) addUser
const addUser=(user:User)=>{
  users.push(user);
}
addUser({id:1, name:"Bhavesh", email:"bhaveshdesale16@gmail.com", role:"admin", isActive:true})
addUser({id:2, name:"Saurabh", email:"saurabh16@gmail.com", role:"admin", isActive:true})
addUser({id:3, name:"Bhumika", email:"bhumikapatil45@gmail.com", role:"user", isActive:false})


// 2) Display all users
const displayUsers=()=>{
  return users;
}
console.log(displayUsers());


// 3) Find user by id
const findUser=(id:number)=>{
const user=users.find((value)=>
 value.id===id
 )
 if(user){
  return `User with ${id} is found..`
 }
 else{
 return `User with ${id} does not exist..`
 }

}

console.log(findUser(1));

// 4) get active users
const activeUsers=()=>{
  return users.filter((user)=> user.isActive==true);

}
console.log(activeUsers());

// 5) get admin users
const getAdminUsers=()=>{
  return users.filter((user)=> user.role=="admin");
}
console.log(getAdminUsers());

// 6) count total users
const countUsers=()=>{
  return users.length;
}
console.log(countUsers());

// 7) optional parameter
const createProfile=(name:string, city?:string)=>{
  if(city){
    return `${name} from ${city}`

  }
  return `${name} from Unknown`
}
console.log(createProfile("Bhavesh", "Pune"));


// 8) Bonus Challenge

const updateUserProfile = (
  id:number,
  role:specificRole,
  updatedName:string
)=>{
  const user = users.find(
    (user)=> user.id===id
  );

  if(user){
    user.name = updatedName;
    user.role = role;

    return "User Updated Successfully";
  }

  return "User Not Found";
}
console.log(updateUserProfile(1, "admin", "Bhavesh"));