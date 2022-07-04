import React from "react";
import { useState } from "react";

const Example = () => {
//   const [text, setText] = useState("");
//   const [email, setEmail] = useState("");

  const [userData, setUserData] = useState({
     names: "",
     email: ""
  })

  const [users, setUsers] = useState([{
    "name": "Nrupul",
    "email": "nrupul@gmail.com"
  }]);

  const handleChange = (event) => {
    console.log("event.target.name---", event.target.name);

    console.log("event.target---", event.target);

    // setText(event.target.value);

    console.log("event--", event);
    //destructuring => es6
    const {name, value} = event.target

    setUserData({
        ...userData,
       [name] : value
    })
  };

  const handleAdd = () => {
    // users.push(text);
    // setUsers(users);
    setUsers([...users, userData]);
    // setEmail(email)
    // console.log(users);
  };

  return (
    <div>
      <input
        value={userData.name}
        placeholder="name"
        name="name"
        type="text"
        onChange={handleChange}
      />
      <br />
      <br />


      <input
        // value={text}
        // value={email}
        value={userData.email}
        placeholder="email"
        name="email"
        type="email"
        // onChange={(e) => setEmail(e.target.value)}
         onChange={ handleChange }

      />
      <br />
      <br />
      <button onClick={handleAdd}> add </button>
      <br />
      <br />
      {/* <div> value: {text} </div> */}
      <br />
      <div>
        users:
        <div>
          {users.map((user) => {
            return <h4 key={user.name}> {user.name} ---------- {user.email} </h4>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Example;
