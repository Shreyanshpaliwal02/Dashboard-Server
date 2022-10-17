const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hi !!");
});
app.get("/info", async (req, res) => {
  const ucount = await userModel.find().count();
  res.status(200).json({ count: ucount });
});
app.get("/user", async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
});
app.post("/user", async (req, res) => {
  const users = req.body;

  users.map(async (u) => {
    const newUser = await userModel.create(u);

    await newUser.save();
  });
  res.send = "one small step for man, one giant leap for mankind!";
});
const url =
  "mongodb+srv://admin:admin@cluster0.lgwpvop.mongodb.net/dashboard?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connectd"))
  .catch((err) => console.log(err, "Error connecting database"));
app.listen(8080, () => {
  console.log("Listning to port 8080");
});
