const express = require("express");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const conferenceRoutes = require("./routes/conferenceRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"]
}))

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/conference", conferenceRoutes);
app.use("/registration", registrationRoutes);
app.use("/feedback", feedbackRoutes);



app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
