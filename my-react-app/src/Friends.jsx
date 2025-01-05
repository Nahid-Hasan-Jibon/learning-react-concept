import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))

  },[])
  return (
    <div className="box">
      <h3>Friends : {friends.length}</h3>
      {
        friends.map(friend=><Friend bondhu={friend}></Friend>)
      }
    </div>
  );
};

export default Friends;

/**
 * 1. sate to hold data
 * 2. Use useEffect with function and dependency
 * 3. fetch data
 * 4. get the data an set it to the setFunction in useState
 *  
 */
