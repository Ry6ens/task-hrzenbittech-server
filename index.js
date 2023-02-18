const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const contactRoutes = require("./routes/contacts");

dotenv.config();

const { PORT = 4000 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log("Connected to backend.");
});
