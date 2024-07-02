import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSumbit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await fetch(`http://localhost:5000/user/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      sessionStorage.setItem("user", JSON.stringify(data))

      if (response.ok) {
        console.log(data);
        setEmail("");
        setPassword("");
        alert("Login Sucsessfully");
        navigate("/")
      } else {
        console.log("Error", data);
        alert("Error in Login");
      }
    } catch (err) {
      console.log("There is an error in Login", err);
      alert("Error Login");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <br />
      <form onSubmit={handleSumbit}>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
