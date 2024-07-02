import { useState, useEffect } from "react";

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
        console.log("Error in fetching registration data: ", err);
      }
    };

    fetchRegistrations();
  }, []);

  return <div>
    
    <h2>Registration List</h2>
    <table>
      <thead>
        <tr>
          <th>Registration Id</th>
          <th>User Id</th>
          <th>Conference Id</th>
          <th>User Name</th>
        </tr>
      </thead>
      <tbody>
        {registration.map((registration) => {
          return <tr key={registration._id}>
            <td>{registration._id}</td>
            <td>{registration.userId}</td>
            <td>{registration.userName}</td>
            <td>{registration.conferenceId}</td>
          </tr>;
        })}
      </tbody>
    </table>
  </div>;
};

export default Registration;
