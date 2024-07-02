import React, { useEffect, useState } from "react";
import Login from "./Login";

const ConferenceList = () => {
  const [conferences, setConferences] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const response = await fetch("http://localhost:5000/conference/getall");
        const data = await response.json();
        console.log(data);
        setConferences(data);
      } catch (err) {
        console.log("Error in fetching conference data: ", err);
      }
    };

    fetchConferences();
  }, []);

  const handleRegister = async (conferenceId) => {
    try {
      const response = await fetch(`http://localhost:5000/resistration/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userId, conferenceId  }),
         
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registration Sucsessfully");
        console.log(data);
      } else {
        console.log("Error", data);
        alert("Error Registration for conference");
      }
    } catch (err) {
      console.log("Error Registration for conference", err);
      alert("Error Registration for conference");
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    try {
      const response = await fetch(`http://localhost:5000/feedback/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, feedback }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Feedback Sucsessfully");
        console.log(e.target.feedback.value)
      } else {
        console.log("Error", data);
        alert("Error Feedback for conference");
      }
    } catch (err) {
      console.log("Error Feedback for conference", err);
      alert("Error Feedback for conference");
    }
  }
    

  return (
    <div>
      <h2>Conference Schedule</h2>
      <ul>
        {conferences.map((conference) => (
          <li key={conference._id}>
            <h4>{conference.title}</h4>
            <p>{conference.discription}</p>
            <p>{conference.date}</p>
            <button onClick={() => handleRegister(conferences._id)}>
              Register
            </button>
            {/* Feedback Formstore data in feedback model in the backend it should hold user id and the content of the feedback */}
            <form onSubmit={handleSumbit}>
              <input type="text" name="feedback" placeholder="Enter your feedback" />
              <button type="submit">Submit Feedback</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConferenceList;
