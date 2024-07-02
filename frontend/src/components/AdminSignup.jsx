import React, { useState } from 'react'

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSumbit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:5000/admin/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setEmail("")
        setName("")
        setPassword("")
        alert("Signup Sucsessfully");
      } else {
        console.log("Error", data);
        alert("Error in signIn");
      }
    } catch (err) {
      console.log("There is an error in signUp", err);
      alert("Error signUp");
    }
  };

  return (
<div>
      <h2>Admin SignUp Form</h2>
      <br />
      <form onSubmit={handleSumbit}>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
        <button type="submit">SignIn</button>
      </form>
    </div>  )
}

export default AdminSignup