import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [user, setUser] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, user)
      .then(res => {
        console.log("Loggin in", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => console.log("trouble loggin in", err));
  };

  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center", alignContent: "center" }}>
      <h1>Welcome</h1>
      <form>
        <div style={{display: "flex", flexDirection:"column", alignItems:"center", alignContent: "center"  }}>
          <label>Username</label> <br/>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Enter username..."
            onChange={handleChange}
          /><br/>
          <label>Password</label><br/>
          <input
            type="text"
            name="password"
            value={user.password}
            placeholder="Enter password..."
            onChange={handleChange}
          /><br/>
          <button onClick={handleSubmit} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;