import { useEffect, useState } from "react";

const ConferenceList = () => {
  const [conferences, setConferences] = useState([]);
  const userId = JSON.parse(sessionStorage.user)._id;
  const userName = JSON.parse(sessionStorage.user).name;

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
      const response = await fetch("http://localhost:5000/registration/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, conferenceId, userName }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registered successfully");
        console.log(data);
      } else {
        console.log("Error", data);
        alert("Error registering for the conference");
      }
    } catch (err) {
      console.log("Error registering for the conference", err);
      alert("Error registering for the conference");
    }
  };

  const handleSubmit = async (e, conferenceId) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    try {
      const response = await fetch("http://localhost:5000/feedback/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, feedback, conferenceId }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Feedback submitted successfully");
        console.log(feedback);
      } else {
        console.log("Error", data);
        alert("Error submitting feedback for the conference");
      }
    } catch (err) {
      console.log("Error submitting feedback for the conference", err);
      alert("Error submitting feedback for the conference");
    }
  };

  return (
    <div>
      <h2>Conference Schedule</h2>
      <ul>
        {conferences.map((conference) => (
          <li key={conference._id}>
            <h4>{conference.title}</h4>
            <p>{conference.description}</p>
            <p>{conference.date}</p>
            <button onClick={() => handleRegister(conference._id)}>Register</button>
            {/* Feedback Form */}
            <form onSubmit={(e) => handleSubmit(e, conference._id)}>
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
