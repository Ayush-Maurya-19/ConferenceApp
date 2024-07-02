import React, { useState, useEffect } from "react";

const Registration = () => {
  const [registration, setRegistration] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch("http://localhost:5000/registration/getall");
        const data = await response.json();
        console.log(data);
        setRegistration(data);
      } catch (err) {
        console.log("Error in fetching conference data: ", err);
      }
    };

    fetchRegistrations();
  }, []);

  return <div>
    
    <h2>Registration List</h2>
    <ul>
      {registration.map((registrations) =>{
        <li key={registrations._id}>
        <h3>{registrations.conferenceId.title}</h3>
        <p>{registrations.userId.name}</p>
        </li>
      })}
    </ul>
  </div>;
};

export default Registration;
