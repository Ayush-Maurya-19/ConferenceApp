import React, { useState, useEffect } from "react";

const ManageConferenceDetails = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [date, setDate] = useState("");
  const [conferences, setConferences] = useState([]);

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

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/conference/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, discription, date }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Conference Added Sucsessfully");
        console.log(data.title, data.discription, data.date);
        setDate("");
        setDiscription("");
        setTitle("");
      } else {
        console.log("Error", data);
        alert("Error Adding Conference");
      }
    } catch (err) {
      console.log("Error Adding Conference", err);
      alert("Error Adding Conference");
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/conference/getbyid/${id}`
      );
      const data = await response.json();
      console.log(data);
      setTitle(data.title);
      setDiscription(data.discription);
      setDate(data.date);
    } catch (err) {
      console.log("Error in fetching conference data: ", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/conference/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Conference Deleted Sucsessfully");
        console.log(data);
      } else {
        console.log("Error", data);
        alert("Error Deleting Conference");
      }
    } catch (err) {
      console.log("Error Deleting Conference", err);
      alert("Error Deleting Conference");
    }
  };

  return (
    <div>
      <h2>Add Conference Form</h2>
      <br />
      <form onSubmit={handleSumbit}>
        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>discription:</label>
        <input
          type="text"
          onChange={(e) => setDiscription(e.target.value)}
          value={discription}
        />
        <label>date:</label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <button type="submit">Add Conference</button>
      </form>

      <div style={{ marginTop: "100px" }}>
        <h2>Manage Conference Details</h2>
        <ul>
          {conferences.map((conference) => (
            <li key={conference._id} style={{ marginTop: "10px" }}>
              <h4>{conference.title}</h4>
              <p>{conference.discription}</p>
              <p>{conference.date}</p>
              <button onClick={() => handleEdit(conference._id)}>
                Edit Conference
              </button>
              <button onClick={() => handleDelete(conference._id)}>
                Delete Conference
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageConferenceDetails;
