import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))

  },[])
  return <div>
    <h2>Users : {users.length}</h2>
  </div>;
};

export default User;


/**
 * 1. declare a state to hold the data
 * 2.Use useEffect hook with call back kfunction and dependency array .
 * 3. Use fetch to loads data
 * 4. data ta jokhn pabe tokhon tokhn se data ta setUsers a set kore dibo
*/
