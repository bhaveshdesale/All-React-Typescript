import { Table }
from "./components/Table";

import {type User} from "./types/user";

import {type Product} from "./types/product";

function App() {

 const users: User[] = [
  {
   id:1,
   name:"Bhavesh",
   email:"bhavesh@gmail.com"
  }
 ];

 const products: Product[] = [
  {
   id:1,
   name:"Apple Watch",
   price:100000
  }
 ];

 return (
  <>

   <h1>Users</h1>

   <Table
    data={users}
    renderRow={(user) => (
     <>
      <h3>
       {user.name}
      </h3>

      <p>
       {user.email}
      </p>
     </>
    )}
   />
  <Table data={users}
  renderRow={(user)=> (
    <>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
    </>
  )}/>

   <h1>Products</h1>

   <Table
    data={products}
    renderRow={(product) => (
     <>
      <h3>
       {product.name}
      </h3>

      <p>
       ₹{product.price}
      </p>
     </>
    )}
   />

  </>
 );
}

export default App;