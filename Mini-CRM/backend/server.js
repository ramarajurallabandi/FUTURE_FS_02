
const leadRoutes = require("./routes/leadRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/miniCRM")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});
app.use("/api/leads", leadRoutes);

app.get("/test-add", async (req, res) => {
  const Lead = require("./models/Lead");

  const lead = new Lead({
    name: "Test User",
    email: "test@gmail.com",
    source: "Browser Test"
  });

  await lead.save();
  res.send("Test lead added");
});
app.get("/test-add", async (req, res) => {
  const Lead = require("./models/Lead");

  const lead = new Lead({
    name: "Test User",
    email: "test@gmail.com",
    source: "Browser Test"
  });

  await lead.save();
  res.send("Test lead added");
});


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
